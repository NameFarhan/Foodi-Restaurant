import React from "react";
import Slider from "react-slick";
import menu1 from "../Images/menu1.webp";
import menu2 from "../Images/menu2.webp";
import menu3 from "../Images/menu3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function TestSlider() {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Ensure this is enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      Image: menu1,
      title: "Fattoush salad",
      description: "Description of the item",
      price: "24.00",
      rating: "4.9",
    },
    {
      id: 2,
      Image: menu2,
      title: "Title Of the product",
      description: "Description of the item",
      price: "26.00",
      rating: "4.6",
    },
    {
      id: 3,
      Image: menu3,
      title: "Egg vegi salad",
      description: "Description of the item",
      price: "23.00",
      rating: "4.5",
    },
  ];

  return (
    <Box
      sx={{ width: "80%", height: "100%", margin: "0 auto" }}
      className="card-slider"
    >
      <Slider sx={{padding:'0 10px'}} {...settings}>
        {cards.map((card) => (
          <Box
            sx={{
              borderRadius: "40px",
              padding: {
                mobile: "30px 40px",
                desktop: "50px 40px",
              },
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
              bgcolor: "#fff",
              border: "none",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: {
                mobile: "100%",
                tablet: "100%",
                laptop: "400px",
                desktop: "446px",
              },
              height: {
                mobile: "373px",
                tablet: "400px",
                laptop: "450px",
                desktop: "640px",
              },
            }}
            key={card.id}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "",
                }}
                alt="Menu1 image"
                src={card.Image}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "700",
                  fontSize: {
                    mobile: "20px",
                    tablet: "24px",
                    laptop: "26px",
                    desktop: "30px",
                  },
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  color: "#555555",
                  fontWeight: "700",
                  fontSize: {
                    mobile: "12px",
                    tablet: "15px",
                    laptop: "17px",
                    desktop: "20px",
                  },
                }}
              >
                {card.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      mobile: "12px",
                      tablet: "15px",
                      laptop: "17px",
                      desktop: "20px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FF6868",
                      fontSize: {
                        mobile: "16px",
                        tablet: "18px",
                        laptop: "20px",
                        desktop: "24px",
                      },
                      display: "inline-block",
                      mr: ".3rem",
                    }}
                  >
                    $
                  </Typography>
                  {card.price}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    color: "#454545",
                    fontSize: {
                      mobile: "16px",
                      tablet: "18px",
                      laptop: "20px",
                      desktop: "24px",
                    },
                  }}
                >
                  {card.rating}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default TestSlider;
