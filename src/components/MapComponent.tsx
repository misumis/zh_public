import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';

function MyMapComponent() {
  const loc = { lat: 51.77648, lng: 19.542902 };
  const [mapTypeId, setMapTypeId] = useState('terrain');
  const ref = useRef<GoogleMap>(null);

  const handleOnMapTypeIdChange = () => {
    setMapTypeId(ref?.current?.state?.map?.getMapTypeId() || '');
  };

  const isTerrainOrRoadmap =
    mapTypeId === 'terrain' || mapTypeId === 'roadmap' || mapTypeId === '';

  const options = {
    fillColor: isTerrainOrRoadmap ? 'green' : 'red',
    fillOpacity: 0.5,
    strokeColor: isTerrainOrRoadmap ? 'green' : 'red',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const paths = [
    { lat: 51.776593, lng: 19.541021 },
    { lat: 51.776825, lng: 19.541175 },
    { lat: 51.776344, lng: 19.544973 },
    { lat: 51.776108, lng: 19.544667 },
  ];

  const entryLoc = { lat: 51.776204, lng: 19.544773 };

  return (
    <GoogleMap
      ref={ref}
      id='map'
      zoom={17}
      center={loc}
      onMapTypeIdChanged={handleOnMapTypeIdChange}
      mapContainerClassName='xs:min-h-[300px] sm:min-h-[400px] md:sm:min-h-[500px]'
    >
      <Polygon paths={paths} options={options} />
      <Marker position={entryLoc} />
    </GoogleMap>
  );
}

const MapComponent = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey=''>
        <MyMapComponent />
      </LoadScript>
    </div>
  );
};

export default MapComponent;
