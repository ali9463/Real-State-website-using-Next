import { useState } from 'react';
import Card from './card';
import cardImageBg1 from '../assets/images/Image.png';
import cardImageBg2 from '../assets/images/Image-2.png';
import cardImageBg3 from '../assets/images/Image-3.png';
import cardImageBg4 from '../assets/images/Image-4.png';
import cardImageBg5 from '../assets/images/Image-5.png';
import cardImageBg6 from '../assets/images/Image-6.png';
import cardImageBg7 from '../assets/images/Image-7.png';
import cardImageBg8 from '../assets/images/Image-8.png';
import cardImageBg9 from '../assets/images/Image-9.png';
import cardImageBg10 from '../assets/images/Home.jpg';
import cardImageBg11 from '../assets/images/home2.jpg';
import cardImageBg12 from '../assets/images/home3.jpg';
import cardImageBg13 from '../assets/images/home4.jpg';
import cardImageBg14 from '../assets/images/home5.jpg';

const HomeCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
      <Card
        imageSrc={cardImageBg10}
        title="Modern Grass House"
        price="$ 1,625,000"
      />
      <Card
        imageSrc={cardImageBg11}
        title="Asenthtic House"
        price="$ 1,425,00"
      />
      <Card
        imageSrc={cardImageBg12}
        title="House with Lightning"
        price="$ 1,725,000"
      />
      <Card
        imageSrc={cardImageBg13}
        title="Modern Vibe House"
        price="$ 1,925,000"
      />
      <Card
        imageSrc={cardImageBg14}
        title="Classic House"
        price="$ 1,825,000"
      />
    </div>
  );
};

const ApartmentCardComponent = () => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5  ">
      <Card
        imageSrc={cardImageBg4}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg5}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg6}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg7}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg8}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg9}
        title="Modern Glass House"
        price="$ 2,500,000"
      />

      <Card
        imageSrc={cardImageBg1}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg2}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg3}
        title="Modern Glass House"
        price="$ 2,500,000"
      />
    </div>
  );
};

const tabs = [
  { label: 'Home', content: <HomeCardComponent /> },
  { label: 'Apartment', content: <ApartmentCardComponent /> },
  { label: 'Office', content: <HomeCardComponent /> },
  { label: 'Warehouse', content: <ApartmentCardComponent /> },
  { label: 'Parking', content: <HomeCardComponent /> }
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-orange-500 '
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-500'
            } px-2 font-normal py-4 sm:px-6 sm:font-medium focus:outline-none ${
              idx === 3 && 'hidden sm:flex'
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
