import React, { useState } from 'react';
import NavbarComponent from '../components/Navbar';
import Arrow from '../components/svgs/arrow';
import FullHeightBackground from '../components/FullHeightBackground';
import useWindowDimensions from '../utils/dimensionsHelper';

const Home = () => {
  const { height, width } = useWindowDimensions();
  let circleSize = width*0.3;
  let arrowHeight = height*0.8;
  let fontClass = 'h1';
  if (width < 475) {
    circleSize = 200;
    arrowHeight = height * 0.5;
    fontClass = 'h3';
  } else if (width <= 768) {
    circleSize = width * 0.2;
    arrowHeight = height * 0.5;
    fontClass = 'h2';
  } else {
    circleSize = width * 0.3;
    arrowHeight = height * 0.7;
    fontClass = 'h1';
  }
  return(
    <div>
      <FullHeightBackground backgroundColor="#41d896e6" />
      <NavbarComponent />
      <div className="container-fluid">
        <div className="row">
          {!(width < 475) && <div className="col d-flex justify-content-center text-center" style={{flexDirection: 'column'}}>
            <div className="rounded p-5 mx-5">
              <span className={`font-weight-bold ${fontClass}`}>Signup / Login to get started !</span>
            </div>
          </div>}
          <div className="col">
            <div className="mt-3 float-right">
              <Arrow height={arrowHeight} />
            </div>
          </div>
        </div><br />
        {(width < 475) && <div className="col">
          <div className="m-3 text-center rounded p-3">
            <span className={`w-100 font-weight-bold ${fontClass}`}>Signup/Login to get started !</span>
          </div>
        </div>}
      </div>
    </div>
  )
};

export default Home;