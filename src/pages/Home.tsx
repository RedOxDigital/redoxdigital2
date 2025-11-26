import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import ProblemHome from '../components/ProblemHome';
import ServicesHome from '../components/ServicesHome';
import ClientHome from '../components/ClientHome';
import ThisYouHome from '../components/ThisYouHome';
import HowItWorksHome from '../components/HowItWorksHome';

const Home = () => {
  return (
    <Layout>
      <HeroHome />
      <ProblemHome />
      <ServicesHome />
      <ClientHome />
      <ThisYouHome />
      <HowItWorksHome />
    </Layout>
  );
};

export default Home;
