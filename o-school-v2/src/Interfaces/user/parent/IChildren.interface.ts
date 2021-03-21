import { IMarks } from './IMarks.interface';
import { IGraph } from './IGraph.interface';

export interface IChildren {
  id: number;
  firstname: string;
  lastname: string;
  level: string;
  healthIndications?: number;
  birthday?: string;
  marks?: IMarks;
  comments?: string[];
  graph?: IGraph;
}
