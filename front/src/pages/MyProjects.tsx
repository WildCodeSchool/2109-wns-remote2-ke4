import CardMyProject from '../components/MyProjects/Card';
import { MyProjectsMock } from '../mock/myprojects.mock';

const MyProjects = () => {
  return (
    <div
      style={{
        width: '100%',
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
    </div>
  );
};

export default MyProjects;
