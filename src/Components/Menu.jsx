import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const Menu = () => {
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
          mt: {
            mobile: "47vh",
            tablet: "0vh",
            laptop:'15vh'
          },
        }}
      >
        <Typography
          sx={{
            color: "#FF6868",
            fontWeight: "800",
            letterSpacing: "2px",
            fontSize: {
              mobile: "13px",
              tablet: "15px",
              laptop: "18px",
              desktop: "20px",
            },
            textTransform: "uppercase",
            mb: "1rem",
            textAlign: {
              mobile: "center",
              laptop: "left",
            },
          }}
        >
          Special Dishes
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "800",
            letterSpacing: "2px",
            fontSize: {
              mobile: "32px",
              tablet: "40px",
              laptop: "50px",
              desktop: "60px",
            },
            mb: "1rem",
            textAlign: {
              mobile: "center",
              laptop: "left",
            },
          }}
        >
          Standout Dishes From Our Menu
        </Typography>
        <Box>
          Area For Slider
        </Box>
      </Box>
    </>
  );
};

export default Menu;
