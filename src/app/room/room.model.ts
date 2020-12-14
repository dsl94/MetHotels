export class Room {
    // Profesore evo model za room koji je vec postojao
    roomNumber: string;
    roomPrice: number;

    constructor(roomNumber: string, roomPrice: number) {
        this.roomNumber = roomNumber;
        this.roomPrice = roomPrice;
    }
}