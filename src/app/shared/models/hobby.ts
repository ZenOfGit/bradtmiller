import { BasicEntity } from './basic-entity';

export class Hobby implements BasicEntity {
  id: string;
  name: string;
  sinceAge: string;
  level: string;
  description: string;

  constructor(id: string, name: string, sinceAge: string, level: string, description: string) {
    this.id = id;
    this.name = name;
    this.sinceAge = sinceAge;
    this.level = level;
    this.description = description;
  }
}
