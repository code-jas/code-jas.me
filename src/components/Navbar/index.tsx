import React, { useState, useEffect } from 'react';
import styles from './styles';

const GlassNavbar: React.FC = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.initial}`}>
         <ul className={styles.navList}>
            <li className={styles.navItem}>
               <a href="#services">Services</a>
            </li>
            <li className={styles.navItem}>
               <a href="#works">Works</a>
            </li>
            <li className={styles.navItem}>
               <a href="#reviews">Reviews</a>
            </li>
         </ul>
      </nav>
   );
};

export default GlassNavbar;
