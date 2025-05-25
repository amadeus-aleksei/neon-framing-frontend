import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useGoogleMap } from '@react-google-maps/api';

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
    <LoadScript googleMapsApiKey={apiKey} libraries={['marker']}>
      <div className="google-maps-api-page">
        <h1>Google Maps API Addon</h1>

        <section className="examples">
          <h2>Example Usage</h2>

          <div className="example">
            <h3>Simple Map with Marker</h3>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              mapContainerClassName="map-container"
              center={defaultCenter}
              zoom={15}
            >
              {/* Standard Marker (quick fix) */}
              <Marker position={defaultCenter} title="Neon Framing Store" />
            </GoogleMap>
          </div>
        </section>
      </div>
    </LoadScript>
  );
};

// Custom component for AdvancedMarkerElement
const AdvancedMarkerComponent = ({ position }) => {
  const map = useGoogleMap();

  useEffect(() => {
    if (map && window.google && window.google.maps && window.google.maps.marker) {
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position,
        map,
      });
      return () => {
        marker.map = null;
      };
    }
  }, [map, position]);

  return null;
};

export default GoogleMapsAPI;