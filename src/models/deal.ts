export interface Deal {
    id: number;
    hotelName: string;
    price: number;
    status?: "Good" | "Sad";
    something?: string[];
}
