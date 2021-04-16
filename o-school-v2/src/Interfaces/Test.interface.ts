import { Discipline } from './Discipline.interface';

export interface Test {
  id: number;
  name: string;
  date: Date;
  discipline: Discipline[];
  created?: string;
  updated?: string;
  // the students did
  isStudentsDid?: boolean;
  // the teacher report it
  isTeacherReported?: boolean;
}
