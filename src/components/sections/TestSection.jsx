import { useState, useRef } from 'react';
import {
  GoogleMap,
  Marker,
  Autocomplete,
  InfoWindow,
  DirectionsRenderer,
  StreetViewPanorama,
} from '@react-google-maps/api';
// import './TestSection.scss';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 0,
  lng: 0,
};

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
];

const TestSection = () => {
  const [currentDemo, setCurrentDemo] = useState('addressFinder');
  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [mapType, setMapType] = useState('roadmap');
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [directions, setDirections] = useState(null);
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [heatmapPoints, setHeatmapPoints] = useState([]);
  const autocompleteRef = useRef(null);
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
  const mapRef = useRef(null);

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

  const addMarker = () => {
    const newMarker = {
      position: center,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      infoContent: `Marker at ${center.lat}, ${center.lng}`,
    };
    setMarkers([...markers, newMarker]);
  };

  const calculateDirections = () => {
    if (!startAddress || !endAddress) {
      alert('Please enter both start and end addresses.');
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: startAddress,
        destination: endAddress,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Directions request failed due to ' + status);
          alert('Could not find a route between the addresses.');
        }
      }
    );
  };

  const generateHeatmap = () => {
    const points = [];
    for (let i = 0; i < 50; i++) {
      points.push({
        location: new window.google.maps.LatLng(
          center.lat + (Math.random() - 0.5) * 0.05,
          center.lng + (Math.random() - 0.5) * 0.05
        ),
        weight: Math.random(),
      });
    }
    setHeatmapPoints(points);
  };

  const demoControls = () => {
    switch (currentDemo) {
      case 'mapTypes':
        return (
          <select value={mapType} onChange={(e) => setMapType(e.target.value)}>
            <option value="roadmap">Roadmap</option>
            <option value="satellite">Satellite</option>
            <option value="hybrid">Hybrid</option>
            <option value="terrain">Terrain</option>
          </select>
        );
      case 'markers':
        return (
          <div>
            <button onClick={addMarker}>Add Marker</button>
            <button onClick={() => setMarkers([])}>Clear Markers</button>
          </div>
        );
      case 'addressFinder':
        return <p>Use the address finder to locate places on the map.</p>;
      case 'directions':
        return (
          <div>
            <input
              type="text"
              placeholder="Start address"
              value={startAddress}
              onChange={(e) => setStartAddress(e.target.value)}
              className="address-input"
            />
            <input
              type="text"
              placeholder="End address"
              value={endAddress}
              onChange={(e) => setEndAddress(e.target.value)}
              className="address-input"
            />
            <button onClick={calculateDirections}>Get Directions</button>
            <button onClick={() => setDirections(null)}>Clear Directions</button>
          </div>
        );
      case 'heatmaps':
        return (
          <div>
            <button onClick={generateHeatmap}>Generate Heatmap</button>
            <button onClick={() => setHeatmapPoints([])}>Clear Heatmap</button>
          </div>
        );
      case 'streetView':
        return <p>Click the map to view Street View at that location.</p>;
      default:
        return null;
    }
  };

  const onMapClick = (e) => {
    if (currentDemo === 'streetView') {
      const clickedLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setCenter(clickedLatLng);
    }
  };

  return (
    <div className="map-page-container">
      <div className="demo-selection">
        <button onClick={() => setCurrentDemo('mapTypes')}>Map Types</button>
        <button onClick={() => setCurrentDemo('markers')}>Markers</button>
        <button onClick={() => setCurrentDemo('addressFinder')}>Address Finder</button>
        <button onClick={() => setCurrentDemo('directions')}>Directions</button>
        <button onClick={() => setCurrentDemo('heatmaps')}>Heatmaps</button>
        <button onClick={() => setCurrentDemo('streetView')}>Street View</button>
      </div>
      <div className="address-form-container">
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
      </div>
      <h2>{currentDemo} Demo</h2>
      <div className="demo-controls">{demoControls()}</div>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          mapTypeId={mapType}
          options={{
            styles: darkModeStyles,
            streetViewControl: currentDemo === 'streetView',
          }}
          onClick={onMapClick}
          onLoad={(map) => (mapRef.current = map)}
        >
          {currentDemo === 'addressFinder' && <Marker position={markerPosition} />}
          {currentDemo === 'markers' &&
            markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={marker.icon}
                onClick={() => setSelectedMarker(marker)}
              />
            ))}
          {currentDemo === 'markers' && selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>{selectedMarker.infoContent}</div>
            </InfoWindow>
          )}
          {currentDemo === 'directions' && directions && (
            <DirectionsRenderer directions={directions} />
          )}
          {currentDemo === 'heatmaps' && heatmapPoints.length > 0 && (
            <window.google.maps.visualization.HeatmapLayer
              data={heatmapPoints}
              options={{ radius: 20 }}
            />
          )}
          {currentDemo === 'streetView' && (
            <StreetViewPanorama
              position={center}
              visible={true}
              options={{
                disableDefaultUI: true,
                enableCloseButton: false,
              }}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default TestSection;