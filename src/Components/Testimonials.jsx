import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import testimonialimage from "../Images/testimonial.webp";
import backtestimonial from "../Images/backtestimonial.webp";
import React from "react";
import TestimonialAvatars from "../MuiComponents/Avatar";

const Testimonials = () => {
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
        <Grid2
          container
          spacing={{
            mobile: 0,
            tablet: 0,
            laptop: 8,
            desktop: 0,
          }}
        >
          <Grid2
            data-aos="fade-right"
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
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: "600px", // Set the height of your container
                }}
              >
                {/* Center Image */}
                <Box
                  component="img"
                  sx={{
                    height: {
                      mobile: "400px",
                      tablet: "400px",
                      laptop: "500px",
                      desktop: "550px",
                    },
                    width: {
                      mobile: "250px",
                      tablet: "400px",
                      laptop: "500px",
                      desktop: "550px",
                    },
                    objectFit: "contain",
                    display: "block",
                    bgcolor: "#53EC62",
                    borderRadius: "10%",
                    padding: "20px 20px",
                  }}
                  alt="Testimonial image"
                  src={testimonialimage}
                />

                {/* Bottom-Right Box (100px x 100px) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: {
                      mobile: "60px",
                      tablet: "75px",
                      laptop: "25px",
                    }, // Adjust this for placement from the bottom
                    right: 10, // Adjust this for placement from the right
                    left: {
                      mobile: "2px",
                      tablet: "180px",
                      laptop: "255px",
                      desktop: "300px",
                    },
                    width: "250px",
                    height: "50px",
                    bgcolor: "#fff", // Background color (you can change it)
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#202020",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "18px",
                      desktop: "20px",
                    },
                  }}
                >
                  Our Best Chef 😁
                </Box>

                {/* Left Box (50px x 50px) */}
                <Box
                  sx={{
                    position: "absolute",
                    left: -25, // Adjust this for placement from the left
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%", // Optional: circular shape
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: {
                      mobile: "22px",
                      tablet: "26px",
                      laptop: "26px",
                      desktop: "28px",
                    }, // Adjust emoji size
                  }}
                >
                  {/* Smile Emoji */}
                  😋
                </Box>

                {/* Right Box (50px x 50px) */}
                <Box
                  sx={{
                    position: "absolute",
                    right: -25, // Adjust this for placement from the right
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50px",
                    height: "50px",
                    bgcolor: "transparent", // Background color (you can change it)
                    borderRadius: "50%", // Optional: circular shape
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "34px", // Adjust emoji size
                  }}
                >
                  {/* Pizza Emoji */}
                  🍕
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            data-aos="fade-left"
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
                mt: {
                  mobile: "20vh",
                  tablet: "25vh",
                  laptop: "0",
                },
                ml: {
                  laptop: "4vw",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    mobile: "center",
                    laptop: "flex-start",
                  },
                  flexDirection: "column",
                  gap: "30px",
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#FF6868",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "17px",
                      desktop: "20px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    },
                  }}
                >
                  Testimonials
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "32px",
                      tablet: "40px",
                      laptop: "50px",
                      desktop: "60px",
                    },
                  }}
                >
                  What Our Customers Say About Us
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "18px",
                      tablet: "20px",
                      laptop: "22px",
                      desktop: "26px",
                    },
                  }}
                >
                  “I had the pleasure of dining at Foodi last night, and I'm
                  still raving about the experience! The attention to detail in
                  presentation and service was impeccable”
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      mobile: "center",
                      laptop: "unset",
                    },
                  }}
                >
                  <TestimonialAvatars />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: "3rem",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: {
                          mobile: "18px",
                          tablet: "20px",
                          laptop: "22px",
                          desktop: "26px",
                        },
                      }}
                    >
                      Customer Feedback
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: {
                          mobile: "18px",
                          tablet: "20px",
                          laptop: "22px",
                          desktop: "26px",
                        },
                        color: "#454545",
                      }}
                    >
                      4.9{" "}
                      <Typography
                        sx={{
                          display: "inline-block",
                          color: "#807E7E",
                          fontSize: {
                            mobile: "18px",
                            tablet: "20px",
                            laptop: "22px",
                            desktop: "26px",
                          },
                        }}
                      >
                        (18.6k Reviews)
                      </Typography>
                    </Typography>
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

export default Testimonials;
