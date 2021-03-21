import { IDiscipline } from './IDiscipline.interface.ts';

export interface ITest {
  id: number;
  name: string;
  date: Date;
  discipline: IDiscipline[];
  created?: string;
  updated?: string;
  // the students did
  isStudentsDid?: boolean;
  // the teacher report it
  isTeacherReported?: boolean;
}