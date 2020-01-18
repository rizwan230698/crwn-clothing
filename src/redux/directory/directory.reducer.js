import hat from "../../assests/images/hats.png";
import jacket from "../../assests/images/jackets.png";
import sneaker from "../../assests/images/sneakers.png";
import women from "../../assests/images/womens.png";
import men from "../../assests/images/men.png";

const INITAIL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: hat,
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: jacket,
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: sneaker,
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: women,
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: men,
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
