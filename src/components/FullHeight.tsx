import React from "react";
import { Box, BoxProps } from "@mui/material";

export interface FullHeightContainerProps extends BoxProps {
  children: React.ReactNode;
}

function FullHeightContainer({ children, sx }: FullHeightContainerProps) {
  return (
    <section>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          ...sx,
        }}
      >
        {children}
      </Box>
    </section>
  );
}

export default FullHeightContainer;
