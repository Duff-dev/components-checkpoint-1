import React from 'react';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './App.css';


function Main() {
  return (
    <div className="container">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default Main;