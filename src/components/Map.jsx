import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useFindLocation } from "../consts/hooks/useFindLocation";
import { useEffect } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {
  const [info, result] = useFindLocation();

  const customMarker = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1201/1201643.png",
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (result) {
      return
    }
    {
      console.log("no");
    }
  }, [result]);

  return (
    (info && (
      <MapContainer center={[info.latitude, info.longitude]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup chunkedLoading>

        {result &&
          result?.results.map(
            (spot) =>
              spot?.geometry?.coordinates && (
                <Marker
                key={spot.spot_id}
                  position={[spot.geometry.coordinates[1], spot.geometry.coordinates[0]]}
                  icon={customMarker}
                >
                  <Popup></Popup>
                </Marker>
              )
          )}
        </MarkerClusterGroup>
      </MapContainer>
    )) || <div className="loading">Loading...</div>
  );
};

export default Map;
