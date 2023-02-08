import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.png';
import AppScreen from '../images/app.png';
import Logo from '../images/logo.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const sendLocation = async (location) => {
    const response = await fetch('https://api.docktopus.com/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location }),
    });

    const result = await response.json();
  };

  return (
    <section className="relative h-[100vh] flex items-center">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop
                stopColor="#FFF"
                offset="0%"
              />
              <stop
                stopColor="#EAEAEA"
                offset="77.402%"
              />
              <stop
                stopColor="#DFDFDF"
                offset="100%"
              />
            </linearGradient>
          </defs>
          <g
            fill="url(#illustration-01)"
            fillRule="evenodd"
          >
            <circle
              cx="1232"
              cy="128"
              r="128"
            />
            <circle
              cx="155"
              cy="443"
              r="64"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-20 pb-12 md:pt-25 md:pb-20">
          {/* Section header */}
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img
                src={Logo}
                className="w-[15%] h-[15%] inline ml-[65px]"
              />
              <div className="w-[60px] ml-[5px] self-end bg-gray-200 rounded-lg font-semibold p-1">BETA</div>
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Sleek. Convenient. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#667da6] to-[#203673]">
                Music at your fingertips
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Take control of your music with the <br /> <span className="font-semibold">sleek </span>and{' '}
                <span className="font-semibold">powerful </span> music widget from your Dock
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={AppScreen}
                  alt=""
                />
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-white bg-[#667da6] font-semibold rounded-xl w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                      onClick={() => sendLocation('download_free')}
                    >
                      Download Free
                    </a>
                  </div>
                  <div>
                    <a
                      className="btn text-white bg-gray-800 hover:bg-gray-600 font-semibold rounded-xl w-full sm:w-auto sm:ml-4"
                      href="https://buy.stripe.com/4gweWX0xwftya1afYY"
                      onClick={() => sendLocation('purchase_license')}
                    >
                      Purchase License
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <img
                src={AppScreen}
                alt=""
              />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
