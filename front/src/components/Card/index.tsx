import Box from '@mui/material/Box';
import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.jpg';
import avatar3 from '../../assets/images/avatar3.jpg';
import avatar4 from '../../assets/images/avatar4.jpg';
import avatar5 from '../../assets/images/avatar5.jpg';
import {
  AvatarDev,
  BarProgressive,
  BoxBottom,
  BoxTop,
  BtnCard,
  CardContent,
  CardTop,
  Container,
  ContainerBarProgressive,
  LeftContent,
  Line,
  NameProject,
  NameTicket,
  RightContent,
  TextDateUpdated,
  TextProgressive,
} from '../../elements/card.styled';
import AvatarGroup from '@mui/material/AvatarGroup';

interface CardType {
  id: number;
  project: string;
  ticket: string;
  dateUpdate: string;
  progress: number;
  rank: string;
}

const Card: React.FC<{ item: CardType }> = ({ item }) => {
  return (
    <Container>
      <CardTop
        bgColor={
          item?.rank === 'haute'
            ? '#F84B0D'
            : item?.rank === 'medium'
            ? '#F8D00D'
            : item?.rank === 'basse'
            ? '#53F80D'
            : '#F84B0D'
        }
      >
        <BoxTop>
          <NameProject variant="h5">{item?.project}</NameProject>
        </BoxTop>
        <Box sx={{ pr: 5 }}>
          <AvatarGroup max={3}>
            <AvatarDev src={avatar1} alt="imgdev" />
            <AvatarDev src={avatar2} alt="imgdev" />
            <AvatarDev src={avatar3} alt="imgdev" />
            <AvatarDev src={avatar4} alt="imgdev" />
            <AvatarDev src={avatar5} alt="imgdev" />
          </AvatarGroup>
        </Box>
      </CardTop>
      <CardContent>
        <LeftContent>
          <NameTicket variant="h3">{item?.ticket}</NameTicket>
          <BtnCard>Check details</BtnCard>
          <Line />
          <BoxBottom>
            <TextDateUpdated variant="inherit">Last Updated</TextDateUpdated>
            <TextDateUpdated variant="inherit">
              {item?.dateUpdate}
            </TextDateUpdated>
          </BoxBottom>
        </LeftContent>
        <RightContent>
          <TextProgressive variant="inherit">{item?.progress}%</TextProgressive>
          <ContainerBarProgressive>
            <BarProgressive
              progressHeight={item?.progress}
              bgColor={
                item?.progress >= 60
                  ? '#0DF81C'
                  : item?.progress < 60 && item?.progress > 40
                  ? '#B1F80D'
                  : item?.progress < 40
                  ? '#F84B0D'
                  : '#0DF81C'
              }
            ></BarProgressive>
          </ContainerBarProgressive>
        </RightContent>
      </CardContent>
    </Container>
  );
};
export default Card;
