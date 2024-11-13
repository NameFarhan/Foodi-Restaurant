import { useTheme } from "@emotion/react";
import {
  Grid2,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
    setServicesAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ padding: "2vh 7vw" }}>
        <Grid2 container>
          <Grid2 item size={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'center',
                mt: {
                  mobile: ".1rem",
                  tablet: ".3rem",
                  laptop: ".4rem",
                },
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
          </Grid2>
          <Grid2 item size={6}>
            <Box
              sx={{
                display: {
                  mobile: "none",
                  laptop: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
                mt: ".6rem",
              }}
            >
              <Grid2 container spacing={2}>
                <Grid2 item xs={3}>
                  <Button
                    sx={{
                      color: "#000",
                      "&:hover": {
                        color: "#39DB4A",
                      },
                      textTransform: "none",
                      fontSize: "20px",
                    }}
                    variant="text"
                  >
                    Home
                  </Button>
                </Grid2>
                <Grid2 item xs={3}>
                  <Button
                    sx={{
                      color: "#000",
                      "&:hover": {
                        color: "#39DB4A",
                      },
                      textTransform: "none",
                      fontSize: "20px",
                    }}
                    variant="text"
                    endIcon={<ArrowDropDownIcon sx={{ color: "#39DB4A" }} />}
                    onClick={handleMenuClick}
                  >
                    Menu
                  </Button>
                  <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Item 1</MenuItem>
                    <MenuItem onClick={handleClose}>Item 2</MenuItem>
                    <MenuItem onClick={handleClose}>Item 3</MenuItem>
                  </Menu>
                </Grid2>
                <Grid2 item xs={3}>
                  <Button
                    sx={{
                      color: "#000",
                      "&:hover": {
                        color: "#39DB4A",
                      },
                      textTransform: "none",
                      fontSize: "20px",
                    }}
                    variant="text"
                    endIcon={<ArrowDropDownIcon sx={{ color: "#39DB4A" }} />}
                    onClick={handleServicesClick}
                  >
                    Services
                  </Button>
                  <Menu
                    anchorEl={servicesAnchorEl}
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Service 1</MenuItem>
                    <MenuItem onClick={handleClose}>Service 2</MenuItem>
                    <MenuItem onClick={handleClose}>Service 3</MenuItem>
                  </Menu>
                </Grid2>
                <Grid2 item xs={3}>
                  <Button
                    sx={{
                      color: "#000",
                      "&:hover": {
                        color: "#39DB4A",
                      },
                      textTransform: "none",
                      fontSize: "20px",
                    }}
                    variant="text"
                  >
                    Offers
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>

          <Grid2 item size={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: {
                    mobile:'.3rem',
                  laptop: ".5rem",
                },
                position: {
                  mobile: "relative",
                  laptop: "static",
                },
                right: {
                  mobile: "53px",
                  tablet:'60px',
                  laptop:'0px'
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: {
                    mobile: "5px",
                    tablet: "10px",
                    laptop: "20px",
                  },

                }}
              >
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
                <IconButton aria-label="cart">
                  <ShoppingCartIcon />
                </IconButton>
                <Button
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: "#39DB4A",
                    borderRadius: "40px",
                    color: "#fff",
                    padding:{
                        mobile:"10px 10px",
                        laptop:"10px 20px"
                    },
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Navbar;
