import React, { useState } from 'react';
import NavbarComponent from '../components/Navbar';
import Arrow from '../components/svgs/arrow';
import FullHeightBackground from '../components/FullHeightBackground';
import useWindowDimensions from '../utils/dimensionsHelper';
import { useAuthContext } from '../utils/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { height, width } = useWindowDimensions();
  const { authenticated: isAuthFromContext } = useAuthContext();
  const token = localStorage.getItem('token');
  const authenticated = isAuthFromContext || token;

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
  const heroText = !authenticated ? 'Signup / Login to get started !' : <>Checkout your <Link to="/profile">profile</Link> or Logout</>;
  return(
    <div>
      <FullHeightBackground backgroundColor="#41d896e6" />
      <NavbarComponent />
      <div className="container-fluid">
        {/* {(!authenticated) ? <> */}
          <div className="row">
            {!(width < 475) && <div className="col d-flex justify-content-center text-center" style={{flexDirection: 'column'}}>
              <div className="rounded p-5 mx-5">
                <span className={`font-weight-bold ${fontClass}`}>
                  {heroText}
                </span>
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
              <span className={`w-100 font-weight-bold ${fontClass}`}>
                {heroText}
              </span>
            </div>
          </div>}
        {/* </>
        :
        <>
          <span className="position-absolute m-auto text-center" style={{bottom: 0, top: 0, left: 0, right: 0, width: 200, height: 200}}>
            <h1>Checkout your <Link to="/profile">profile</Link></h1>
          </span>
        </>} */}
      </div>
    </div>
  )
};

export default Home;