
"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { submitProjectForm, type ProjectFormState } from "@/app/actions";
import { projectFormSchema, type ProjectFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const servicesList = [
    { id: "design", label: "Conception et études" },
    { id: "management", label: "Gestion de projet de construction" },
    { id: "monitoring", label: "Suivi et pilotage de chantier" },
    { id: "coordination", label: "Coordination des ressources" },
    { id: "feasibility", label: "Études de faisabilité et économie" },
    { id: "costing", label: "Analyse budgets et estimation des coûts" },
    { id: "assistance", label: "Assistance technique et conseil" },
    { id: "maintenance", label: "Maintenance et suivi technique" },
    { id: "other", label: "Autre" },
];

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
        "ENVOYER MON PROJET"
      )}
    </Button>
  );
}

export default function ProjectForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitProjectForm, {
    message: "",
    status: "idle",
  });

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
        name: "",
        phone: "",
        email: "",
        city: "",
        referral: "",
        projectType: undefined,
        otherProjectType: "",
        landStatus: undefined,
        planStatus: undefined,
        area: '',
        floors: "",
        rooms: '',
        services: [],
        otherServices: "",
        startDate: undefined,
        budget: undefined,
        notes: "",
        planFile: undefined,
        otherFile: undefined,
    },
  });

  const projectType = form.watch("projectType");

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Succès!",
        description: state.message,
      });
      form.reset();
      formRef.current?.reset();
    } else if (state.status === "error") {
        form.clearErrors();
        for (const [key, value] of Object.entries(state.errors ?? {})) {
            if (value) {
                form.setError(key as keyof ProjectFormData, { type: 'server', message: value[0] });
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Valider le formulaire avec react-hook-form
    const isValid = await form.trigger();
    if (!isValid) {
      return;
    }
    
    const formData = new FormData();
    const values = form.getValues();
    
    // Ajouter tous les champs au FormData
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'planFile' || key === 'otherFile') {
        // Les fichiers sont déjà des File objects
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else if (key === 'services' && Array.isArray(value)) {
        // Pour les services (array), ajouter chaque élément
        value.forEach((service) => {
          formData.append('services', service);
        });
      } else if (value !== undefined && value !== null && value !== '') {
        // Pour les autres champs
        formData.append(key, String(value));
      }
    });
    
    // Soumettre le formulaire avec le FormData
    formAction(formData);
  };

  return (
    <Card className="shadow-lg bg-card text-card-foreground border-border">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="space-y-8"
          >
            <fieldset>
                <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">🏗️ 1. Informations Générales</legend>
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => ( <FormItem><FormLabel>Nom complet</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormLabel>Téléphone</FormLabel><FormControl><Input {...field} type="tel" /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Adresse e-mail</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="city" render={({ field }) => ( <FormItem><FormLabel>Ville / Commune du projet</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="referral" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Comment nous avez-vous connus ?</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger></FormControl>
                                <SelectContent>
                                    <SelectItem value="facebook">Facebook</SelectItem>
                                    <SelectItem value="word_of_mouth">Bouche à oreille</SelectItem>
                                    <SelectItem value="advertisement">Publicité</SelectItem>
                                    <SelectItem value="media">Média</SelectItem>
                                    <SelectItem value="other">Autre</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
            </fieldset>

            <fieldset>
                 <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">🏠 2. Type de Projet</legend>
                 <div className="space-y-6">
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                        <FormItem className="space-y-3"><FormLabel>Quel est le type de projet ?</FormLabel>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid md:grid-cols-3 gap-4">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="individual" /></FormControl><FormLabel className="font-normal">Maison individuelle</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="building" /></FormControl><FormLabel className="font-normal">Immeuble</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="commercial" /></FormControl><FormLabel className="font-normal">Commerce</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="warehouse" /></FormControl><FormLabel className="font-normal">Entrepôt</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="renovation" /></FormControl><FormLabel className="font-normal">Rénovation / Extension</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="other" /></FormControl><FormLabel className="font-normal">Autre</FormLabel></FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            {projectType === 'other' && <FormField control={form.control} name="otherProjectType" render={({ field }) => (<FormItem><FormLabel>Précisez le type de projet</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />}
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="landStatus" render={({ field }) => (
                        <FormItem className="space-y-3"><FormLabel>Avez-vous déjà un terrain ?</FormLabel>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="owned" /></FormControl><FormLabel className="font-normal">Oui</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="not_owned" /></FormControl><FormLabel className="font-normal">Non</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="acquiring" /></FormControl><FormLabel className="font-normal">En cours d’acquisition</FormLabel></FormItem>
                                </RadioGroup>
                            </FormControl><FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="planStatus" render={({ field }) => (
                        <FormItem className="space-y-3"><FormLabel>Avez-vous déjà un plan ou un avant-projet ?</FormLabel>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="ready" /></FormControl><FormLabel className="font-normal">Oui</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="no_plan" /></FormControl><FormLabel className="font-normal">Non</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="in_progress" /></FormControl><FormLabel className="font-normal">En cours d’élaboration</FormLabel></FormItem>
                                </RadioGroup>
                            </FormControl><FormMessage />
                        </FormItem>
                    )} />
                </div>
            </fieldset>

            <fieldset>
                <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">📐 3. Détails Techniques</legend>
                 <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="area" render={({ field }) => ( <FormItem><FormLabel>Superficie estimée (en m²)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="floors" render={({ field }) => ( <FormItem><FormLabel>Nombre d’étages (R+1, etc.)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="rooms" render={({ field }) => ( <FormItem><FormLabel>Nombre de pièces</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                </div>
                <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                        <FormItem className="mt-6">
                            <div className="mb-4">
                                <FormLabel className="text-base">Services souhaités</FormLabel>
                                <FormDescription>Sélectionnez tous les services qui s'appliquent.</FormDescription>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                            {servicesList.map((item) => (
                                <FormField
                                key={item.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                    return (
                                    <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                name="services"
                                                value={item.id}
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...(field.value || []), item.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== item.id
                                                        )
                                                    )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal">{item.label}</FormLabel>
                                    </FormItem>
                                    )
                                }}
                                />
                            ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField control={form.control} name="otherServices" render={({ field }) => (<FormItem className="mt-4"><FormLabel>Autres services</FormLabel><FormControl><Input {...field} placeholder="Précisez si 'Autre' est sélectionné" /></FormControl><FormMessage /></FormItem>)} />

            </fieldset>

            <fieldset>
                <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">📅 4. Planning & Budget</legend>
                <div className="space-y-6">
                    <FormField control={form.control} name="startDate" render={({ field }) => (
                        <FormItem className="space-y-3"><FormLabel>Quand souhaitez-vous démarrer ?</FormLabel>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="immediate" /></FormControl><FormLabel className="font-normal">Immédiatement</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="1-3_months" /></FormControl><FormLabel className="font-normal">Dans 1 à 3 mois</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="6_months_plus" /></FormControl><FormLabel className="font-normal">Dans 6 mois ou plus</FormLabel></FormItem>
                                </RadioGroup>
                            </FormControl><FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="budget" render={({ field }) => (
                        <FormItem className="space-y-3"><FormLabel>Budget prévisionnel (Facultatif)</FormLabel>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="less_10k" /></FormControl><FormLabel className="font-normal">Moins de 10 000 USD</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="10k_50k" /></FormControl><FormLabel className="font-normal">Entre 10 000 et 50 000 USD</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="more_50k" /></FormControl><FormLabel className="font-normal">Plus de 50 000 USD</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="not_sure" /></FormControl><FormLabel className="font-normal">Je ne sais pas encore</FormLabel></FormItem>
                                </RadioGroup>
                            </FormControl><FormMessage />
                        </FormItem>
                    )} />
                </div>
            </fieldset>
            
            <fieldset>
                <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">📎 5. Pièces Jointes</legend>
                <div className="space-y-4">
                    <FormField control={form.control} name="planFile" render={({ field: { onChange, value, ...rest } }) => ( <FormItem><FormLabel>Plan, croquis ou photo (Facultatif)</FormLabel><FormControl><Input type="file" onChange={e => onChange(e.target.files?.[0])} {...rest} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="otherFile" render={({ field: { onChange, value, ...rest } }) => ( <FormItem><FormLabel>Autre document utile (Facultatif)</FormLabel><FormControl><Input type="file" onChange={e => onChange(e.target.files?.[0])} {...rest} /></FormControl><FormMessage /></FormItem> )} />
                </div>
            </fieldset>

             <fieldset>
                <legend className="text-2xl font-headline font-bold mb-4 border-b border-primary pb-2">📝 6. Remarques</legend>
                 <FormField control={form.control} name="notes" render={({ field }) => ( <FormItem><FormLabel>Remarques ou besoins spécifiques</FormLabel><FormControl><Textarea className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
            </fieldset>

            <SubmitButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
