import { Room } from './room.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @HostBinding('attr.class') cssClass='row';
  @Input() room: Room;

  constructor() {

   }

  ngOnInit(): void {
  }

}
