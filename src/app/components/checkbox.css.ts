import { style } from "@vanilla-extract/css";
import { color } from "../app.css";

export const root = style({
  all: "unset",

  width: "1rem",
  height: "1rem",
  border: `solid 1px ${color.primaryGray20}`,
  borderRadius: 3,
  backgroundColor: "rgba(255, 255, 255, 1)",
  color: color.primaryGray20,
  lineHeight: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const indicator = style({
  color: color.primaryGray20,
});
