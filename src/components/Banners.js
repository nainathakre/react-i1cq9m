import React from 'react';
import Banner from './Banner';

const images = [
  {
    url: 'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/category/fruits.png',
    heading: 'Fruits & Vegetables',
    subHeading: 'A variety of fresh fruits and vegetables',
    btnText: 'Explore fruit-and-veg',
    btnUrl: '',
  },
  {
    url: 'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/category/bakery.png',
    heading: 'Bakery Cakes and Diary',
    subHeading:
      'The best cupcakes, cookies, cakies, pies, cheesecaskes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
    btnText: 'Explore bakery-cakes-diary',
    btnUrl: '',
  },
  {
    url: 'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/category/beverages.png',
    heading: 'Beverages',
    subHeading:
      'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.',
    btnText: 'Explore beverages',
    btnUrl: '',
  },
  {
    url: 'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/category/beauty.png',
    heading: 'Beauty & Hygiene',
    subHeading:
      'Buy beauty and personal care products online in India at best prices',
    btnText: 'Explore beauty-hygiene',
    btnUrl: '',
  },
  {
    url: 'https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/category/baby.png',
    heading: 'Baby Care',
    subHeading:
      'Shop online for Baby Products, Diapers, Skin Care Products, etc.',
    btnText: 'Explore Baby',
    btnUrl: '',
  },
];

function Banners() {
  return (
    <>
      {images.map((image, index) => {
        return <Banner data={image} index={index} />;
      })}
    </>
  );
}

export default Banners;
