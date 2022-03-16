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

const CardMyProject: React.FC<{
  project: {
    name: string;
    devNumber: number;
    createdAt: string;
    isFavorite: boolean;
  };
}> = ({ project }) => {
  return (
    <Card>
      {project?.isFavorite && <FavIcon />}
      <NameProject variant="inherit">{project?.name}</NameProject>
      <DivNumberDev>
        <DevIcons />
        <TextNumberDev>{project?.devNumber}</TextNumberDev>
      </DivNumberDev>

      <TextDateCreate>Créer le {project?.createdAt}</TextDateCreate>
      <Btn>Allez au projet</Btn>
    </Card>
  );
};
export default CardMyProject;
