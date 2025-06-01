import { useState, useRef } from 'react';
import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
// import './GoogleMapsAPI.scss';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 41.83350,
  lng: -87.72205457322676,
};

const GoogleMapsAPI = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const autocompleteRef = useRef(null);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const newCenter = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setCenter(newCenter);
        setMarkerPosition(newCenter);
      } else {
        console.warn('No geometry available for selected place:', place);
      }
    }
  };

  return (
    <div className="google-maps-api-container">
      <form className="address-finder-form">
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter an address"
            className="address-input"
          />
        </Autocomplete>
      </form>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        mapContainerClassName="map-container"
        center={center}
        zoom={15}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapsAPI;