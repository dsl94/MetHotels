import { Component } from '@angular/core';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Room[];
  roomToUpdateIndex: number;

  constructor() {
    this.rooms = [
      new Room('101', 120),
      new Room('102', 99),
      new Room('103', 150),
    ];
    this.roomToUpdateIndex = -1;
  }

  addRoom(roomNumber: HTMLInputElement, price: HTMLInputElement): boolean {
    if (this.roomToUpdateIndex === -1) {
      this.rooms.push(new Room(roomNumber.value, price.valueAsNumber));
    } else {
      this.rooms[this.roomToUpdateIndex].roomNumber = roomNumber.value;
      this.rooms[this.roomToUpdateIndex].roomPrice = price.valueAsNumber;
    }
    roomNumber.value = '';
    price.valueAsNumber = 0;
    this.roomToUpdateIndex = -1;
    return false;
  }

  deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(item => { 
      return item.roomNumber !== room.roomNumber
    });
  }

  updateRoom(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    (<HTMLInputElement>document.getElementById('roomNum')).value = this.rooms[index].roomNumber;
    (<HTMLInputElement>document.getElementById('price')).valueAsNumber = this.rooms[index].roomPrice;
    this.roomToUpdateIndex = index;
    // this.videos[index].title = this._generateString(6);
  }

  addRoomExternal(room: Room) {
    this.rooms.push(room);
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
