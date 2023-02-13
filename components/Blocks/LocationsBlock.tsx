import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import styled from "styled-components";
import { Container } from "../Container";

type LocationType = {
  address: string;
  link: string;
};

export type LocationsBlockType = {
  locations: LocationType[];
};

const LocationStyled = styled.span`
  text-align: center;
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.h1};
  width: 100%;
  font-variant-numeric: slashed-zero;
`;

export function LocationsBlock({ locations }: LocationsBlockType) {
  return (
    <Container>
      {locations.map(location => (
        <LocationStyled key={location.address}>{location.address}</LocationStyled>
      ))}
    </Container>
  );
}
