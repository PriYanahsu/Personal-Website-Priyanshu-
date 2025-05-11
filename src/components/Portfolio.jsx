import React from 'react';
import INNFOODIE from '../assets/portfolio/INNFOODIE.png';
import Disease from '../assets/portfolio/disease.png';
import personal from '../assets/portfolio/personal.png';
import spam from '../assets/portfolio/spam.png';
import weather from '../assets/portfolio/weather.png';
import fileShare from '../assets/portfolio/fileShare.png';
import smartCompaint from '../assets/portfolio/smartcomplaint.png';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: weather,
      demoLink:
        'https://weather-forecaste-site-predict-5-futurestic-days-5c4x.vercel.app/',
      codeLink:
        'https://github.com/PriYanahsu/Weather-forecaste-site----predict-5-futurestic-days',
    },
    {
      id: 2,
      src: INNFOODIE,
      demoLink: 'https://innfoodie-food-order-site-24-7.vercel.app/',
      codeLink: 'https://github.com/PriYanahsu/INNFOODIE-Food-order-Site-24-7',
    },
    {
      id: 3,
      src: Disease,
      demoLink:
        'https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML',
      codeLink:
        'https://github.com/PriYanahsu/Disease-Prediction-with-Drug-Recommendation-Using-ML',
    },
    {
      id: 4,
      src: personal,
      demoLink:
        'https://personal-website-priyanshu.vercel.app/',
      codeLink:
        'https://github.com/PriYanahsu/Personal-Website-Priyanshu-',
    },
    {
      id: 5,
      src: fileShare,
      demoLink:
        'https://github.com/PriYanahsu/file-share-app',
      codeLink:
        'https://github.com/PriYanahsu/file-share-app',
    },
    {
      id: 6,
      src: spam,
      demoLink:
        'https://github.com/PriYanahsu/Spam-Message-Detector',
      codeLink:
        'https://github.com/PriYanahsu/Spam-Message-Detector',
    },
    {
      id: 7,
      src: smartCompaint,
      demoLink:
        'https://online-complaint-mangement-system.vercel.app/',
      codeLink:
        'https://github.com/PriYanahsu/-Smart-Complaint-Management-System-Full-Stack-',
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12 md:py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-base sm:text-lg md:text-xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
