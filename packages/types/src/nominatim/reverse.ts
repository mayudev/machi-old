export interface Reverse {
  place_id: string;
  license: string;
  osm_type: string;
  osm_id: string;
  lat: string;
  lon: string;
  display_name: string;
  boundingbox: string[];
  address: ReverseAddress;
}

export interface ReverseAddress {
  continent?: string;

  // city/village
  municipality?: string;
  city?: string;
  town?: string;
  village?: string;

  // country
  country?: string;
  country_code: string;
}
