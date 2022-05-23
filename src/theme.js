export const scroll = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  container: "#___gatsby",
  options: {
    smooth: true,
    smoothMobile: true,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.15,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
      smooth: !0,
      breakpoint: 767,
    },
    tablet: {
      smooth: !1,
      breakpoint: 1024,
    },
    class: "is-reveal",
  },
};
