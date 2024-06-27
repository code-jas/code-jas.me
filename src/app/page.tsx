import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
   return (
      <Layout>
         <section id="services" style={{ height: '100vh', padding: '20px' }}>
            Services Content
         </section>
         <section id="works" style={{ height: '100vh', padding: '20px' }}>
            Works Content
         </section>
         <section id="reviews" style={{ height: '100vh', padding: '20px' }}>
            Reviews Content
         </section>
      </Layout>
   );
};

export default HomePage;
