import { useTheme } from "@emotion/react";
import { Box, Button, Grid2, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeroImage from "../Images/hero.webp";
import Herobox from "../Images/herobox.webp";
import Herobox2 from "../Images/herobox2.webp";
import Stars from "../MuiComponents/Stars";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "10vh 7vw",
            tablet: "15vh 7vw",
          },
        }}
      >
        <Grid2 container spacing={8}>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
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
                  textAlign: {
                    mobile: "center",
                    laptop: "unset",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      mobile: "32px",
                      laptop: "50px",
                      desktop: "62px",
                    },
                    fontWeight: "1000",
                  }}
                >
                  Dive into Delights Of Delectable{" "}
                  <Typography
                    sx={{
                      display: "inline-block",
                      color: "#39DB4A",
                      fontSize: {
                        mobile: "32px",
                        laptop: "40px",
                        desktop: "62px",
                      },
                      fontWeight: "1000",
                    }}
                  >
                    Food
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    color: "#4A4A4A",
                    fontSize: {
                      mobile: "16px",
                      laptop: "22px",
                      desktop: "26px",
                    },
                  }}
                >
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    justifyContent: {
                      mobile: "center",
                      laptop: "unset",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: "#39DB4A",
                      borderRadius: "40px",
                      fontSize: {
                        mobile: "16px",
                        laptop: "19px",
                        desktop: "26px",
                      },
                      padding: "6px 25px",
                      boxShadow: "0px 4px 10px rgba(57, 219, 74, 1)",
                    }}
                  >
                    Order Now
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      texTransform: "none",
                      color: "#4D4D4D",
                      borderRadius: "40px",
                      fontSize: {
                        mobile: "16px",
                        laptop: "19px",
                        desktop: "26px",
                      },
                      textTransform: "none",
                    }}
                  >
                    Watch Video
                  </Button>
                  <IconButton
                    sx={{
                      bgcolor: "#fff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    aria-label="play"
                  >
                    <PlayArrowIcon
                      sx={{ width: "36px", height: "36px", color: "#1E1E1E" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-end",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  padding: "10px 10px",
                  bgcolor: "#39DB4A",
                  borderRadius: "50%",
                  position: "relative", // Ensures positioned elements inside stay within this box
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    display: "block",
                    height: {
                      mobile: "300px",
                      tablet: "400px",
                      desktop: "500px",
                    },
                  }}
                  alt="Hero image"
                  src={HeroImage}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bgcolor: "#FFFFFF", // Background color for the communication box
                    color: "#333",
                    borderRadius: 2,
                    padding: "10px 15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    fontSize: {
                      mobile: "12px",
                      tablet: "14px",
                      desktop: "16px",
                    },
                    maxWidth: "150px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FF6868",
                      fontSize: {
                        mobile: "14px",
                        laptop: "20px",
                      },
                      fontWeight: "700",
                    }}
                    variant="body2"
                    fontWeight="bold"
                  >
                    Hot spicy Food 🌶
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: {
                      mobile: "block",
                      tablet: "flex",
                    },
                    justifyContent: "space-between",
                    position: "absolute",
                    top: {
                      mobile: "350px",
                      tablet: "400px",
                      laptop:'360px',
                      desktop:'450px'
                    }, // Adjust this value as needed
                    left: {
                      mobile: "50%",
                      tablet: "25%",
                      laptop: "25%",
                      desktop: "35%",
                    },
                    transform: "translateX(-50%)",
                    width: "80%", // Adjust width based on the desired width for both divs'
                    gap: {
                      tablet: "40px",
                      laptop: "20px",
                      desktop: "40px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "25px",
                      padding: "10px 20px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      mb: {
                        mobile: "1rem",
                        tablet: "0",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: "96px",
                        height: "96px",
                        display: "block",
                        borderRadius: "15px",
                      }}
                      alt="Hero box 1st image"
                      src={Herobox}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2C2C2C",
                          fontWeight: "700",
                          fontSize: {
                            mobile: "14px",
                            laptop: "22px",
                          },
                        }}
                      >
                        Spicy noodles
                      </Typography>
                      <Stars />
                      <Typography
                        sx={{
                          color: "#515151",
                          fontWeight: "700",
                          fontSize: {
                            mobile: "14px",
                            laptop: "22px",
                          },
                        }}
                      >
                        <Typography
                          sx={{ display: "inline-block", color: "#FF7979" }}
                        >
                          $
                        </Typography>
                        18.00
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "25px",
                      padding: "10px 20px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: "96px",
                        height: "96px",
                        display: "block",
                        borderRadius: "15px",
                      }}
                      alt="Hero box 1st image"
                      src={Herobox2}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2C2C2C",
                          fontWeight: "700",
                          fontSize: {
                            mobile: "14px",
                            laptop: "22px",
                          },
                        }}
                      >
                        Vegetarian Salad
                      </Typography>
                      <Stars />
                      <Typography
                        sx={{
                          color: "#515151",
                          fontWeight: "700",
                          fontSize: {
                            mobile: "14px",
                            laptop: "22px",
                          },
                        }}
                      >
                        <Typography
                          sx={{ display: "inline-block", color: "#FF7979" }}
                        >
                          $
                        </Typography>
                        23.00
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Hero;
