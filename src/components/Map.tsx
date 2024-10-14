import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    // Integrar Google Maps o un mapa gratuito como OpenStreetMap.
    // Google Maps requiere una API key
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default Map;
