import { Children } from './user/parent/Children.interface';
import { Test } from './Test.interface';

export interface Classroom {
  students: Children[];
  test: Test;
  teacherName: string;

}
