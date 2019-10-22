import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Hobby } from '../../shared/models/hobby';

@Injectable({
  providedIn: 'root'
})

export class HobbyService {


  private hobbies: Hobby[] = [];
  private hobbiesUpdated = new Subject<Hobby[]>();

  constructor(private http: HttpClient) {}

  getHobbies() {
    this.http.get<{ message: string, hobbies: any}>('http://localhost:3000/api/hobbies')
      .pipe(map((hobbyData) => {
        return hobbyData.hobbies.map(hobby => {
          return {
            id: hobby._id,
            name: hobby.name,
            sinceAge: hobby.sinceAge,
            level: hobby.level,
            description: hobby.description
          };
        });
    }))
    .subscribe((transformedHobbies) => {
      this.hobbies = transformedHobbies;
      this.hobbiesUpdated.next([...this.hobbies]);
    });
  }

  getHobbyUpdateListener() {
    return this.hobbiesUpdated.asObservable();
  }

// ADMIN
  addHobby(name: string, sinceAge: string, level: string, description: string) {
    const hobby: Hobby = {id: null, name, sinceAge, level, description};
    this.http
      .post<{message: string, hobbyId: string }>('http://localhost:3000/api/hobbies', hobby)
      .subscribe((responseData) => {
        const id = responseData.hobbyId;
        hobby.id = id;
        this.hobbies.push(hobby);
        this.hobbiesUpdated.next([...this.hobbies]);
      });
}

// ADMIN
  deleteHobby(hobbyId: string) {
    this.http.delete('http://localhost:3000/api/hobbies/' + hobbyId)
      .subscribe(() => {
        const updatedHobbies = this.hobbies.filter(hobby => hobby.id !== hobbyId);
        this.hobbies = updatedHobbies;
        this.hobbiesUpdated.next([...this.hobbies]);
      });
  }
}
