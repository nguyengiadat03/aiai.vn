import { api } from "encore.dev/api";
import db from "../db";

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Creates a new contact submission.
export const submit = api<ContactSubmission, ContactResponse>(
  { expose: true, method: "POST", path: "/contact/submit" },
  async (params) => {
    await db.exec`
      INSERT INTO contact_submissions (name, email, phone, company, message, service, submitted_at)
      VALUES (${params.name}, ${params.email}, ${params.phone || null}, ${params.company || null}, ${params.message}, ${params.service || null}, NOW())
    `;
    return {
      success: true,
      message: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
    };
  }
);
