
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];


const fileSchema = z.any()
  .optional()
  .refine((file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE), `La taille maximale du fichier est de 5MB.`)
  .refine(
    (file) => !file || (file instanceof File && ACCEPTED_FILE_TYPES.includes(file.type)),
    "Formats de fichier acceptés : .pdf, .doc, .docx, .jpg, .png"
  );


export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Adresse e-mail invalide."),
  subject: z.string().min(5, "L'objet doit contenir au moins 5 caractères."),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(500, "Le message ne peut pas dépasser 500 caractères."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const projectFormSchema = z.object({
    name: z.string().trim().min(1, "Le nom est requis."),
    phone: z.string().trim().min(1, "Le téléphone est requis."),
    email: z.string().trim().email("L'e-mail est invalide."),
    city: z.string().trim().min(1, "La ville est requise."),
    referral: z.string().optional(),
    projectType: z.enum(["individual", "building", "commercial", "warehouse", "renovation", "other"], { required_error: "Veuillez sélectionner un type de projet." }),
    otherProjectType: z.string().optional(),
    landStatus: z.enum(["owned", "not_owned", "acquiring"], { required_error: "Veuillez indiquer le statut du terrain." }),
    planStatus: z.enum(["ready", "no_plan", "in_progress"], { required_error: "Veuillez indiquer le statut du plan." }),
    area: z.string().optional().or(z.literal('')),
    floors: z.string().optional(),
    rooms: z.string().optional().or(z.literal('')),
    services: z.array(z.string()).optional(),
    otherServices: z.string().optional(),
    startDate: z.enum(["immediate", "1-3_months", "6_months_plus"], { required_error: "Veuillez sélectionner une date de démarrage." }),
    budget: z.enum(["less_10k", "10k_50k", "more_50k", "not_sure"]).optional(),
    planFile: fileSchema,
    otherFile: fileSchema,
    notes: z.string().optional(),
  }).refine(data => !(data.projectType === 'other' && !data.otherProjectType), {
    message: "Veuillez préciser le type de projet.",
    path: ["otherProjectType"],
  });

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const partnerFormSchema = z.object({
    companyName: z.string().trim().min(2, "Le nom de l'entreprise est requis."),
    contactName: z.string().trim().min(2, "Le nom du contact est requis."),
    email: z.string().trim().email("L'adresse e-mail est invalide."),
    phone: z.string().trim().min(9, "Le numéro de téléphone est requis."),
    website: z.string().optional(),
    partnerType: z.enum([
        "supplier", "subcontractor", "architect", "design_office", "logistics", "investor", "other"
    ], { required_error: "Veuillez sélectionner un type de partenariat."}),
    otherPartnerType: z.string().optional(),
    services: z.string().trim().min(10, "Veuillez décrire vos services en au moins 10 caractères."),
    experience: z.string().optional(),
    coverLetter: fileSchema,
  }).refine(data => !(data.partnerType === 'other' && !data.otherPartnerType), {
    message: "Veuillez préciser le type de partenariat.",
    path: ["otherPartnerType"],
  });

export type PartnerFormData = z.infer<typeof partnerFormSchema>;
