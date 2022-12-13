export class Reverse {
  constructor(public place: IReverse) {}

  get name() {
    return this.place.display_name || 'Unknown';
  }
  /**
   * Returns one of the following: city, town, municipality, village
   */
  get municipality() {
    return (
      this.place.address?.city ||
      this.place.address?.town ||
      this.place.address?.village ||
      this.place.address?.municipality ||
      'Unknown'
    );
  }
}

export interface IReverse {
  place_id: string;
  license: string;
  osm_type: string;
  osm_id: string;
  lat: string;
  lon: string;
  display_name?: string;
  boundingbox: string[];
  address?: ReverseAddress;
}

export interface ReverseAddress {
  continent?: string;

  // city/village
  municipality?: string;
  city?: string;
  town?: string;
  village?: string;

  state?: string;

  // country
  country?: string;
  country_code: string;
}
