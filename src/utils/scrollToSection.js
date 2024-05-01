import { animateScroll as scroll } from 'react-scroll';

const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const toY = targetElement.getBoundingClientRect().top + window.scrollY;
    
        scroll.scrollTo(toY, {
          duration: 2000,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }
};

export default scrollToSection;