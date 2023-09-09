import { Box, Button, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

type MinorSectionProps = {
  img?: string;
  imgLeft?: boolean;
  backgroundColor: string;
  text: { title: string; body: string };
  btn?: React.ReactNode;
};

export const MinorSection = ({
  img,
  imgLeft = false,
  backgroundColor,
  btn,
  text,
}: MinorSectionProps) => {
  return (
    <section>
      <Box
        sx={{
          background: (theme) =>
            theme.palette[backgroundColor].main ||
            theme.palette[backgroundColor].default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: imgLeft ? "row" : "row-reverse",
            },
            flex: 1,
            minHeight: 400,
            p: "0px !important",
          }}
        >
          <Stack
            sx={{
              backgroundImage: `url(${img})`, // Use the imported image
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xs: "center center",
                md: `${imgLeft ? "right" : "left"} center`,
              },
              flex: 1,
              height: 400,
              p: { xs: 10, md: 0 },
            }}
          />

          <Box
            sx={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 10 }}>
              <Typography
                variant="h4"
                color={backgroundColor === "background" ? "info" : "black"}
                sx={{ fontWeight: 600 }}
              >
                {text.title}
              </Typography>
              <Typography
                color={backgroundColor === "background" ? "info" : "black"}
                sx={{ pt: 1 }}
              >
                {text.body}
              </Typography>
              {btn && btn}
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};
