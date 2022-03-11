import React, { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { isMobile, isTablet, isDesktop } from '../utilities';

function ImageSlider() {
  const [mobile, setIsMobile] = useState(false);
  const [tablet, setIsTablet] = useState(false);
  const [desktop, setIsDesktop] = useState(false);

  const images = [
    'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/offers/offer1.jpg',
    'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/offers/offer2.jpg',
    'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/offers/offer3.jpg',
    'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/offers/offer4.jpg',
    'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/offers/offer5.jpg',
  ];

  useEffect(() => {
    function handleResize() {
      const mobile = isMobile();
      const tablet = isTablet();
      const desktop = isDesktop();
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);
      console.log(mobile, tablet, desktop);
      console.log(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize');
  }, []);

  console.log(mobile, tablet, desktop);

  return (
    <div>
      <SimpleImageSlider
        width={mobile ? 400 : tablet ? 700 : 980}
        height={mobile ? 100 : tablet ? 180 : 240}
        images={images}
        showBullets={true}
        style={{ margin: '0 auto' }}
        // showNavs={true}
      />
    </div>
  );
}

export default ImageSlider;
