import { style } from "@vanilla-extract/css";
import { color } from "../../app.css";

export const layout = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const searchBar = style({
  flexShrink: 0,
  paddingTop: "var(--panel-padding-block)",
  paddingInline: "var(--panel-padding-inline)",
});

export const field = style({
  position: "relative",
  zIndex: 0,
});

export const searchIcon = style({
  position: "absolute",
  top: 0,
  right: 58,
  bottom: 0,
  display: "flex",
  alignItems: "center",
});

export const searchBox = style({
  display: "block",
  padding: "10px calc(58px + 12px) 10px 58px",
  width: "100%",
  border: `solid 1px ${color.primaryGray20}`,
  borderRadius: 5,
  backgroundColor: "rgba(255, 255, 255, 1)",

  color: "rgba(51, 51, 51, 1)",
  fontSize: "inherit",
  fontFamily: "inherit",
  fontWeight: 700,

  ":focus": {
    outline: `solid 1px ${color.primaryGray20}`,
  },
});

export const conversationList = style({
  flexGrow: 1,
  minHeight: 0,
  paddingLeft: "var(--panel-padding-inline)",
  paddingRight: "calc(var(--panel-padding-inline) - var(--scrollbar-width))",
  paddingBottom: "var(--panel-padding-block)",
});

export const divider = style({
  height: 1,
  border: "none",
  backgroundColor: color.primaryGray20,
});
