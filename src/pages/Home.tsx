import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import ProblemHome from '../components/ProblemHome';
import ServicesHome from '../components/ServicesHome';
import ClientHome from '../components/ClientHome';
import ThisYouHome from '../components/ThisYouHome';
import HowItWorksHome from '../components/HowItWorksHome';
import FAQHome from '../components/FAQHome';

const Home = () => {
  return (
    <Layout title="Small Business Digital Marketing Consultant North Lakes, Red Ox Digital">
      <HeroHome />
      <ProblemHome />
      <ServicesHome />
      <ClientHome />
      <ThisYouHome />
      <HowItWorksHome />
      <FAQHome />
    </Layout>
  );
};

export default Home;
