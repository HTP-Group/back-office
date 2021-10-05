import { Children } from './parent/Children.interface';
import { Classroom } from './teacher/Classroom.interface';
import { Discipline } from './teacher/Discipline.interface';

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isParent: boolean;
  adress?: string;
  children?: Children[];
  childrenNumber?: null | number;
  city?: string;
  class?: Classroom[];
  discipline?: Discipline;
  job?: string;
  phone?: string;
  state?: string;
  zipcode?: string;
}
