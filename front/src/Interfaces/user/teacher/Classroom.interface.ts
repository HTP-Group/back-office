import { Children } from '../parent/Children.interface';
import { Test } from './Test.interface';

export interface Classroom {
  name: string;
  students: Children[];
  test: Test;
  teacherName: string;
  level?: string;
}
