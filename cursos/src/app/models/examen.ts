import { Pregunta } from "./pregunta";
import { Asignatura } from "./asignatura";

export class Examen {
  id: number;
  nombre: string;
  apellido: string;
  preguntas: Pregunta[] = [];
  asignatura: Asignatura;
  respondido: boolean
}
