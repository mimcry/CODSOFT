import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import team2 from "./Images/team2.jpg";
import work from "./Images/work.jpg";
import doller from "./Images/doller.jpg";

import man from "./Images/man.jpg";
import CampaignIcon from "@mui/icons-material/Campaign";
const Homepage = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography
          sx={{
            background: `linear-gradient(#212245b2,#212245b2),url("https://img.freepik.com/free-photo/smiling-coworkers-checking-business-documents-meeting_1262-15204.jpg?t=st=1710478226~exp=1710481826~hmac=b8ab061b445c735cbc77ba1592f2e275e29d4de7fa037ea8f4639ce5920b2988&w=996")`,

            backgroundRepeat: "no-repeat",
            padding: "80px 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            color: "white",
            fontSize: "1.8rem",
          }}
        >
          <Box
            sx={{
              borderLeft: "5px solid ",
              marginLeft: 25,
              borderRadius: 1,
              borderImage: "linear-gradient(to bottom ,#e38d2b,#f2429a)1",
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", padding: 2 }}>
              WE ARE CREATIVE
            </Typography>
            <Typography sx={{ fontSize: "2rem", paddingLeft: 2 }}>
              CREATIVE DEGITAL AGENCY
            </Typography>
            <Typography sx={{ paddingLeft: 0, padding: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              voluptatibus unde dolore quod nemo qui, amet libero placeat alias
              recusandae.
            </Typography>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Button
                sx={{
                  background: "linear-gradient(to right ,#e38d2b,#f2429a)",
                  color: "white",
                  borderRadius: 10,
                  padding: 1,
                }}
              >
                Read More
              </Button>
              <Button
                sx={{
                  backgroundClip: "transparent",
                  color: "white",
                  borderRadius: 10,
                  padding: 1,
                  border: "2px solid white",
                  marginLeft: 3,
                }}
              >
                Request a consule
              </Button>
            </Box>
          </Box>
        </Typography>
        <Box sx={{ background: "linear-gradient(to right ,#e38d2b,#f2429a)" }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item lg={4} md={4} sm={6} xs={12} mb={5}>
                {" "}
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <RocketLaunchIcon
                    sx={{
                      border: "3px solid white",
                      borderRadius: 60,
                      padding: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      mt: 1,
                      paddingLeft: 5,
                    }}
                  >
                    LAUNCH BUSINESS
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", mt: 1 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>{" "}
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                {" "}
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <HeadphonesIcon
                    sx={{
                      border: "3px solid white",
                      borderRadius: 60,
                      padding: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      mt: 1,
                      paddingLeft: 5,
                    }}
                  >
                    ONLINE SUPPORT TEAM
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", mt: 1 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>{" "}
              </Grid>{" "}
              <Grid item lg={4} md={4} sm={6} xs={12}>
                {" "}
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      border: "3px solid white",
                      borderRadius: 60,
                      padding: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      mt: 1,
                      paddingLeft: 5,
                    }}
                  >
                    TIME MANAGEMENT
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", mt: 1 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>{" "}
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container>
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "2rem",
                mt: 3,
                fontWeight: "bold",
                mb: 5,
              }}
            >
              <span
                style={{
                  borderBottom: "5px solid ",
                  borderImage: "linear-gradient(to right,#e38d2b,#f2429a)1",
                }}
              >
                {" "}
                About
              </span>{" "}
              us
            </Typography>
            <Grid spacing={0} container>
              <Grid lg={6} xs={12} md={6} sm={12}>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    fontFamily: "",
                  }}
                >
                  15 years, we passionate about achieving better result for our
                  clients{" "}
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  dolore officiis mollitia quas sapiente quos temporibus
                  architecto laboriosam maxime! Voluptatum suscipit nemo
                  ratione, recusandae velit ipsam dolore. Aspernatur, minus
                  earum.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odio dolore officiis mollitia quas sapiente quos
                  temporibus architecto laboriosam maxime! Voluptatum suscipit
                  nemo ratione, recusandae velit ipsam dolore. Aspernatur, minus
                  earum.
                </Typography>
                <Button
                  sx={{
                    border: "2px solid white",
                    background: "linear-gradient(to right,#e38d2b,#f2429a)",
                    color: "white",
                    borderRadius: 15,
                    padding: 1,
                    mt: 2,
                  }}
                >
                  Read More
                </Button>
              </Grid>
              <Grid lg={6} xs={12} md={6} sm={12}>
                <Box
                  component="img"
                  src={man}
                  sx={{
                    width: 450,
                    ml: 10,
                    borderBottom: "5px solid ",borderRight:"5px solid ",borderWidthRight:"10%",
                    borderImage: "linear-gradient(to right,#e38d2b,#f2429a)2",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box sx={{}}>
          <Container>
            <Typography
              sx={{
                color: "black",
                fontSize: "2rem",
                mt: 8,
                fontWeight: "bold",
                mb: 5,
              }}
            >
              <span
                style={{
                  borderBottom: "5px solid ",
                  borderImage: "linear-gradient(to right,#e38d2b,#f2429a)1",
                }}
              >
                {" "}
                Our
              </span>{" "}
              Service
            </Typography>
            <Grid container spacing={1}>
              <Grid item lg={4} sm={6} md={4} xs={12}>
                {" "}
                <Box sx={{}}>
                  {" "}
                  <Box
                    component="img"
                    src={team2}
                    sx={{ width: 300, position: "absolute", zIndex: 1 }}
                  />{" "}
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "white",
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,
                      width: "17.2%",
                      position: "absolute",
                      zIndex: 1,
                      mt: 35,
                      ml: 5,
                      boxShadow: 24,
                    }}
                  >
                    <CampaignIcon
                      sx={{
                        borderRadius: 360,
                        background: "linear-gradient(to right,#e38d2b,#f2429a)",
                        padding: 2,
                      }}
                    />{" "}
                    <Typography sx={{ padding: 2 }}>USER EXPIRENCE</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} sm={6} md={4} xs={12}>
                {" "}
                <Box sx={{}}>
                  {" "}
                  <Box
                    component="img"
                    src={work}
                    sx={{
                      width: 310,
                      position: "absolute",
                      zIndex: 1,
                      height: 300,
                    }}
                  />{" "}
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "white",
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,
                      width: "18.2%",
                      position: "absolute",
                      zIndex: 1,
                      mt: 35,
                      ml: 5,
                      boxShadow: 24,
                    }}
                  >
                    <CampaignIcon
                      sx={{
                        borderRadius: 360,
                        background: "linear-gradient(to right,#e38d2b,#f2429a)",
                        padding: 2,
                      }}
                    />{" "}
                    <Typography sx={{ padding: 2 }}>
                      CREATIVE EXPIRENCE
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} sm={6} md={4} xs={12}>
                {" "}
                <Box sx={{}}>
                  {" "}
                  <Box
                    component="img"
                    src={doller}
                    sx={{
                      width: 300,
                      height: 300,
                      position: "absolute",
                      zIndex: 1,
                    }}
                  />{" "}
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "white",
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,
                      width: "17.2%",
                      position: "absolute",
                      zIndex: 1,
                      mt: 35,
                      ml: 5,
                      boxShadow: 24,
                    }}
                  >
                    <CampaignIcon
                      sx={{
                        borderRadius: 360,
                        background: "linear-gradient(to right,#e38d2b,#f2429a)",
                        padding: 2,
                      }}
                    />{" "}
                    <Typography sx={{ padding: 2 }}>RETINA READY</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Homepage;
