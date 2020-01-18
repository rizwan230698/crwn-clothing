import BrownBrim from "../../images/shop-img/hats/brown-brim.png";
import BlueBeanie from "../../images/shop-img/hats/blue-beanie.png";
import BrownCowboy from "../../images/shop-img/hats/brown-cowboy.png";
import GreyBrim from "../../images/shop-img/hats/grey-brim.png";
import GreenBeanie from "../../images/shop-img/hats/green-beanie.png";
import PalmTreeCap from "../../images/shop-img/hats/palm-tree-cap.png";
import RedBeanie from "../../images/shop-img/hats/red-beanie.png";
import WolfCap from "../../images/shop-img/hats/wolf-cap.png";
import BlueSnapback from "../../images/shop-img/hats/blue-snapback.png";

import AdidasNMD from "../../images/shop-img/sneakers/adidas-nmd.png";
import AdidasYeezy from "../../images/shop-img/sneakers/yeezy.png";
import BlackConverce from "../../images/shop-img/sneakers/black-converse.png";
import NikeWhiteAirForce from "../../images/shop-img/sneakers/white-nike-high-tops.png";
import NikeRedHighTops from "../../images/shop-img/sneakers/nikes-red.png";
import NikeBrownHighTops from "../../images/shop-img/sneakers/nike-brown.png";
import AirJordanLimited from "../../images/shop-img/sneakers/nike-funky.png";
import Timberlands from "../../images/shop-img/sneakers/timberlands.png";

import BlackJeanShearling from "../../images/shop-img/jackets/black-shearling.png";
import BlueJeanJacket from "../../images/shop-img/jackets/blue-jean-jacket.png";
import GreyJeanJacket from "../../images/shop-img/jackets/grey-jean-jacket.png";
import BrownShearling from "../../images/shop-img/jackets/brown-shearling.png";
import TanTrench from "../../images/shop-img/jackets/brown-trench.png";

import BlueTanktop from "../../images/shop-img/womens/blue-tank.png";
import FloralBlouse from "../../images/shop-img/womens/floral-blouse.png";
import FloralDress from "../../images/shop-img/womens/floral-skirt.png";
import RedDotsDress from "../../images/shop-img/womens/red-polka-dot-dress.png";
import StripedSweater from "../../images/shop-img/womens/striped-sweater.png";
import YellowTrackSuit from "../../images/shop-img/womens/yellow-track-suit.png";
import WhiteBlouse from "../../images/shop-img/womens/white-vest.png";

import CamoDownVest from "../../images/shop-img/mens/camo-vest.png";
import FloralTshirt from "../../images/shop-img/mens/floral-shirt.png";
import BlackWhiteLongsleeve from "../../images/shop-img/mens/long-sleeve.png";
import PinkTshirt from "../../images/shop-img/mens/pink-shirt.png";
import JeanLongSleeve from "../../images/shop-img/mens/roll-up-jean-shirt.png";
import BurgundyTshirt from "../../images/shop-img/mens/polka-dot-shirt.png";

const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: BrownBrim,
        price: 25
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: BlueBeanie,
        price: 18
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: BrownCowboy,
        price: 35
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: GreyBrim,
        price: 25
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: GreenBeanie,
        price: 18
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: PalmTreeCap,
        price: 14
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: RedBeanie,
        price: 18
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: WolfCap,
        price: 14
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: BlueSnapback,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: AdidasNMD,
        price: 220
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: AdidasYeezy,
        price: 280
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: BlackConverce,
        price: 110
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: NikeWhiteAirForce,
        price: 160
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: NikeRedHighTops,
        price: 160
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: NikeBrownHighTops,
        price: 160
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: AirJordanLimited,
        price: 190
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: Timberlands,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: BlackJeanShearling,
        price: 125
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: BlueJeanJacket,
        price: 90
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: GreyJeanJacket,
        price: 90
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: BrownShearling,
        price: 165
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: TanTrench,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: BlueTanktop,
        price: 25
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: FloralBlouse,
        price: 20
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: FloralDress,
        price: 80
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: RedDotsDress,
        price: 80
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: StripedSweater,
        price: 45
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: YellowTrackSuit,
        price: 135
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: WhiteBlouse,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: CamoDownVest,
        price: 325
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: FloralTshirt,
        price: 20
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: BlackWhiteLongsleeve,
        price: 25
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: PinkTshirt,
        price: 25
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: JeanLongSleeve,
        price: 40
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: BurgundyTshirt,
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
