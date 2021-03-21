import { IChildren } from './user/parent/IChildren.interface';
import { ITest } from './ITest.interface';

export interface IClassroom {
  students: IChildren[];
  test: ITest;
  teacherName: string; 

}