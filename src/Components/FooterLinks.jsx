import { useTheme } from "@emotion/react";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const FooterLinks = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: "1vh 7vw",
        }}
      >
        <Grid2 container spacing={4}>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <IconButton
                sx={{
                  width: "60px",
                  height: "60px",
                  bgcolor: "#EDFFEF",
                  "&:hover": {
                    bgcolor: "#39DB4A",
                    color: "#fff",
                  },
                  color: "#000",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "60px",
                  height: "60px",
                  bgcolor: "#EDFFEF",
                  "&:hover": {
                    bgcolor: "#39DB4A",
                    color: "#fff",
                  },
                  color: "#000",
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "60px",
                  height: "60px",
                  bgcolor: "#EDFFEF",
                  "&:hover": {
                    bgcolor: "#39DB4A",
                    color: "#fff",
                  },
                  color: "#000",
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "60px",
                  height: "60px",
                  bgcolor: "#EDFFEF",
                  "&:hover": {
                    bgcolor: "#39DB4A",
                    color: "#fff",
                  },
                  color: "#000",
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              laptop: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#555555",
                  fontWeight: "500",
                  fontSize: {
                    mobile: "14px",
                    tablet: "16px",
                    laptop: "18px",
                    desktop: "22px",
                  },
                  ml: "3rem",
                  mt: {
                    laptop: "1rem",
                    desktop: ".7rem",
                  },
                }}
              >
                Copyright © 2023 Dscode | All rights reserved
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default FooterLinks;
