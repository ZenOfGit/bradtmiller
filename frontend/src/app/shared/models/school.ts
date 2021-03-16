import { IBasicEntity } from './ibasic-entity';

export class School implements IBasicEntity {
  id: string;
  name: string;
  description: string;
  city: string;
  state: string;
  major: string;
  degree1?: string;
  degree2?: string;
  degree3?: string;
  details: string;
  url: string;
  image: string;
}
