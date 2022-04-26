import CardMyProject from '../components/MyProjects/Card';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useGetAllMyProjectsQuery } from '../graphql/Queries/Project/Project.query';

export const ButtonProject = styled(Button)({
  padding: '10px 20px',
  background: '#07DFCD',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  boxShadow: '0px 0px 10px 1px #000000',
  '&:hover': {
    background: '#07DFCD',
  },
});
export const Text = styled('h1')({
  fontSize: '60px',
  color: '#fff',
  textAlign: 'center',
  marginBottom: '55px',
});

export const ButtonNoProject = styled(Button)({
  padding: '10px 20px',
  background: '#07DFCD',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  maxWidth: '200px',
  boxShadow: '0px 0px 10px 1px #000000',
  '&:hover': {
    background: '#07DFCD',
  },
});

const HomeAccount = () => {
  const navigate = useNavigate();
  const { data, loading } = useGetAllMyProjectsQuery();
  const projects = data?.getAllProjectsByViewer || [];
  if (loading) return <div>Loading...</div>;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {projects.length > 0 ? (
        <div
          style={{
            width: '90%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '100px',
          }}
        >
          {(projects || []).map((project) => (
            <CardMyProject key={project?.id} project={project} />
          ))}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ButtonProject
              onClick={() => {
                navigate('/createProject');
              }}
            >
              Nouveau Projet
            </ButtonProject>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
          }}
        >
          <Text>Vous n'avez pas de projet pour l'instant</Text>
          <ButtonNoProject
            onClick={() => {
              navigate('/createProject');
            }}
          >
            Nouveau Projet
          </ButtonNoProject>
        </div>
      )}
    </div>
  );
};

export default HomeAccount;
