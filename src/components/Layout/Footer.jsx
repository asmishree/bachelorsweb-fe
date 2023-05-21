import { Box } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo-white.png";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import "./footer.css"

function Footer() {
  return (
    <Box className="footer">
      <Box>
        <Box className="footer-grid">
          <Box className="footer-grid1">
            <Box>
              <Box className="logo">
                <img src={Logo} alt="logo" />
                <Box px={1}><h1>BeachelorWeb</h1></Box>
              </Box>
            </Box>
            <Box>
              <h5>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h5>
            </Box>
          </Box>
          <Box className="footer-grid2">
            <Box>
            <h1>Useful Links</h1>
            <p><KeyboardDoubleArrowRightIcon/> About Us</p>
            <p><KeyboardDoubleArrowRightIcon/> Contact Us</p>
            <p><KeyboardDoubleArrowRightIcon/> Privacy Policy</p>
            <p><KeyboardDoubleArrowRightIcon/> Terms & Conditions</p>
            </Box>
          </Box>

          <Box className="footer-grid3">
            <Box>
            <h1>Contact info</h1>
            <p><LocationOnIcon sx={ {mr:"5px"}}/> 247776 Shamli U.P</p>
            <p><PhoneIcon sx={ {mr:"5px"}}/> + 01 234 567 88</p>
            <p><PhoneIcon sx={ {mr:"5px"}}/> + 01 234 567 88</p>
            <p><MailIcon sx={ {mr:"5px"}}/> info@example.com</p>
            </Box>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"end"}
          height={"10vh"}
          px={2}
        >
          <h3>
            Copyright 2023 BachelorsWeb | Developed By Sagar Nirwal. All Rights
            Reserved
          </h3>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
