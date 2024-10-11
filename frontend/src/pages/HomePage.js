import React from 'react';
import MapList from '../components/MapList';
import MapForm from '../components/MapForm';
import '../HomeNav.css'

const HomePage = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="home-page">
      <div className="container">
        <div className="map-container">
          <MapList />
        </div>
        {token && (
          <div className="map-form">
            <MapForm token={token} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;