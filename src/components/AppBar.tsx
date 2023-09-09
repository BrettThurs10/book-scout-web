import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Badge, BadgeProps, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { scrollToAnchor } from "@/utils/scrollToAnchor";

const pages = [
  { name: "Home", anchor: "beamMeUpScotty" },
  { name: "Features", anchor: "readOnLizzy" },
  { name: "Beta", anchor: "beta" },
  // { name: "Contact", anchor: "contact" },
];

export type ResponsiveAppBarProps = {
  isScrolled: boolean;
};

function ResponsiveAppBar(props: ResponsiveAppBarProps) {
  const { isScrolled } = props;
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (anchor: string) => {
    setAnchorElNav(null);
    scrollToAnchor(anchor);
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 14,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const Logo = (props: TypographyProps) => (
    <StyledBadge badgeContent="Beta" color="secondary">
      <Typography
        variant="logo"
        noWrap
        component="a"
        href="/"
        color="primary"
        sx={{
          ...props.sx,
        }}
      >
        Book Scout
      </Typography>
    </StyledBadge>
  );

  function determineColor(index: number) {
    let color = "";
    switch (index) {
      case 1:
        color = "secondary";

        break;
      case 2:
        color = "info";

        break;
      case 3:
        color = "error";

        break;
      default:
        color = "primary";
        break;
    }
    return color;
  }

  return (
    <nav>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: (theme) =>
            props.isScrolled
              ? theme.palette.background.default
              : "rgba(0,0,0,0.2)",
          transition: "background-color .5s ease",
          backdropFilter: { xs: "blur(0)", md: "blur(5px)" },
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)", // Add a shadow for soft edges
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.2) 100%)",
            borderRadius: "inherit",
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Stack
              sx={{
                flexDirection: "row",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Logo sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
            </Stack>

            <Stack
              sx={{
                flex: 1,
                justifyContent: "center",
                display: {
                  xs: "flex",
                  md: "none",
                  alignItems: "center",
                  flexDirection: "row",
                },
              }}
            >
              <Stack direction="row" alignItems={"center"} sx={{ mt: 1 }}>
                <Logo
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                  }}
                />
              </Stack>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  position: "absolute",
                  right: 0,
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.name}
                      onClick={() => handleCloseNavMenu(page.anchor)}
                    >
                      <Typography color="secondary" textAlign="center">
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Stack>
            <Box
              sx={{
                flex: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page.name}
                  onClick={() => scrollToAnchor(page.anchor)}
                  color={
                    determineColor(index) as
                      | "secondary"
                      | "info"
                      | "error"
                      | "primary"
                  }
                  sx={{ m: 2, display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
export default ResponsiveAppBar;
