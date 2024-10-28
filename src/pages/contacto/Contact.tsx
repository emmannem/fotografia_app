import { useState } from "react";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map"; // Usamos el componente de mapa personalizado
import "./Contact.css"; // Mantenemos el archivo CSS

const Contact = () => {
  const [submitted] = useState(false);
  const [error] = useState("");

  return (
    <div className="contact-page">
      {/* Sección de Bienvenida */}
      <section className="welcome-section">
        <h1>Contacto</h1>
        <p>
          ¿Tienes alguna pregunta o deseas más información sobre nuestros
          servicios? ¡Nos encantaría saber de ti! Rellena el formulario o
          contáctanos a través de nuestras redes sociales.
        </p>
      </section>

      {/* Sección del Formulario */}
      <section className="form-section">
        {submitted ? (
          <p>
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </p>
        ) : (
          <>
            {error && <p className="error">{error}</p>}
            <ContactForm />
          </>
        )}
      </section>

      {/* Sección del Mapa */}
      <section className="map-section">
        <h2>Nuestra Ubicación</h2>
        <p>
          ¡Te esperamos en nuestros cursos presenciales! Visítanos y aprende en
          un entorno colaborativo con instructores expertos.
        </p>
        <Map />
      </section>
    </div>
  );
};
export default Contact;
