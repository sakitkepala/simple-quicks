import { style } from "@vanilla-extract/css";
import { color } from "../app.css";

export const divider = style({
  height: 1,
  border: "none",
  backgroundColor: color.primaryGray20,
});
