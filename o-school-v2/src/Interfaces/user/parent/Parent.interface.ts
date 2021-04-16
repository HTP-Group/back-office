import { Partner } from './Partner.interface';
import { Children } from './Children.interface';

export interface User {
  firstname: string;
  lastname: string;
  job?: string;
  email: string;
  childrenNumber?: null | number;
  children: Children[];
  isParent: boolean;
  partner?: Partner;
  adress?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phone?: string;
  password: string;
}
