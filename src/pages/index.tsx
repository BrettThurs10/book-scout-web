import { BetaSignUp } from "@/components/BetaSignUp";
import { CTA } from "@/components/CTA";
import { FeatureSection } from "@/components/FeatureSection";
import FullHeightContainer from "@/components/FullHeight";
import { MinorSection } from "@/components/MinorSection";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { BsDiscord } from "react-icons/bs";
import { scrollToAnchor } from "@/utils/scrollToAnchor";
import { darkTheme } from "@/styles/theme";

export default function Home() {
  const router = useRouter();
  const handlePrivacyPolicyClick = () => {
    router.push("privacy");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main id="beamMeUpScotty">
        <FullHeightContainer
          sx={{
            backgroundImage: `url("/img/headerBG.webp")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "305% 25%",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            display: "flex",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              justifyContent: "center",
              flex: 1,
              display: "flex",
              alignItems: "center",
              marginTop: { xs: 5, md: 10 },
              paddingBottom: 5,
              position: "relative",
              zIndex: 2,
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url("/img/appHome.webp")`, // Use the imported image
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: { xs: "center center", md: "right center" },
                minHeight: 550,
                maxHeight: "75vh",
                flex: 1,
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                height: 575,
                width: "100%",
                maxWidth: 600,
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 5, md: 10 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Discover New Books with Ease, Thanks to Book Scout
              </Typography>

              <Typography color="info" sx={{ pt: 2, color: "#fff" }}>
                {`Are you tired of the guesswork involved in finding your next captivating read? Look no further than Book Scout. As a discerning reader, you're always on the hunt for exciting stories and adventures, but you may also have specific preferences and want to avoid certain topics or overused tropes. With Book Scout, your reading experience just got better.`}
              </Typography>

              <Typography sx={{ pt: 2, color: "#fff" }}>
                Book Scout is on the verge of its exciting launch. Join our Beta
                notification list now!
              </Typography>

              <BetaSignUp leftAligned variant="contained" color="secondary" />
            </Box>
          </Container>
          <Container
            sx={{
              position: "relative",
              zIndex: 3,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              bottom: 20,
            }}
          >
            <Box>
              <Button
                onClick={() => scrollToAnchor("readOnLizzy")}
                size="large"
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  px: 10,
                  py: 1,
                  my: 5,
                  display: { xs: "none", md: "flex" },
                }}
                endIcon={<ArrowDropDown />}
              >
                Find out more
              </Button>
            </Box>
            <span id="readOnLizzy" />
          </Container>
          {/* <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(6,15,23, 0.2), rgba(6,15,23, 0.5) 20%, rgba(6,15,23, 1) 80%)", // Gradient overlay
              zIndex: 1, // Place the overlay behind the content
            }}
          /> */}
        </FullHeightContainer>

        <FeatureSection
          img="/img/searchScreen.webp"
          backgroundColor="primary"
          text={{
            title: "Scan or Search for Any Book",
            body: "Empower yourself to explore any book before investing your precious time. Whether you prefer scanning a barcode or searching by title, Book Scout effortlessly handles the rest.",
          }}
        />
        <FeatureSection
          img="/img/detailsScreen.webp"
          backgroundColor="secondary"
          imgLeft
          text={{
            title: "Knowledge is Power",
            body: "Book Scout compiles comprehensive information and insights for nearly any book you search for. You'll uncover book details, AI-generated insights, insightful Amazon book reviews, and direct links to purchase the books on Amazon.",
          }}
        />
        <FeatureSection
          img="/img/aiInsights.webp"
          backgroundColor="info"
          text={{
            title: "Swift AI Book Insights",
            body: "Discover if a book aligns with your interests in no time. Our AI system distills the best aspects of books while also identifying potential themes you may want to know about.",
          }}
        />
        <FeatureSection
          imgLeft
          img="/img/keywords.webp"
          backgroundColor="background"
          text={{
            title: "Smart Book Reviews with Keyword Highlights",
            body: "We bring you Amazon book reviews for your consideration. What's more, you can tailor your research by highlighting keywords in customer book reviews that matter to you.",
          }}
        />
        <MinorSection
          img="/img/family.webp"
          backgroundColor="primary"
          text={{
            title: "Tailored for Discerning Readers",
            body: "Whether you have specific reading preferences or simply want to stay informed about your loved ones' literary choices, Book Scout is here to assist.",
          }}
        />
        <MinorSection
          imgLeft
          img="/img/discordWizard.webp"
          backgroundColor="secondary"
          text={{
            title: "Join Us on Discord",
            body: "Dive into the conversation and contribute to the development of Book Scout. Become part of a community of passionate readers. Share your insights, uncover hidden literary gems, and help us shape the future of reading.",
          }}
          btn={
            <Button
              color="primary"
              sx={{ mt: 3 }}
              variant="contained"
              startIcon={<BsDiscord />}
            >
              Book Scout Discord Server coming soon
            </Button>
          }
        />
        <MinorSection
          img="/img/smiling.webp"
          backgroundColor="info"
          text={{
            title: "More Exciting Features Coming Soon",
            body: "Book Scout has a slew of exciting features in the pipeline. Stay tuned for cloud-based features, user accounts, curated playlists, suggest-a-book functionality, and much more!",
          }}
        />
        <span id="beta" />
        <CTA
          backgroundColor="background"
          text={{
            title: "Book Scout Beta: Launching Soon",
            body: "Get ready to revolutionize the way you discover and enjoy books. Sign up now to receive notifications when Book Scout Beta sets sail on its maiden voyage.",
          }}
        />
        <footer>
          <Stack
            sx={{
              background: "black",
              borderTop: (theme) => `2px solid ${theme.palette.primary.main}`,
              mb: { xs: 40, md: 0 },
            }}
          >
            <Container
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  flexDirection: { xs: "column-reverse", md: "row" },
                  justifyContent: "space-between",
                  py: 10,
                  flex: { xs: 1, md: 1 },
                  alignItems: "center",
                }}
              >
                <Box sx={{ mt: { xs: 5, md: 0 } }}>
                  <Button color="info" variant="text" sx={{ fontSize: 12 }}>
                    © 2023 Cool Slingshot
                  </Button>
                </Box>
                <Box>
                  <Button
                    onClick={handlePrivacyPolicyClick}
                    variant="contained"
                  >
                    Privacy policy
                  </Button>
                </Box>
              </Stack>
            </Container>
          </Stack>
        </footer>
      </main>
    </ThemeProvider>
  );
}
