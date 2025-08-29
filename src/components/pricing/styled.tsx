"use client";

import { Stack, styled } from "@mui/material";

export const StyledUl = styled("ul")(() => ({
  listStyle: "inherit !important",
  "& li, li::marker": {
    color: "#ABABAB",
  },
}));

export const StyledPriceCard = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "$isMostPopular",
})<{ $isMostPopular?: boolean }>(({ $isMostPopular }) => ({
  border: !$isMostPopular ? "3px solid #282828 !important" : "none",
  "&::before": $isMostPopular
    ? {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(101.33deg, #C58123 -7.23%, #603801 85.32%)",
        borderRadius: "inherit",
        padding: "3px",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        maskComposite: "exclude",
        pointerEvents: "none",
      }
    : "",
}));
