"use client";

import { Work_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const { primaryLight } = colors;

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  palette: {
    mode: "dark",
    primary: {
      main: primaryLight[50],
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
    allVariants: {
      letterSpacing: "0 !important",
    },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        // baseClassName: "material-icons-round",
        baseClassName: "material-symbols-rounded",
      },
      styleOverrides: {
        root: {
          fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 200, 'opsz' 48",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export { theme };
