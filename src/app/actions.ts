
"use server";

import { Resend } from 'resend';
import { contactSchema, projectFormSchema, partnerFormSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Record<string, string[] | undefined>;
};

function generateEmailHtml(title: string, data: Record<string, any>): string {
    let tableRows = '';
    for (const [key, value] of Object.entries(data)) {
        if (key === 'planFile' || key === 'otherFile' || key === 'coverLetter') continue;
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        const formattedValue = Array.isArray(value) ? value.join(', ') : (value?.toString() || 'N/A');
        tableRows += `<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${formattedKey}</td><td style="border: 1px solid #ddd; padding: 8px;">${formattedValue}</td></tr>`;
    }

    return `
      <div>
        <h1>${title}</h1>
        <p>Un nouveau message a été reçu via le site web :</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    `;
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: "Veuillez corriger les erreurs ci-dessous.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { name, email, subject, message } = validatedFields.data;
  const dataForEmail = { name, email, subject, message };
  const emailHtml = generateEmailHtml(`Nouveau Message: ${subject}`, dataForEmail);

  try {
    const { error } = await resend.emails.send({
      from: 'Luquav Website <onboarding@resend.dev>',
      to: ['contact@luquav.com'],
      subject: `Nouveau Message: ${subject}`,
      html: emailHtml
    });

    if (error) {
      console.error("Resend error:", error);
      return { message: "Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.", status: "error" };
    }
    
    return { message: "Merci pour votre message ! Nous vous contacterons sous peu.", status: "success" };
  } catch (e) {
    console.error(e);
    return { message: "Une erreur inattendue est survenue. Veuillez réessayer.", status: "error" };
  }
}

export type ProjectFormState = FormState;

export async function submitProjectForm(prevState: ProjectFormState, formData: FormData): Promise<ProjectFormState> {
    const rawData = Object.fromEntries(formData.entries());
    
    const dataToValidate = {
        ...rawData,
        services: formData.getAll('services'),
        area: rawData.area ? String(rawData.area) : '',
        rooms: rawData.rooms ? String(rawData.rooms) : '',
    };
    
    const validatedFields = projectFormSchema.safeParse(dataToValidate);

    if (!validatedFields.success) {
        return { message: "Veuillez corriger les erreurs ci-dessous.", status: "error", errors: validatedFields.error.flatten().fieldErrors };
    }
    
    const { planFile, otherFile, ...dataForEmail } = validatedFields.data;
    const emailHtml = generateEmailHtml("Nouveau projet soumis", dataForEmail);

    try {
        const { error } = await resend.emails.send({
          from: 'Luquav Website <onboarding@resend.dev>',
          to: ['contact@luquav.com'],
          subject: 'Nouveau projet soumis via le site web',
          html: emailHtml,
        });

        if (error) {
          console.error("Resend error:", error);
          return { message: "Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.", status: "error" };
        }

        return { message: "Merci pour votre soumission ! Nous vous contacterons bientôt.", status: "success" };
    } catch(e) {
        console.error("Error submitting project form:", e);
        return { message: "Une erreur inattendue est survenue. Veuillez réessayer.", status: "error" };
    }
}


export type PartnerFormState = FormState;

export async function submitPartnerForm(prevState: PartnerFormState, formData: FormData): Promise<PartnerFormState> {
    const rawData = Object.fromEntries(formData.entries());
    const dataToValidate = { ...rawData };
    const validatedFields = partnerFormSchema.safeParse(dataToValidate);

    if (!validatedFields.success) {
        return { message: "Veuillez corriger les erreurs dans le formulaire.", status: "error", errors: validatedFields.error.flatten().fieldErrors };
    }
    
    const { coverLetter, ...dataForEmail } = validatedFields.data;
    const emailHtml = generateEmailHtml(`Nouvelle demande de partenariat: ${validatedFields.data.companyName}`, dataForEmail);

    try {
        const { error } = await resend.emails.send({
          from: 'Luquav Website <onboarding@resend.dev>',
          to: ['contact@luquav.com'],
          subject: `Nouvelle demande de partenariat: ${validatedFields.data.companyName}`,
          html: emailHtml,
        });

        if (error) {
          console.error("Resend error:", error);
          return { message: "Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer.", status: "error" };
        }

        return { message: "Merci pour votre candidature ! Votre demande a bien été envoyée. Nous reviendrons vers vous rapidement.", status: "success" };
    } catch (e) {
        console.error("Error submitting partner form:", e);
        return { message: "Une erreur inattendue est survenue. Veuillez réessayer.", status: "error" };
    }
}
