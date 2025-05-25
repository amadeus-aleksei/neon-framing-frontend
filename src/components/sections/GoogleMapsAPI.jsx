import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import AdvancedMarkerComponent from '../common/AdvancedMarkerComponent'; // Import the separate component
// import './styles.scss'; // Import your SCSS file (adjust the path as necessary)

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

const GoogleMapsAPI = () => {
  const apiKey = 'AIzaSyBH201E6Ka1ADKdVvunD860kaQDsKMkrvQ'; // Replace with your actual API key

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['marker']} mapIds={['DEMO_MAP_ID']}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        mapContainerClassName="map-container"
        center={defaultCenter}
        zoom={15}
        options={{ mapId: 'DEMO_MAP_ID' }}
      >
        <AdvancedMarkerComponent position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsAPI;