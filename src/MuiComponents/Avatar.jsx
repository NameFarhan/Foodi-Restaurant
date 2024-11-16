import * as React from "react";
import Avatar from "@mui/material/Avatar";
import testimonial1 from "../Images/testimonial2.webp";
import testimonial2 from "../Images/testimonial3.webp";
import testimonial3 from "../Images/testimonial4.webp";

export default function TestimonialAvatars() {
  return (
    <>
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt="Remy Sharp"
        src={testimonial1}
      />
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt="Travis Howard"
        src={testimonial2}
      />
      <Avatar
        sx={{ width: 56, height: 56 }}
        alt="Cindy Baker"
        src={testimonial3}
      />
    </>
  );
}
