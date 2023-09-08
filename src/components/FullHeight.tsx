import React from "react";
import { Box, BoxProps } from "@mui/material";

export interface FullHeightContainerProps extends BoxProps {
  children: React.ReactNode;
}

function FullHeightContainer({ children, sx }: FullHeightContainerProps) {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: 500,
        height: "100vh", // Set the height to viewport height
        overflow: "auto", // Enable scrolling
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default FullHeightContainer;
