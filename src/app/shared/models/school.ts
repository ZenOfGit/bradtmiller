import { BasicEntity } from './basic-entity';

export class School implements BasicEntity {
  id: string;
  degree: string;
  description: string;
  name: string;
  state: string;

  constructor(id: string, description: string, name: string, state: string, degree: string) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.state = state;
    this.degree = degree;
  }
}
