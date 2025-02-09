import { Google } from '@/components/auth';
import Container from '@/components/main/Container';
const Home = () => {
  return (
    <Container className="max-w-md mx-auto py-8 pt-20" >
      <Google />
    </Container>
  );
};

export default Home;
