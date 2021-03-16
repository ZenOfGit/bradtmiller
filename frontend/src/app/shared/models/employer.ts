import { IBasicEntity } from './ibasic-entity';

export class Employer implements IBasicEntity {
  id: string;
  name: string;
  description: string;
  city: string;
  state: string;
  title: string;
  responsibilities: string;
  compensation: string;
  url: string;
  image: string;
}
