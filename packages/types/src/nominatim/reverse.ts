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

  /**
   * Returns the most specific name of the object
   */
  get mostSpecificName() {
    return (
      this.place.address?.road ||
      this.place.address?.neighbourhood ||
      this.place.address?.suburb ||
      this.place.address?.city_district ||
      this.municipality
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
  // TODO implement all of those (https://nominatim.org/release-docs/latest/api/Output/#addressdetails)
  // place (level 8)
  amenity?: string;

  // house (level 7)
  house_number?: string;

  // road (level 6)
  road?: string;

  // neighborhood (level 5)
  neighbourhood?: string;

  // district (level 4)
  suburb?: string;
  city_district?: string;

  // city/village (level 3)
  city?: string;
  town?: string;
  village?: string;

  // municipality (level 2)
  municipality?: string;
  state_district?: string;
  county?: string;

  // state (level 1)
  state?: string;

  // country (level 0)
  country?: string;
  country_code: string;
  continent?: string;
}
