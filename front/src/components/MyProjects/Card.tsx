import { useNavigate } from 'react-router-dom';
import {
  Btn,
  Card,
  DevIcons,
  DivNumberDev,
  FavIcon,
  NameProject,
  TextDateCreate,
  TextNumberDev,
} from '../../elements/myProjectCard.styled';
import { TypeProject } from '../../types';

const CardMyProject: React.FC<{
  project: any;
}> = ({ project }) => {
  const navigate = useNavigate();
  const createDate = new Date(project?.createdAt).toLocaleDateString('fr-FR');
  return (
    <Card>
      {project?.isFavorite && <FavIcon />}
      <NameProject variant="inherit">{project?.name}</NameProject>
      <DivNumberDev>
        <DevIcons />
        <TextNumberDev>{project?.numberDev}</TextNumberDev>
      </DivNumberDev>

      <TextDateCreate>Créer le {createDate}</TextDateCreate>
      <Btn onClick={() => navigate(`/project/${project?.id}`)}>
        Allez au projet
      </Btn>
    </Card>
  );
};
export default CardMyProject;
