import { BasicEntity } from './basic-entity';

export class Employer implements BasicEntity {
  id: string;
  name: string;
  city: string;
  stateAbr: string;
  title: string;
  description: string;

  constructor(id: string, name: string, city: string, stateAbr: string, title: string, description: string) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.stateAbr = stateAbr;
    this.title = title;
    this.description = description;
  }
}
