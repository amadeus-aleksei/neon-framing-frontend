import React, { useState, useEffect } from 'react';
import { useGoogleMap, InfoWindow } from '@react-google-maps/api';

const AdvancedMarkerComponent = ({ position }) => {
  const map = useGoogleMap();
  const [address, setAddress] = useState('');
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  // Geocode the position to get the address when the component mounts
  useEffect(() => {
    if (map && window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: position }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const addr = results[0].formatted_address;
          console.log('Geocoded address:', addr);
          setAddress(addr);
        } else {
          console.error('Geocode was not successful: ' + status);
        }
      });
    }
  }, [map, position]);

  // Set up the marker and add a click listener
  useEffect(() => {
    if (map && window.google && window.google.maps && window.google.maps.marker) {
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position,
        map,
      });

      // Add click event to show the InfoWindow
      marker.addListener('gmp-click', () => {
        setShowInfoWindow(true);
      });

      // Cleanup when the component unmounts
      return () => {
        marker.map = null;
      };
    }
  }, [map, position]);

  return (
    <>
      {showInfoWindow && (
        <InfoWindow position={position} onCloseClick={() => setShowInfoWindow(false)}>
          <div className='info-window'>{address}</div>
        </InfoWindow>
      )}
    </>
  );
};

export default AdvancedMarkerComponent;