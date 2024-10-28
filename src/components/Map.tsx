const Map = () => {
  return (
    <div id="map" style={{ height: "400px", width: "100%" }}>
      <iframe
        title="Ubicación del Curso"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8168!2d-73.9772!3d40.7527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzA5LjgiTiA3M8KwNTgnMjMuOSJX!5e0!3m2!1ses!2sus!4v1633354629387!5m2!1ses!2sus"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
