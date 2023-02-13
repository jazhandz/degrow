import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import styled from "styled-components";
import { Container } from "../Container";
import { RichText } from "../RichText";

type LocationType = {
  address: string;
  link: string;
};

export type LocationsBlockType = {
  locations: LocationType[];
};

const ContainerStyled = styled(Container)`
  position: relative;
  padding: ${spacing.m} 0;
`;

const LocationStyled = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.p};
  padding: ${spacing.l} ${spacing.m};
  @media ${media.mobile} {
    width: 50%;
  }
  @media ${media.desktop} {
    width: 33.3%;
  }
`;

const LocationDirectionsStyled = styled.a`
  display: block;
  text-align: center;
  margin-top: ${spacing.m};
`;

export function LocationsBlock({ locations }: LocationsBlockType) {
  console.log("locs", locations);
  return (
    <ContainerStyled>
      {locations.map(location => (
        <LocationStyled key={location.address}>
          <RichText>{location.address}</RichText>
          <LocationDirectionsStyled target="blank" href={location.link}>
            Directions
          </LocationDirectionsStyled>
        </LocationStyled>
      ))}
    </ContainerStyled>
  );
}
