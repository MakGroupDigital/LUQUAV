
"use server";

import { Resend } from 'resend';
import { contactSchema, projectFormSchema, partnerFormSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY || 're_5yCuBYgn_4b1tjzVRLyGoP8j48BzPmPxj');

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Record<string, string[] | undefined>;
};

// Dictionnaire de traduction français
const fieldTranslations: Record<string, string> = {
    name: 'Nom complet',
    phone: 'Téléphone',
    email: 'Adresse e-mail',
    subject: 'Objet',
    message: 'Message',
    city: 'Ville / Commune du projet',
    referral: 'Comment nous avez-vous connus ?',
    projectType: 'Type de projet',
    otherProjectType: 'Type de projet (autre)',
    landStatus: 'Statut du terrain',
    planStatus: 'Statut du plan',
    area: 'Superficie estimée (m²)',
    floors: 'Nombre d\'étages',
    rooms: 'Nombre de pièces',
    services: 'Services souhaités',
    otherServices: 'Autres services',
    startDate: 'Date de démarrage souhaitée',
    budget: 'Budget prévisionnel',
    notes: 'Remarques ou besoins spécifiques',
    planFile: 'Plan, croquis ou photo',
    otherFile: 'Autre document',
    companyName: 'Nom de l\'entreprise',
    contactName: 'Nom du contact',
    website: 'Site web',
    partnerType: 'Type de partenariat',
    otherPartnerType: 'Type de partenariat (autre)',
    experience: 'Expérience',
    coverLetter: 'Lettre de motivation',
};

// Traduction des valeurs enum
const valueTranslations: Record<string, string> = {
    // projectType
    individual: 'Maison individuelle',
    building: 'Immeuble',
    commercial: 'Commerce',
    warehouse: 'Entrepôt',
    renovation: 'Rénovation / Extension',
    other: 'Autre',
    // landStatus
    owned: 'Oui',
    not_owned: 'Non',
    acquiring: 'En cours d\'acquisition',
    // planStatus
    ready: 'Oui',
    no_plan: 'Non',
    in_progress: 'En cours d\'élaboration',
    // startDate
    immediate: 'Immédiatement',
    '1-3_months': 'Dans 1 à 3 mois',
    '6_months_plus': 'Dans 6 mois ou plus',
    // budget
    less_10k: 'Moins de 10 000 USD',
    '10k_50k': 'Entre 10 000 et 50 000 USD',
    more_50k: 'Plus de 50 000 USD',
    not_sure: 'Je ne sais pas encore',
    // referral
    facebook: 'Facebook',
    word_of_mouth: 'Bouche à oreille',
    advertisement: 'Publicité',
    media: 'Média',
    // partnerType
    supplier: 'Fournisseur',
    subcontractor: 'Sous-traitant',
    architect: 'Architecte',
    design_office: 'Bureau d\'études',
    logistics: 'Logistique',
    investor: 'Investisseur',
    // services
    design: 'Conception et études',
    management: 'Gestion de projet de construction',
    monitoring: 'Suivi et pilotage de chantier',
    coordination: 'Coordination des ressources',
    feasibility: 'Études de faisabilité et économie',
    costing: 'Analyse budgets et estimation des coûts',
    assistance: 'Assistance technique et conseil',
    maintenance: 'Maintenance et suivi technique',
};

function translateField(key: string): string {
    return fieldTranslations[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

function translateValue(value: string): string {
    return valueTranslations[value] || value;
}

function generateEmailHtml(title: string, data: Record<string, any>): string {
    let tableRows = '';
    for (const [key, value] of Object.entries(data)) {
        if (key === 'planFile' || key === 'otherFile' || key === 'coverLetter') continue;
        const translatedKey = translateField(key);
        let translatedValue: string;
        
        if (Array.isArray(value)) {
            translatedValue = value.map(v => translateValue(v)).join(', ');
        } else {
            translatedValue = translateValue(value?.toString() || 'N/A');
        }
        
        tableRows += `<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${translatedKey}</td><td style="border: 1px solid #ddd; padding: 8px;">${translatedValue}</td></tr>`;
    }

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">${title}</h1>
        <p style="color: #666; margin-bottom: 20px;">Un nouveau message a été reçu via le site web :</p>
        <table style="border-collapse: collapse; width: 100%; background: #f9f9f9;">
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

    // Préparer les pièces jointes - récupérer depuis formData
    const attachments = [];
    
    const planFileData = formData.get('planFile');
    if (planFileData instanceof File && planFileData.size > 0) {
        const buffer = Buffer.from(await planFileData.arrayBuffer());
        attachments.push({
            filename: planFileData.name,
            content: buffer,
        });
    }
    
    const otherFileData = formData.get('otherFile');
    if (otherFileData instanceof File && otherFileData.size > 0) {
        const buffer = Buffer.from(await otherFileData.arrayBuffer());
        attachments.push({
            filename: otherFileData.name,
            content: buffer,
        });
    }

    try {
        const { error } = await resend.emails.send({
          from: 'Luquav Website <onboarding@resend.dev>',
          to: ['contact@luquav.com'],
          subject: 'Nouveau projet soumis via le site web',
          html: emailHtml,
          attachments: attachments.length > 0 ? attachments : undefined,
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

    // Préparer les pièces jointes - récupérer depuis formData
    const attachments = [];
    
    const coverLetterData = formData.get('coverLetter');
    if (coverLetterData instanceof File && coverLetterData.size > 0) {
        const buffer = Buffer.from(await coverLetterData.arrayBuffer());
        attachments.push({
            filename: coverLetterData.name,
            content: buffer,
        });
    }

    try {
        const { error } = await resend.emails.send({
          from: 'Luquav Website <onboarding@resend.dev>',
          to: ['contact@luquav.com'],
          subject: `Nouvelle demande de partenariat: ${validatedFields.data.companyName}`,
          html: emailHtml,
          attachments: attachments.length > 0 ? attachments : undefined,
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
