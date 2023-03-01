import { ReverseAddress } from 'types';

export function getCityOrEquivalent(address: ReverseAddress) {
  return (
    address.city ||
    address.town ||
    address.village ||
    address.municipality ||
    address.county
  );
}

export function getImmediatePlaceName(address: ReverseAddress) {
  const immediate = Object.keys(address)[0] as keyof ReverseAddress;
  if (immediate != 'road' && address.road) {
    return `${address[immediate]} ${address.road}`;
  }
  return address[immediate];
}

export function getCountry(address: ReverseAddress) {
  return address.country;
}
