// src/services/ContactService.ts
import { ContactData } from "../models/ContactModel";

export const sendContactMessage = async (contactData: ContactData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje");
    }

    return response.json();
  } catch (error) {
    console.error("Error en ContactService:", error);
    throw error;
  }
};
