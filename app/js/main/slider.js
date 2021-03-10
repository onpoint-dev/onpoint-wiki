import Splide from "@splidejs/splide";

const slider = () => {
  const slider1 = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    gap: 30,
  }).mount();
};

export default slider;
