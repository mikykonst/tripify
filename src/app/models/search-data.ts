export interface SearchData {
  city?: string[];
  country?: string[];
  nightsFrom?: string[];
  nightsTo?: string[];
  dates?: { from: Date, to: Date };
  category?: string[];
  meals?: string[];
  tourists?: { adults: string[], children: string[] };
  hotelName?: string;
}
