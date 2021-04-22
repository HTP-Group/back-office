import { Classroom } from '../teacher/Classroom.interface'
import { Discipline } from './Discipline.interface'

export interface Teacher {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  job?: string;
  level?: string;
  class?: Classroom[];
  discipline?: Discipline;
  isParent: boolean;
  adress?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phone?: string;
}
