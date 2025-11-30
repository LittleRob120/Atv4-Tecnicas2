export class CadastroHospedagem {
    private clientId: number;
    private accommodationId: number;
    private checkInDate: Date;
    private checkOutDate: Date;

    constructor(clientId: number, accommodationId: number, checkInDate: Date, checkOutDate: Date) {
        this.clientId = clientId;
        this.accommodationId = accommodationId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }

    public register(): void {
        // Logic to register the booking
        console.log(`Booking registered for client ${this.clientId} in accommodation ${this.accommodationId} from ${this.checkInDate} to ${this.checkOutDate}.`);
    }

    public validate(): boolean {
        // Logic to validate the booking details
        if (!this.clientId || !this.accommodationId || !this.checkInDate || !this.checkOutDate) {
            console.error("All fields must be filled.");
            return false;
        }
        if (this.checkInDate >= this.checkOutDate) {
            console.error("Check-out date must be after check-in date.");
            return false;
        }
        return true;
    }
}