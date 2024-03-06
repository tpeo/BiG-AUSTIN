import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Typography,
  CssBaseline,
  Card,
  Button,
  Grid,
} from "@mui/material";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(createClient)


function urlFor(source) {
  return builder.image(source)
}

export default function Services(props) {

  const [servicesData, setServices] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "services"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        headingImage,
        card1title,
        card1Image,
        card1text,
        card1link,
        card2title,
        card2Image,
        card2text,
        card2link,
        card3title,
        card3Image,
        card3text,
        card3link,
        programName,
        programText,
        programLink,
        programImage
    }`
    )
      .then(
        (data) => setServices(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {servicesData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(servicesData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "55%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{servicesData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}><ReactMarkdown rehypePlugins={[rehypeRaw]} children={servicesData[0].mainBlurb} /> </Typography>

              <Grid container justifyContent="center" alignItems="center">
                <div className="programs-image-container" style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                  <img src={urlFor(servicesData[0].headingImage).url()} />
                </div>
              </Grid>
            </Grid>
          </Grid>


          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 18, mb: 20, margin: "auto" }}
          >
            <Grid container justifyContent="center" sx={{ width: "70%" }}>
              <CssBaseline />
              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs >
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 360,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 270,
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Main content at the top */}
                    <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div className="circular-image2" style={{ textAlign: "center" }}>
                        <img width={200} height={200} src={urlFor(servicesData[0].card1Image).url()} />
                      </div>
                      <div>
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mt: 2, mb: 1 }}
                        >
                          {servicesData[0].card1title}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", color: "#555555", fontSize: 18, margin: "0 auto", padding: 1 }}
                        >
                          {servicesData[0].card1text}
                        </Typography>
                      </div>
                    </div>

                    {/* Learn More button and icon at the bottom */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                      <Link to={servicesData[0].card1link} target="_blank" style={{ textDecoration: 'none' }}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 7.5,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700,
                              backgroundColor: appTheme.palette.primary.green3,
                              color: appTheme.palette.primary.white,
                              transition: "all 0.3s ease",
                            },
                          }}>
                          Learn More
                        </Button>
                      </Link>
                      <img width={35} src={require('../images/decor.png')} />
                    </div>
                  </Card>

                </Grid>


                <Grid item xs >
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 360,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 270,
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Main content at the top */}
                    <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div className="circular-image2" style={{ textAlign: "center" }}>
                        <img width={200} height={200} src={urlFor(servicesData[0].card2Image).url()} />
                      </div>
                      <div>
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mt: 2, mb: 1 }}
                        >
                          {servicesData[0].card2title}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", color: "#555555", fontSize: 18, margin: "0 auto", padding: 0 }}
                        >
                          {servicesData[0].card2text}
                        </Typography>
                      </div>
                    </div>

                    {/* Learn More button and icon at the bottom */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                      <Link to={servicesData[0].card2link} target="_blank" style={{ textDecoration: 'none' }}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 7.5,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700,
                              backgroundColor: appTheme.palette.primary.green3,
                              color: appTheme.palette.primary.white,
                              transition: "all 0.3s ease",
                            },
                          }}>
                          Learn More
                        </Button>
                      </Link>
                      <img width={35} src={require('../images/decor.png')} />
                    </div>
                  </Card>

                </Grid>

                <Grid item xs >
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 360,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 270,
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Main content at the top */}
                    <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div className="circular-image2" style={{ textAlign: "center" }}>
                        <img width={200} height={200} src={urlFor(servicesData[0].card3Image).url()} />
                      </div>
                      <div>
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mt: 2, mb: 1 }}
                        >
                          {servicesData[0].card3title}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", color: "#555555", fontSize: 18, margin: "0 auto", padding: 0 }}
                        >
                          {servicesData[0].card3text}
                        </Typography>
                      </div>
                    </div>

                    {/* Learn More button and icon at the bottom */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                      <Link to={servicesData[0].card3link} target="_blank" style={{ textDecoration: 'none' }}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 7.5,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700,
                              backgroundColor: appTheme.palette.primary.green3,
                              color: appTheme.palette.primary.white,
                              transition: "all 0.3s ease",
                            },
                          }}>
                          Learn More
                        </Button>
                      </Link>
                      <img width={35} src={require('../images/decor.png')} />
                    </div>
                  </Card>

                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 10, mb: 10 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "90%" }}>
              <Grid item md={4} xs={12} >
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left", padding: 5 }}>
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 30,
                    fontWeight: 500,
                    padding: 0,
                    mb: 4
                  }}>
                    <span style={{ paddingRight: 17, fontSize: 32, color: appTheme.palette.primary.green1 }}>{servicesData[0].programName}</span>
                    <img width={40} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography
                    variant="h2"
                    className="bulletpoints"
                    sx={{
                      fontSize: 22,
                      fontWeight: 200,
                      mb: 3,
                      color: appTheme.palette.primary.black,
                    }}
                  >
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={servicesData[0].programText} />
                  </Typography>
                  <Link to={servicesData[0].programLink} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button
                      width="150"
                      height="20"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                        backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                        '&:hover': {
                          fontWeight: 700,
                          backgroundColor: appTheme.palette.primary.green3,
                          color: appTheme.palette.primary.white,
                          transition: "all 0.3s ease",
                        },
                      }}>
                      Learn More
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              <Grid item md={4} xs={12} sx={{ display: 'flex', padding: 3, justifyContent: 'center', alignItems: 'center' }}>
                <img className="squareImage"
                  src={urlFor(servicesData[0].programImage).url()}
                  alt="Logo"
                  style={{
                    top: 0,
                    left: 0,
                    width: 350,
                    height: 350,
                    margin: "auto",
                    borderRadius: '15px',
                    boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                  }}
                ></img>
              </Grid>
            </Grid>
          </Grid>

          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
