import { Marks } from './Marks.interface';
import { Graph } from './Graph.interface';

export interface Children {
  id: number;
  firstname: string;
  lastname: string;
  level: string;
  healthIndications?: number;
  birthday?: string;
  marks?: Marks;
  comments?: string[];
  graph?: Graph;
}
