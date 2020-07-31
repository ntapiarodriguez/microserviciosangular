import { Alumno } from "./alumno";
import { Examen } from "./examen";


export class Curso {
  id: number;
  nombre: string;
  apellido: string;
  alumnos: Alumno[] = [];
  examenes: Examen[] = [];
}
