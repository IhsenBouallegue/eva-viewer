import type {
  MantineThemeOverride,
  DefaultMantineColor,
  Tuple,
} from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#fff2e3",
      "#ffbf71",
      "#ffbf71",
      "#ffa639",
      "#ff8d00",
      "#c66d00",
      "#8e4e00",
      "#552f00",
      "#1c1000",
    ],
    secondary: [
      "#ffe9e3",
      "#ffbcaa",
      "#ff9071",
      "#ff6439",
      "#ff3800",
      "#c62b00",
      "#8e1f00",
      "#551300",
      "#1c0600",
    ],
  },
  primaryColor: "yellow",
  defaultRadius: "sm",
  fontFamily: "Poppins",
  headings: { fontFamily: "Poppins", fontWeight: "bold" },
};

export default theme;

type ExtendedCustomColors = "brand" | "secondary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
