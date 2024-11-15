import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import cat1 from "../Images/1cat.webp";
import cat2 from "../Images/2cat.webp";
import cat3 from "../Images/3cat.webp";
import cat4 from "../Images/4cat.webp";
import React from "react";

const Categories = () => {
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
          position: {
            mobile: "relative",
            tablet: "static",
          },
          top: {
            mobile: "250px",
          },
          mt:'12vh'
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#FF6868",
            letterSpacing: "1px",
            fontWeight: "800",
            fontSize: {
              mobile: "13px",
              tablet: "15px",
              laptop: "20px",
            },
            mb: "1rem",
            textTransform:'uppercase'
          }}
        >
          Customer Favorites
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#000000",
            fontWeight: "800",
            fontSize: {
              mobile: "32px",
              laptop: "50px",
            },
            mb: "2rem",
          }}
        >
          Popular Catagories
        </Typography>

        <Grid2 container spacing={5}>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
              desktop: 3,
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
                  borderRadius: "40px",
                  bgcolor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px 60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#C1F1C6",
                    padding: "20px 20px",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 110,
                      width: 110,
                      display: "block",
                      objectFit: "cover",
                    }}
                    alt="category icon 1"
                    src={cat1}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "17px",
                      tablet: "20px",
                      laptop: "26px",
                      desktop: "30px",
                    },
                  }}
                >
                  Main Dish
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "28px",
                      desktop: "22px",
                    },
                  }}
                >
                  (86 dishes)
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
              desktop: 3,
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
                  borderRadius: "40px",
                  bgcolor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px 60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#C1F1C6",
                    padding: "20px 20px",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 110,
                      width: 110,
                      display: "block",
                      objectFit: "cover",
                    }}
                    alt="category icon 1"
                    src={cat2}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "17px",
                      tablet: "20px",
                      laptop: "26px",
                      desktop: "30px",
                    },
                  }}
                >
                  Break Fast
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "28px",
                      desktop: "22px",
                    },
                  }}
                >
                  (12 break fast)
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
              desktop: 3,
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
                  borderRadius: "40px",
                  bgcolor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px 60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#C1F1C6",
                    padding: "20px 20px",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 110,
                      width: 110,
                      display: "block",
                      objectFit: "cover",
                    }}
                    alt="category icon 1"
                    src={cat3}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "17px",
                      tablet: "20px",
                      laptop: "26px",
                      desktop: "30px",
                    },
                  }}
                >
                  Dessert
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "28px",
                      desktop: "22px",
                    },
                  }}
                >
                  (48 dessert)
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 6,
              desktop: 3,
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
                  borderRadius: "40px",
                  bgcolor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px 60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#C1F1C6",
                    padding: "20px 20px",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 110,
                      width: 110,
                      display: "block",
                      objectFit: "cover",
                    }}
                    alt="category icon 1"
                    src={cat4}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "700",
                    fontSize: {
                      mobile: "17px",
                      tablet: "20px",
                      laptop: "26px",
                      desktop: "30px",
                    },
                  }}
                >
                  Browse All
                </Typography>
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "13px",
                      tablet: "15px",
                      laptop: "28px",
                      desktop: "22px",
                    },
                  }}
                >
                  (255 Items)
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Categories;
