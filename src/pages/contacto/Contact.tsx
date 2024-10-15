import { useState } from "react";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map"; // Usamos el componente de mapa personalizado
import "./Contact.css"; // Mantenemos el archivo CSS

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = (formData: any) => {
    const { nombre, apellidos, correo, mensaje } = formData;

    if (!nombre || !apellidos || !correo || !mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Simular el envío a una API.
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setError("");
  };

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
            <ContactForm onSubmit={handleFormSubmit} />
          </>
        )}
      </section>

      {/* Sección del Mapa */}
      <section className="map-section">
        <h2>Nuestra Ubicación</h2>
        <Map />
      </section>
    </div>
  );
};
export default Contact;
