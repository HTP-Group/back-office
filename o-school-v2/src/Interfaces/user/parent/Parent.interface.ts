import { Partner } from './Partner.interface';
import { Children } from './Children.interface';

export interface Parent {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isParent: boolean;
  adress?: string;
  children?: Children[];
  childrenNumber?: null | number;
  city?: string;
  job?: string;
  partner?: Partner;
  phone?: string;
  state?: string;
  zipcode?: string;

}
