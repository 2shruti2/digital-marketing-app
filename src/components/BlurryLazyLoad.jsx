import { useEffect } from 'react';

const BlurryLazyLoad = () => {
  useEffect(() => {
    const blurLoadDivs = document.querySelectorAll('.blur__load');

    const handleImageLoad = (div) => {
      div.classList.add('loaded');
      div.style.backgroundImage = 'none';
    };

    blurLoadDivs.forEach((div) => {
      const img = div.querySelector('img');

      if (img.complete) {
        handleImageLoad(div);
      } else {
        img.addEventListener('load', () => handleImageLoad(div));
      }
    });

    // Clean up event listeners when the component unmounts
    return () => {
      blurLoadDivs.forEach((div) => {
        const img = div.querySelector('img');
        img.removeEventListener('load', () => handleImageLoad(div));
      });
    };
  }, []);

  return null; // This component doesn't render any JSX
};

export default BlurryLazyLoad;