import Layout from '../components/Layout';
import FullPage from '../components/FullPage';

import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactsSection from '../components/sections/ContactsSection';

export default function Home() {
  return (
    <Layout page="Portfolio - KHIRAT Noha">
      <FullPage>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ContactsSection />
      </FullPage>
    </Layout>
  )
}
