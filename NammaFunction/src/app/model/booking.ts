import { Payment } from "./payment";

export interface Booking {
    id: number;
    bookingDate: string; 
    status: string;
    eventId: number; 
    userId: number; 
    paymentId?: Payment;
}
