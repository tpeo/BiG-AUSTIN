import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Card,
  Button,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import { Link } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}


export default function Consulting(props) {

  const [consultingData, setConsulting] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "consulting"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        headingImage,
        headingBlurb,
        buttonLink,
        card1title,
        card1image,
        card1text,
        card2title,
        card2image,
        card2text,
        card3title,
        card3image,
        card3text
    }`
    )
      .then(
        (data) => setConsulting(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {consultingData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(consultingData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{consultingData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>{consultingData[0].mainBlurb}</Typography>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={urlFor(consultingData[0].headingImage).url()} />
              </div>

            </Grid>
          </Grid>



          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "100%", mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 25, color: appTheme.palette.primary.green1 }}>{consultingData[0].headingBlurb}</Typography>
                </Grid>
              </Grid>


              <Grid container justifyContent="center" alignItems="center">
                <Link to={consultingData[0].buttonLink} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button
                    width="150"
                    height="20"
                    variant="contained"
                    disableElevation
                    sx={{
                      color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                      backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35, mt: 2,
                      '&:hover': {
                        fontWeight: 700,
                        backgroundColor: appTheme.palette.primary.green3,
                        color: appTheme.palette.primary.white,
                        transition: "all 0.3s ease",
                      },
                    }}>
                    Schedule an Appointment
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>








          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 18, paddingBottom: 10, margin: "auto" }}
          >
            <Grid container justifyContent="center" sx={{ width: "65%" }}>
              <Grid container direction="row" sx={{ mb: 5 }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 30,
                  fontWeight: 500,
                  padding: 0,
                  mb: 2
                }}>
                  <span style={{ paddingRight: 17 }}>Services</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
              </Grid>
              <CssBaseline />


              <Grid container spacing={2}>

                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 420,
                      width: 250,
                      boxShadow: "none",
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >

                    <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img src={urlFor(consultingData[0].card1image).url()} />
                    </div>

                    <div style={{ "padding-top": "8px" }}>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        {consultingData[0].card1title}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                      >
                        {consultingData[0].card1text}
                      </Typography>
                    </div>


                  </Card>
                </Grid>




                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 420,
                      width: 250,
                      boxShadow: "none",
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >

                    <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img src={urlFor(consultingData[0].card2image).url()} />
                    </div>

                    <div style={{ "padding-top": "8px" }}>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        {consultingData[0].card2title}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                      >
                        {consultingData[0].card2text}
                      </Typography>
                    </div>


                  </Card>
                </Grid>




                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 420,
                      width: 250,
                      boxShadow: "none",
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >

                    <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img src={urlFor(consultingData[0].card3image).url()} />
                    </div>

                    <div style={{ "padding-top": "8px" }}>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        {consultingData[0].card3title}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                      >
                        {consultingData[0].card3text}
                      </Typography>
                    </div>


                  </Card>
                </Grid>


              </Grid>
            </Grid>
          </Grid>






          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
