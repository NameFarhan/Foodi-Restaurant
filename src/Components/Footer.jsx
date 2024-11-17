import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "10vh 7vw",
            tablet: "15vh 7vw",
            laptop: "9vh 7vw",
          },
        }}
      >
        <Grid2 container spacing={5}>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: {
                        mobile: "20px",
                        laptop: "25px",
                      },
                      fontWeight: "1000",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      color: "#fff",
                      bgcolor: "#39DB4A",
                    }}
                  >
                    F
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        mobile: "20px",
                        laptop: "25px",
                      },
                      fontWeight: "1000",
                      color: "#000",
                    }}
                  >
                    OODI
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "16px",
                      tablet: "18px",
                      laptop: "22px",
                      desktop: "24px",
                    },
                  }}
                >
                  Savor the artistry where every dish is a culinary masterpiece
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "16px",
                      tablet: "18px",
                      laptop: "22px",
                      desktop: "26px",
                    },
                  }}
                >
                  Useful links
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    About us
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Events
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Blogs
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    FAQ
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "16px",
                      tablet: "18px",
                      laptop: "22px",
                      desktop: "26px",
                    },
                  }}
                >
                  Main Menu
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Offers
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Menus
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Reservation
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "16px",
                      tablet: "18px",
                      laptop: "22px",
                      desktop: "26px",
                    },
                  }}
                >
                  Contact Us
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    example@email.com
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    +64 958 248 966
                  </Typography>
                  <Typography
                    sx={{
                      color: "#555555",
                      fontWeight: "500",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "22px",
                        desktop: "24px",
                      },
                    }}
                  >
                    Social media
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Footer;
