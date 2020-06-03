import { Patient } from "./patient.model";
import { Symptom } from "./symptom.model";

export class Visit {
  private patient: Patient;
  private timeDateCreated: Date;
  private timeDateOfVisit: Date;
  private type: string;
  private symptoms: Symptom[];

  constructor(patient: Patient) {
    this.patient = patient;
  }

  setSymptoms(symptoms: Symptom[]) {
    this.symptoms = symptoms;
  }
}
