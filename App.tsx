import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Process />
      <Work />
      <Services />
      <Pricing />
      <Faq />
      <Contact />
    </Layout>
  );
};

export default App;