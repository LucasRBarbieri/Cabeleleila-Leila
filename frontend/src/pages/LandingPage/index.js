import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import RegisterForm from '../../components/RegisterForm';
import hairStylistIcon from '../../assets/images/hair-stylist-icon.png';

import '../../assets/styles/landingPage.css';

function Logon() {
  return (    
    <>
      <HeaderComponent />
      <div id="landing-page" className="normal-page">
        <div className="form-container">
          <img id="icon" src={hairStylistIcon} alt="Salão da cabeleleila leila" />
          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default Logon;