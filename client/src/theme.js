import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },

  secondary: {
    100: "#cceff0",
    200: "#99dee1",
    300: "#66ced3",
    400: "#33bdc4",
    500: "#00adb5",
    600: "#008a91",
    700: "#00686d",
    800: "#004548",
    900: "#002324",
  },

  neutral: {
    100: "#fcfcfc",
    200: "#f8f8f8",
    300: "#f5f5f5",
    400: "#f1f1f1",
    500: "#eeeeee",
    600: "#bebebe",
    700: "#8f8f8f",
    800: "#5f5f5f",
    900: "#303030",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 48 },
    h2: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 26 },
    h3: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 20 },
    h4: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 14 },
  },
});
