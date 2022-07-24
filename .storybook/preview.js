import "../styles/globals.css";
import "./patchNextImage";
import { RouterContext } from "next/dist/shared/lib/router-context";

const customViewports = {
  smallScreen: {
    name: "Small Screen",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  mediumScreen: {
    name: "Medium Screen",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  largeScreen: {
    name: "Large Screen",
    styles: {
      width: "1280px",
      height: "708px",
    },
  },
  xlScreen: {
    name: "XL Screen",
    styles: {
      width: "1440px",
      height: "768px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
  darkMode: {
    current: "dark",
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story, ctx) => {
    return <Story />;
  },
];
