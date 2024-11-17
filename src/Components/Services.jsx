import { useTheme } from "@emotion/react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RedeemIcon from "@mui/icons-material/Redeem";
import React from "react";

const Services = () => {
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
            mobile: 6,
            laptop: 3,
          }}
        >
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
                  justifyContent: {
                    mobile: "center",
                    laptop: "unset",
                  },
                  alignItems: {
                    mobile: "center",
                    laptop: "unset",
                  },
                  textAlign: {
                    mobile: "center",
                    laptop: "unset",
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
                    },
                    textTransform: "uppercase",
                  }}
                >
                  Our Story & Services
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "32px",
                      tablet: "40px",
                      laptop: "50px",
                      desktop: "60px",
                    },
                  }}
                >
                  Our Culinary Journey And Services
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "18px",
                      tablet: "20px",
                      laptop: "24px",
                      desktop: "26px",
                    },
                  }}
                >
                  Rooted in passion, we curate unforgettable dining experiences
                  and offer exceptional services, blending culinary artistry
                  with warm hospitality.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#39DB4A",
                    color: "#fff",
                    borderRadius: "40px",
                    fontSize: {
                      mobile: "18px",
                      tablet: "20px",
                      laptop: "24px",
                      desktop: "26px",
                    },
                    fontWeight: "700",
                    width: "max-content",
                    padding: "10px 40px",
                    textTransform: "none",
                  }}
                >
                  Explore
                </Button>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid2 container spacing={3}>
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
                        borderRadius: "30px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px 40px",
                        gap: "10px",
                        textAlign: "center",
                        width: "277px",
                        height: "297px",
                      }}
                    >
                      <LocalFloristIcon
                        sx={{
                          width: "100%",
                          display: "block",
                          height: "64px",
                          color: "#5FE26C",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#5FE26C",
                          fontWeight: "800",
                          fontSize: {
                            mobile: "16px",
                            tablet: "18px",
                            laptop: "20px",
                            desktop: "24px",
                          },
                        }}
                      >
                        Catering
                      </Typography>
                      <Typography
                        sx={{
                          color: "#90BD95",
                          fontWeight: "600",
                          fontSize: {
                            mobile: "14px",
                            tablet: "16px",
                            laptop: "18px",
                            desktop: "20px",
                          },
                        }}
                      >
                        Delight your guests with our flavors and presentation
                      </Typography>
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
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px 40px",
                        gap: "10px",
                        textAlign: "center",
                        width: "277px",
                        height: "297px",
                      }}
                    >
                      <AccessTimeIcon
                        sx={{
                          width: "100%",
                          display: "block",
                          height: "64px",
                          color: "#5FE26C",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#5FE26C",
                          fontWeight: "800",
                          fontSize: {
                            mobile: "16px",
                            tablet: "18px",
                            laptop: "20px",
                            desktop: "24px",
                          },
                        }}
                      >
                        Fast delivery
                      </Typography>
                      <Typography
                        sx={{
                          color: "#90BD95",
                          fontWeight: "600",
                          fontSize: {
                            mobile: "14px",
                            tablet: "16px",
                            laptop: "18px",
                            desktop: "20px",
                          },
                        }}
                      >
                        We deliver your order promptly to your door
                      </Typography>
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
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px 40px",
                        gap: "10px",
                        textAlign: "center",
                        width: "277px",
                        height: "297px",
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        sx={{
                          width: "100%",
                          display: "block",
                          height: "64px",
                          color: "#5FE26C",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#5FE26C",
                          fontWeight: "800",
                          fontSize: {
                            mobile: "16px",
                            tablet: "18px",
                            laptop: "20px",
                            desktop: "24px",
                          },
                        }}
                      >
                        Online Ordering
                      </Typography>
                      <Typography
                        sx={{
                          color: "#90BD95",
                          fontWeight: "600",
                          fontSize: {
                            mobile: "14px",
                            tablet: "16px",
                            laptop: "18px",
                            desktop: "20px",
                          },
                        }}
                      >
                        Explore menu & order with ease using our Online Ordering
                      </Typography>
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
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px 40px",
                        gap: "10px",
                        textAlign: "center",
                        width: "277px",
                        height: "297px",
                      }}
                    >
                      <RedeemIcon
                        sx={{
                          width: "100%",
                          display: "block",
                          height: "64px",
                          color: "#5FE26C",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#5FE26C",
                          fontWeight: "800",
                          fontSize: {
                            mobile: "16px",
                            tablet: "18px",
                            laptop: "20px",
                            desktop: "24px",
                          },
                        }}
                      >
                        Gift Cards
                      </Typography>
                      <Typography
                        sx={{
                          color: "#90BD95",
                          fontWeight: "600",
                          fontSize: {
                            mobile: "14px",
                            tablet: "16px",
                            laptop: "18px",
                            desktop: "20px",
                          },
                        }}
                      >
                        Give the gift of exceptional dining with Foodi Gift
                        Cards
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Services;
