import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Room[];
  roomToUpdateIndex: number;
  roomForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.rooms = [
      new Room('101', 120),
      new Room('102', 99),
      new Room('103', 150),
    ];
    this.roomToUpdateIndex = -1;
    this.roomForm = fb.group({
      'roomNum':  ['', Validators.required],
      'price': [0, Validators.required]
    });
 
    // Posto je samo room num stirng, pratim stanje njega i ispisujem poruku
    this.roomForm.valueChanges.subscribe(
      (form: any) => {
        if(form.roomNum.length < 6) {
          console.log("Duzina broja sobe je manja od 6");
        }
      }
    );

  }

  addRoom(){
    if (this.roomForm.valid) {
      if (this.roomToUpdateIndex === -1) {
        this.rooms.push(new Room(this.roomForm.controls['roomNum'].value, this.roomForm.controls['price'].value));
      } else {
        this.rooms[this.roomToUpdateIndex].roomNumber = this.roomForm.controls['roomNum'].value;
        this.rooms[this.roomToUpdateIndex].roomPrice = this.roomForm.controls['price'].value;
      }
      this.roomForm.reset();
      this.roomToUpdateIndex = -1;
      return false;
    }
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
