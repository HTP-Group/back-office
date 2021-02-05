import { IPartner } from './IPartner.interface';
import { IChildren } from './IChildren.interface'

export interface IUser {
  firstname: string;
  lastname: string;
  job: string;
  email: string;
  childrenNumber: null | number;
  children: IChildren[];
  statut: string;
  partner?: IPartner;
  adress: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
  password: string; 
}