import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes enviar el formulario a una API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        onChange={handleChange}
      />
      <input
        type="text"
        name="apellidos"
        placeholder="Apellidos"
        onChange={handleChange}
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        onChange={handleChange}
      />
      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje"
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
