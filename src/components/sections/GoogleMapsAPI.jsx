import { useState, useRef } from 'react';
import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
// import './GoogleMapsAPI.scss'; // Uncommented to apply styles

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 41.878876,
  lng: -87.635915,
};

// Dark mode styles for the map
const darkModeStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

const GoogleMapsAPI = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [hasText, setHasText] = useState(false);
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleInputChange = (e) => {
    setHasText(e.target.value.length > 0);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setHasText(false);
      setCenter(defaultCenter);
      setMarkerPosition(defaultCenter);
      inputRef.current.focus();
    }
  };

  return (
    <div className="map-page-container">
      <div className="address-form-container">
        <div className="input-container">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              ref={inputRef}
              type="text"
              onChange={handleInputChange}
              placeholder="Enter an address"
              className="address-input"
            />
          </Autocomplete>
          {hasText && (
            <button className="clear-button" onClick={handleClear}>
              ×
            </button>
          )}
        </div>
      </div>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={{ styles: darkModeStyles }}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapsAPI;



































