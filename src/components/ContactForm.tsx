import { useState } from "react";
import { handleContactSubmit } from "../controllers/ContactCotroller";
import { ContactData } from "../models/ContactModel";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleContactSubmit(formData);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
      setSubmitted(true); // Activa la notificación de éxito
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div>
      {submitted && (
        <p className="success-message">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="first_name"
          placeholder="Nombre completo"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Apellidos"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
