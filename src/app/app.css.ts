import { globalStyle, style, createVar } from "@vanilla-extract/css";

globalStyle(":root", {
  boxSizing: "border-box",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
  padding: 0,
  margin: 0,
});

globalStyle("html, body, #root", {
  height: "100%",
});

export const color = {
  black: createVar(),
  primaryBlue: createVar(),
  primaryGray10: createVar(),
  primaryGray20: createVar(),
  primaryGray30: createVar(),
  indicatorOrange: createVar(),
  indicatorPurple: createVar(),
  indicatorRed: createVar(),
  indicatorYellow: createVar(),
};

export const fontFamilyLato = createVar();

export const vars = style({
  vars: {
    [color.black]: "rgba(51, 51, 51, 1)",
    [color.primaryBlue]: "rgba(47, 128, 237, 1)",
    [color.primaryGray10]: "rgba(224, 224, 224, 1)",
    [color.primaryGray20]: "rgba(130, 130, 130, 1)",
    [color.primaryGray30]: "rgba(79, 79, 79, 1)",
    [color.indicatorOrange]: "rgba(248, 183, 107, 1)",
    [color.indicatorPurple]: "rgba(135, 133, 255, 1)",
    [color.indicatorRed]: "rgba(235, 87, 87, 1)",
    [color.indicatorYellow]: "rgba(242, 201, 76, 1)",
    [fontFamilyLato]: "'Lato', sans-serif",
  },
});

export const shell = style({
  minHeight: "100vh",
  backgroundColor: color.black,
  fontSize: "0.875rem",
  fontFamily: fontFamilyLato,

  display: "grid",
  gridTemplateColumns: "0 minmax(0, 6fr)",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "285px minmax(0, 6fr)",
    },
  },
});

export const sideBar = style({
  "@media": {
    "screen and (min-width: 768px)": {
      borderRight: "solid 1px rgba(242, 242, 242, 1)",
    },
  },
});

export const mainPanel = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
});

export const searchBar = style({
  height: "3.625rem",
  backgroundColor: color.primaryGray20,
});

export const mainContent = style({
  position: "relative",
  zIndex: 0,
});
