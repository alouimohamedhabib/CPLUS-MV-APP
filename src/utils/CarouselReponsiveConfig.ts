const responsiveCarousel={
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5
  },
  tabletb: {
    breakpoint: { max: 1600, min: 1280 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 786 },
    items: 3
  },
  tabletd: {
    breakpoint: { max: 767, min: 465 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default responsiveCarousel;
