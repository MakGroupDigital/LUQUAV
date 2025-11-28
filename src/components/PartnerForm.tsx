
"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitPartnerForm, type PartnerFormState } from "@/app/actions";
import { partnerFormSchema, type PartnerFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg py-6 mt-8">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Envoi en cours...
        </>
      ) : (
        "Envoyer ma Candidature"
      )}
    </Button>
  );
}

export default function PartnerForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitPartnerForm, {
    message: "",
    status: "idle",
  });

  const form = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      partnerType: undefined,
      otherPartnerType: "",
      services: "",
      experience: "",
      coverLetter: undefined,
    },
  });

  const partnerType = form.watch("partnerType");

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Candidature envoyée !",
        description: state.message,
      });
      form.reset();
      formRef.current?.reset();
    } else if (state.status === "error") {
      form.clearErrors();
      for (const [key, value] of Object.entries(state.errors ?? {})) {
        if (value) {
          form.setError(key as keyof PartnerFormData, { type: 'server', message: value[0] });
        }
      }
      if (state.message && !state.errors) {
          toast({
            title: "Erreur",
            description: state.message,
            variant: "destructive",
          });
      }
    }
  }, [state, form, toast]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        className="space-y-6"
      >
        <fieldset>
          <legend className="text-xl font-headline font-bold mb-4 border-b border-primary pb-2">1. Informations sur l'entreprise</legend>
          <div className="grid md:grid-cols-2 gap-4">
            <FormField control={form.control} name="companyName" render={({ field }) => ( <FormItem><FormLabel>Nom de l'entreprise</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="contactName" render={({ field }) => ( <FormItem><FormLabel>Nom de la personne de contact</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Adresse e-mail</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormLabel>Téléphone</FormLabel><FormControl><Input {...field} type="tel" /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="website" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Site web (Facultatif)</FormLabel><FormControl><Input {...field} placeholder="https://www.exemple.com" /></FormControl><FormMessage /></FormItem> )} />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-headline font-bold mb-4 border-b border-primary pb-2">2. Type de Partenariat</legend>
          <div className="space-y-4">
            <FormField control={form.control} name="partnerType" render={({ field }) => (
                <FormItem>
                    <FormLabel>Vous êtes...</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Sélectionnez une catégorie" /></SelectTrigger></FormControl>
                        <SelectContent>
                            <SelectItem value="supplier">Fournisseur de matériaux / équipements</SelectItem>
                            <SelectItem value="subcontractor">Entreprise / Sous-traitant</SelectItem>
                            <SelectItem value="architect">Architecte</SelectItem>
                            <SelectItem value="design_office">Bureau d'études techniques</SelectItem>
                            <SelectItem value="logistics">Expert en logistique / transport</SelectItem>
                            <SelectItem value="investor">Investisseur / Promoteur immobilier</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    {partnerType === 'other' && <FormField control={form.control} name="otherPartnerType" render={({ field }) => (<FormItem><FormLabel>Précisez</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />}
                </FormItem>
            )} />
            <FormField control={form.control} name="services" render={({ field }) => ( <FormItem><FormLabel>Décrivez vos produits ou services</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="experience" render={({ field }) => ( <FormItem><FormLabel>Années d'expérience ou réalisations notables (Facultatif)</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
            <FormField control={form.control} name="coverLetter" render={({ field: { onChange, value, ...rest } }) => ( <FormItem><FormLabel>Joindre un document (Plaquette, CV, ...)</FormLabel><FormControl><Input type="file" onChange={e => onChange(e.target.files?.[0])} {...rest} /></FormControl><FormDescription>Facultatif. Fichier PDF, DOCX, JPG. Max 5MB.</FormDescription><FormMessage /></FormItem> )} />
          </div>
        </fieldset>

        <SubmitButton />
      </form>
    </Form>
  );
}
