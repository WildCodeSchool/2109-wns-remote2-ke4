import CardMyProject from '../components/MyProjects/Card';
import { MyProjectsMock } from '../mock/myprojects.mock';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

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

const HomeAccount: React.FC<{ viewer: any }> = ({ viewer }) => {
  const history = useHistory();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
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
        {MyProjectsMock.map((project) => (
          <CardMyProject key={project.id} project={project} />
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
              history.push('/createProject');
            }}
          >
            Nouveau Projet
          </ButtonProject>
        </div>
      </div>
    </div>
  );
};

export default HomeAccount;
