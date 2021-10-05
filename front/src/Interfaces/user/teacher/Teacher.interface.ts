import { Classroom } from './Classroom.interface';
import { Discipline } from './Discipline.interface';

export interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isParent: boolean;
  adress?: string;
  city?: string;
  class?: Classroom[];
  discipline?: Discipline;
  job?: string;
  // ex: high school, kingarden, etc..
  level?: string;
  phone?: string;
  state?: string;
  zipcode?: string;
}
