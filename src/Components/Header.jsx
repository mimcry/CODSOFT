import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
const Header = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: "linear-gradient(to right ,#e38d2b,#f2429a)",
          display: "flex",
        }}
      >
        <Box sx={{ marginLeft: "auto", paddingRight: 10 }}>
          {" "}
          <TwitterIcon
            sx={{
              color: "white",
              borderRight: "2px solid white",
              padding: 2,
              borderLeft: "2px solid white",
            }}
          />
          <InstagramIcon
            sx={{ color: "white", borderRight: "2px solid white", padding: 2 }}
          />
          <FacebookIcon
            sx={{ color: "white", borderRight: "2px solid white", padding: 2 }}
          />
          <YoutubeIcon
            sx={{ color: "white", borderRight: "2px solid white", padding: 2 }}
          />
          <LinkedinIcon
            sx={{ color: "white", borderRight: "2px solid white", padding: 2 }}
          />
          <PinterestIcon
            sx={{ color: "white", borderRight: "2px solid white", padding: 2 }}
          />
        </Box>
        <Box sx={{ marginLeft: "auto", paddingRight: 10 }}>
          <Typography
            sx={{
              marginLeft: "auto",
              padding: 2,
              display: "flex",
              color: "white",
            }}
          >
            <CallIcon sx={{ color: "white", width: 20 }} />{" "}
            <Typography
              sx={{
                color: "white",
                borderRight: "2px solid white",
                paddingRight: 2,
              }}
            >
              +22-345-7890
            </Typography>
            <MailIcon
              sx={{ color: "white", paddingLeft: 4, paddingRight: 2 }}
            />
            demolanding@gmail.com
          </Typography>
        </Box>
        <Box sx={{ padding: 1, marginLeft: "auto", paddingRight: 10 }}>
          <Button
            sx={{
              bgcolor: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: 10,
            }}
          >
            Request contact
          </Button>
        </Box>
      </Box>
      <Box>
        <Container>
          {" "}
          <Box sx={{display:"flex"}}><Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          <NewspaperIcon sx={{width:30}} />   Landing Page
          </Typography>
          <Typography sx={{paddingLeft:20,fontWeight:"bold",fontSize:"1.3rem",mt:1.4}}>Home</Typography>
          <Typography  sx={{paddingLeft:5,fontWeight:"bold",fontSize:"1.3rem",mt:1.4}}>Blog</Typography>
          <Typography  sx={{paddingLeft:5,fontWeight:"bold",fontSize:"1.3rem",mt:1.4}}>Page</Typography>
          <Typography  sx={{paddingLeft:5,fontWeight:"bold",fontSize:"1.3rem",mt:1.4}}>Services</Typography>
          <Typography  sx={{paddingLeft:5,fontWeight:"bold",fontSize:"1.3rem",mt:1.4}}>Contact</Typography>
          <Typography sx={{backgroundColor:"#e38d2b",marginLeft:2,padding:2,fontWeight:"bold"}}>Buy Now</Typography>
          <Typography sx={{backgroundColor:"black",marginLeft:10,padding:2}}><SearchIcon sx={{color:"white"}} /></Typography>
          </Box>
          
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Header;
