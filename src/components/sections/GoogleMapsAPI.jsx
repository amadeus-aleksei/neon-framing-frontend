import React, { useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, LoadScript } from '@react-google-maps/api';

const GoogleMapsAPI = () => {
  const apiKey = 'AIzaSyBH201E6Ka1ADKdVvunD860kaQDsKMkrvQ'; // Replace with your actual Google Maps API key
  const [directions, setDirections] = useState(null);
  const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates
  const mapContainerStyle = { width: '100%', height: '400px' };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="google-maps-api-page">
        <section className="examples">
          {/* Simple Map Example */}
          <div className="example">
            <h3>Simple Map</h3>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              mapContainerClassName="map-container"
              center={defaultCenter}
              zoom={15}
            >
              <Marker position={defaultCenter} title="Example Spot" />
            </GoogleMap>
          </div>

          {/* Directions Example */}
          {/* <div className="example">
            <h3>Directions</h3>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              mapContainerClassName="map-container"
              center={defaultCenter}
              zoom={12}
            >
              <Marker position={defaultCenter} />
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </div> */}
        </section>
      </div>
    </LoadScript>
  );
};

export default GoogleMapsAPI;