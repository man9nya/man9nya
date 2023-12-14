import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useFindLocation } from "../../consts/hooks/useFindLocation";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./Map.css";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Map = () => {
  const [result, selected, setSelected, loading] = useFindLocation();
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, [loading, result]);

  const customMarker = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1201/1201643.png",
    iconSize: [38, 38],
  });

  return (
    <div className="container">
      <Sidebar result={result} selected={selected} setSelected={setSelected} />
      {(mapLoaded && (
        <MapContainer center={[60, 25]} zoom={5}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MarkerClusterGroup chunkedLoading>
            {result &&
              result?.results
                .filter(
                  (spot) =>
                    selected.length === 0 ||
                    selected.includes(spot.materials[0].code)
                )
                .map(
                  (spot) =>
                    spot?.geometry?.coordinates && (
                      <Marker
                        key={spot.spot_id}
                        position={[
                          spot.geometry.coordinates[1],
                          spot.geometry.coordinates[0],
                        ]}
                        icon={customMarker}
                      >
                        <Popup>address{spot?.address} <Link to={'/spot/' + spot.spot_id}>link</Link></Popup>
                      </Marker>
                    )
                )}
          </MarkerClusterGroup>
        </MapContainer>
      )) || <div className="loading">Loading...</div>}
    </div>
  );
};

export default Map;
