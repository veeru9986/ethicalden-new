import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";
import "./locomotive-scroll.css";
import gsap from "gsap";
import Scroll from "./locomotiveScroll";
import useFontFaceObserver from "use-font-face-observer";
import Preloader from "./Preloader";
import UseLocalScroll from "../hooks/useLocalScroll";
import "./layout.css";

function Layout({ children, location }) {
  const [preloader, setPreloader] = React.useState(false);
  const ref = React.useRef(null);
  UseLocalScroll(preloader);

  React.useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);
  const [timer, setTimer] = React.useState(3);
  const isFontListLoaded = useFontFaceObserver([
    {
      family: `Quasimoda`,
      style: `italic`,
      weight: `bold`,
      stretch: `condensed`,
    },
  ]);

  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    isFontListLoaded && setPreloader(true);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 2000);
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  console.log("isFontListLoaded", isFontListLoaded);
  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/fri1lej.css" />
      </Helmet>
      <GlobalStyles />
      <TypographyStyles />

      {preloader ? (
        <div>
          <Navbar />
          <div
            ref={ref}
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            {children}
            {!location.pathname.match("/home-v1") ? null : (
              <Footer />
            )}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Layout;
