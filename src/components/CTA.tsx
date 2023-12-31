import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { BetaDownload } from "./BetaDownload";
import { ArrowUpward } from "@mui/icons-material";
import { scrollToAnchor } from "@/utils/scrollToAnchor";
import { darkTheme } from "@/styles/theme";

type CTAProps = {
  img?: string;
  imgLeft?: boolean;
  backgroundColor: keyof typeof darkTheme.palette; // Specify the type here
  text: { title: string; body: string };
  btn?: React.ReactNode;
};

export const CTA = ({ backgroundColor, btn, text }: CTAProps) => {
  const theme = useTheme();
  const bgColor = backgroundColor as keyof typeof theme.palette;
  const paletteColor = theme.palette[bgColor];
  //@ts-ignore
  const mainColor = paletteColor && paletteColor.main;
  return (
    <section>
      <Box
        sx={{
          background: mainColor || theme.palette.background.default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            py: 20,
          }}
        >
          <Stack
            sx={{
              flex: 1,
            }}
          />

          <Box
            sx={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ justifyContent: "center" }}>
              <Typography
                variant="h4"
                color={backgroundColor === "background" ? "info" : "black"}
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {text.title}
              </Typography>
              <Typography
                color={backgroundColor === "background" ? "info" : "black"}
                sx={{ pt: 1, textAlign: "center" }}
              >
                {text.body}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <BetaDownload variant="contained" />
                <Stack
                  sx={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    mt: 10,
                  }}
                >
                  <Box>
                    <Button
                      onClick={() => scrollToAnchor("beamMeUpScotty")}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 10, px: 10, py: 1 }}
                      endIcon={<ArrowUpward />}
                    >
                      Back to top
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};
