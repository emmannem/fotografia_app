// src/controllers/ContactController.ts
import { ContactData } from "../models/ContactModel";
import { sendContactMessage } from "../services/ContactService";

export const handleContactSubmit = async (formData: ContactData) => {
  try {
    const response = await sendContactMessage(formData);
    return response;
  } catch (error) {
    console.error("Error en ContactController:", error);
    throw error;
  }
};
