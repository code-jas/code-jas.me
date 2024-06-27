import React from 'react';

const HomePage: React.FC = () => {
   return (
      <div className="path">
         <section id="services" style={{ height: '100vh', padding: '20px' }}>
            Services Content
         </section>
         <section id="works" style={{ height: '100vh', padding: '20px' }}>
            Works Content
         </section>
         <section id="reviews" style={{ height: '100vh', padding: '20px' }}>
            Reviews Content
         </section>
      </div>
   );
};

export default HomePage;
