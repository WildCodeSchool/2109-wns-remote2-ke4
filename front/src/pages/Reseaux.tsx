import {
  Avatar,
  AvatarList,
  BoxContainer,
  Container,
  DivColleague,
  DivListColleague,
  DivOption,
  FullName,
  IconRemove,
  Line,
  SpanEmail,
  Title,
} from '../elements/reseaux.styled';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/lab/Autocomplete';
import { useState } from 'react';
import { capitalize } from '../libs/utils';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import defaultAvatar from '../assets/images/default_profile.png';
import toast from 'react-hot-toast';
import { TypeUser } from '../types';
import {
  FragmentColleagueFragmentDoc,
  useCreateWorkColleagueMutation,
  useDeleteWorkColleagueMutation,
} from '../graphql/Mutation/Reseaux/Reseaux.mutation';
import { useGetAllColleaguesQuery } from '../graphql/Queries/Reseaux/Reseaux.query';
import { useSearchUsersQuery } from '../graphql/Queries/User/User.query';
import { gql } from '@apollo/client';

const Reseaux: React.FC<{ viewer: TypeUser | undefined | null }> = ({
  viewer,
}) => {
  const [createWorkColleague] = useCreateWorkColleagueMutation();
  const [deleteWorkColleague] = useDeleteWorkColleagueMutation();
  const [search, setSearch] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOpen] = useState(false);
  const { data, loading } = useSearchUsersQuery({
    skip: search.length < 4,
    variables: {
      search: search,
    },
  });
  const users = data?.getSearchUser || [];
  const { data: dataColleagues, loading: loadingColleagues } =
    useGetAllColleaguesQuery();
  const colleagues = dataColleagues?.getManyWorkColleague;

  if (loadingColleagues) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <BoxContainer>
        <Title variant="h2">Mon Réseau</Title>
        <Typography variant="h6">
          Ajouter vos amies ou vos collegues pour une meilleur experience
          workteam
        </Typography>
        <Line />
        <Autocomplete
          style={{ width: '70%' }}
          value={null}
          inputValue={search}
          onInputChange={(_, newInputValue) => {
            setSearch(capitalize(newInputValue));
          }}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          //@ts-ignore
          isOptionEqualToValue={(option: any, value: any) =>
            option.id === value.id
          }
          getOptionLabel={(option: any) =>
            `${capitalize(option?.firstName)}  ${capitalize(
              option?.lastName
            )} (${option?.pseudo})`
          }
          renderOption={(props, option: any) => (
            <DivOption
              onClick={async () => {
                await createWorkColleague({
                  variables: {
                    workColleagueId: option.id,
                  },
                  update: (cache, { data: { createWorkColleague } }: any) => {
                    cache.modify({
                      //@ts-ignore

                      fields: {
                        getManyWorkColleague(
                          existingColleagues = [],
                          { readField }
                        ) {
                          const newColleague = cache.writeFragment({
                            data: createWorkColleague,
                            fragment: FragmentColleagueFragmentDoc,
                          });
                          if (
                            existingColleagues.some(
                              (ref: any) =>
                                readField('id', ref) === createWorkColleague?.id
                            )
                          ) {
                            return existingColleagues;
                          }
                          return [...existingColleagues, newColleague];
                        },
                      },
                    });
                  },
                  onCompleted: (data: any) => {
                    toast.success(
                      `${data?.createWorkColleague?.fullName} a bien été ajouter à votre réseau`
                    );
                  },
                  onError: (err) => toast.error(err.message),
                });
                setSearch('');
              }}
            >
              <Avatar
                image={
                  option?.avatar
                    ? `url(http://localhost:4000/avatar/${option?.avatar})`
                    : `url(${defaultAvatar})`
                }
              />
              {capitalize(option?.firstName)} {capitalize(option?.lastName)}
              <SpanEmail>{option?.pseudo}</SpanEmail>
            </DivOption>
          )}
          options={users.filter((el: any) => el.id !== viewer?.id)}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label={'Recherche utilisateur'}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading && <CircularProgress color="inherit" size={20} />}
                  </>
                ),
              }}
            />
          )}
        />
        <DivListColleague>
          {(colleagues || []).map((colleagues: any) => (
            <DivColleague key={colleagues.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AvatarList
                  image={
                    colleagues?.avatar
                      ? `url(http://localhost:4000/avatar/${colleagues?.avatar})`
                      : `url(${defaultAvatar})`
                  }
                />
                <Typography variant="h5">{colleagues.pseudo}</Typography>
                <FullName>{colleagues.fullName}</FullName>
              </div>
              <IconRemove
                onClick={async () => {
                  await deleteWorkColleague({
                    variables: {
                      workColleagueId: colleagues.id,
                    },
                    onCompleted: (data) => {
                      toast.success(
                        `${colleagues.fullName} a bien été retirer de votre réseau`
                      );
                    },
                    onError: (err) => toast.error(err.message),
                    update(cache) {
                      const id = colleagues.id;
                      const colleagueId = cache.identify({
                        id,
                        __typename: 'TypeUser',
                      });
                      cache.evict({ id: colleagueId });
                      cache.gc();
                    },
                  });
                }}
              />
            </DivColleague>
          ))}
        </DivListColleague>
      </BoxContainer>
    </Container>
  );
};
export default Reseaux;
