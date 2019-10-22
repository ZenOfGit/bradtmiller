import { Component, OnInit, OnDestroy } from '@angular/core';
import { HobbyService } from '../../../core/services/hobby.service';
import { Subscription } from 'rxjs';

import { Hobby } from '../../../shared/models/hobby';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})

export class HobbyListComponent implements OnInit, OnDestroy {

  hobbies: Hobby[] = [];
  private hobbiesSub: Subscription;

  constructor(private hobbyService: HobbyService) {}

  ngOnInit() {
    this.hobbyService.getHobbies();
    this.hobbiesSub = this.hobbyService.getHobbyUpdateListener().subscribe((hobbies: Hobby[]) => {
      this.hobbies = hobbies;
    });
  }

// ADMIN
onDelete(hobbyId: string) {
  this.hobbyService.deleteHobby(hobbyId);
}

  ngOnDestroy() {
    this.hobbiesSub.unsubscribe();
  }
}
