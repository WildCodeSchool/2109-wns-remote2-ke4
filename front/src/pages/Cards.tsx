import Card from '../components/Card';
import { fakeData } from '../mock/ticketCards.mock';

const AllCards = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {fakeData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default AllCards;
