
import axios from 'axios';

import Layout from '../components/Layout';
import FullPage from '../components/FullPage';
import Navigation from '../scripts/Navigation';

import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactsSection from '../components/sections/ContactsSection';

const fetchData = async () => await axios.get('http://localhost:1337/projects')
  .then(res => ({
    error: false,
    projects: res.data
  }))
  .catch(() => ({
    error: true,
    projects: null
  }),
)

function Home({ projects }) {
  return (
    <Layout page="Portfolio - KHIRAT Noha">
      <FullPage>
        <HomeSection />
        <AboutSection />
        <PortfolioSection data={ projects }/>
        <ContactsSection />
      </FullPage>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const data = await fetchData()

  return {
    props: {
      projects: data.projects
    }
  }
}

export default Home