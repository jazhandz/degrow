import { FlavourType } from "@/types/CMS/Flavours";

export const FLAVOURS: FlavourType[] = [
  {
    id: "original",
    title: "Original",
    gradient: ["softBlue", "softPink", "softOrange"],
    detailPage: {
      description:
        "Degrow lab is an Utrecht- based kombucha Microbrewery. We are obsessed with brewing craft kombucha, while also determined to run our company according to principles of sustainability.",
      ingredients:
        "Kombucha** (Water, Rietsuiker*, Groene Thee*, Zwarte Thee*, Kombucha-cultuur*) Tepache** (Water, Piloncillo, Ananas, Kaneel, Kruidnagel, Spaanse peper). *Biologisch, ** lokaal uit Utrecht",
      nutrition:
        "Energie 98.3 Kj (23.2 kcal) Vetten &lt;0.0g Koolhydraten 5.8g Waarvan suikers 5.8g Vezels 0.0g Eiwitten 0.0g Zout 0.0g<br/><br/>*Per 100 ml",
    },
    discover: {
      yOffset: "-30%",
      rotate: 20,
      stiffness: -0.8,
    },
    productPicture: {
      src: "/images/flavour_demo",
      supportedTypes: ["webp", "png"],
      width: 300,
      height: 600,
      alt: "flavour-4",
    },
  },
  {
    id: "harvest-spice",
    title: "Harvest Spice",
    detailPage: {
      description:
        "Degrow lab is an Utrecht- based kombucha Microbrewery. We are obsessed with brewing craft kombucha, while also determined to run our company according to principles of sustainability.",
      ingredients:
        "Kombucha** (Water, Rietsuiker*, Groene Thee*, Zwarte Thee*, Kombucha-cultuur*) Tepache** (Water, Piloncillo, Ananas, Kaneel, Kruidnagel, Spaanse peper). *Biologisch, ** lokaal uit Utrecht",
      nutrition:
        "Energie 98.3 Kj (23.2 kcal) Vetten &lt;0.0g Koolhydraten 5.8g Waarvan suikers 5.8g Vezels 0.0g Eiwitten 0.0g Zout 0.0g<br/><br/>*Per 100 ml",
    },
    discover: {
      yOffset: "20%",
      rotate: -20,
      stiffness: 0.4,
    },
    productPicture: {
      src: "/images/flavour_demo",
      supportedTypes: ["webp", "png"],
      width: 300,
      height: 600,
      alt: "flavour-4",
    },
  },
  {
    id: "tepache-sunrise",
    title: "Flavour 1",
    gradient: ["softGrey", "softOrange", "softPink"],
    detailPage: {
      titleMobilePicture: {
        src: "/images/flavour_sunrise_title",
        alt: "Flavour Sunrise Title",
        objectFit: "contain",
        supportedTypes: ["webp", "png"],
        width: 2808,
        height: 589,
      },
      titleDesktopPicture: {
        src: "/images/flavour_sunrise_title",
        alt: "Flavour Sunrise Title",
        objectFit: "contain",
        supportedTypes: ["webp", "png"],
        width: 2808,
        height: 589,
      },
      description:
        "Degrow lab is an Utrecht- based kombucha Microbrewery. We are obsessed with brewing craft kombucha, while also determined to run our company according to principles of sustainability.",
      ingredients:
        "Kombucha** (Water, Rietsuiker*, Groene Thee*, Zwarte Thee*, Kombucha-cultuur*) Tepache** (Water, Piloncillo, Ananas, Kaneel, Kruidnagel, Spaanse peper). *Biologisch, ** lokaal uit Utrecht",
      nutrition:
        "Energie 98.3 Kj (23.2 kcal) Vetten &lt;0.0g Koolhydraten 5.8g Waarvan suikers 5.8g Vezels 0.0g Eiwitten 0.0g Zout 0.0g<br/><br/>*Per 100 ml",
    },
    discover: {
      yOffset: "-10%",
      rotate: 15,
      stiffness: -0.9,
    },
    productPicture: {
      src: "/images/flavour_demo",
      supportedTypes: ["webp", "png"],
      width: 300,
      height: 600,
      alt: "flavour-4",
    },
  },
  {
    id: "nabij",
    title: "Nabij",
    detailPage: {
      description:
        "Degrow lab is an Utrecht- based kombucha Microbrewery. We are obsessed with brewing craft kombucha, while also determined to run our company according to principles of sustainability.",
      ingredients:
        "Kombucha** (Water, Rietsuiker*, Groene Thee*, Zwarte Thee*, Kombucha-cultuur*) Tepache** (Water, Piloncillo, Ananas, Kaneel, Kruidnagel, Spaanse peper). *Biologisch, ** lokaal uit Utrecht",
      nutrition:
        "Energie 98.3 Kj (23.2 kcal) Vetten &lt;0.0g Koolhydraten 5.8g Waarvan suikers 5.8g Vezels 0.0g Eiwitten 0.0g Zout 0.0g<br/><br/>*Per 100 ml",
    },
    discover: {
      yOffset: "25%",
      rotate: -30,
      stiffness: 0.6,
    },
    productPicture: {
      src: "/images/flavour_demo",
      supportedTypes: ["webp", "png"],
      width: 300,
      height: 600,
      alt: "flavour-4",
    },
  },
];
