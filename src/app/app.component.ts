import { Component } from '@angular/core';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Room[];

  constructor() {
    this.rooms = [
      new Room('101', 120),
      new Room('102', 99),
      new Room('103', 150),
    ];
  }

  addRoom(roomNumber: HTMLInputElement, price: HTMLInputElement): boolean {
    this.rooms.push(new Room(roomNumber.value, price.valueAsNumber));
    roomNumber.value = '';
    price.valueAsNumber = 0;
    return false;
  }

  randomize() {
    var currentIndex = this.rooms.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.rooms[currentIndex];
      this.rooms[currentIndex] = this.rooms[randomIndex];
      this.rooms[randomIndex] = temporaryValue;

      return false;
    }

  }
}
