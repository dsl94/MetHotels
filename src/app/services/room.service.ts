import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

  // Profesore evo service za view koji je takodje vec postojao

  constructor() { }

  // Profeosre ovde sam morao da dodam jos jedan parametar a to je cena za jednu noc
  public getPrice(numberOfNights: number, perNight: number): number {
    return numberOfNights*perNight;
  }
}
