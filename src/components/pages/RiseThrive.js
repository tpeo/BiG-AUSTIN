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
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom';

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}


export default function RiseThrive(props) {

  const [riseData, setRise] = useState(null);



  useEffect(() => {
    createClient.fetch(
      `*[_type == "risenthrive"]{
        backgroundImage,
        mainHeading,
        headingImage,
        paragraphTitle,
        paragraph1,
        firstTitle,
        firstImage,
        firstBlurb,
        secondTitle,
        secondImage,        
        secondBlurb,
        thirdTitle,
        thirdImage,
        thirdBlurb,
        fourthTitle,
        fourthImage,
        fourthBlurb,
        fifthTitle,
        fifthImage,
        fifthBlurb,
        title,
        subtext,
        paragraph2,
        surveyButton,
        additionalInfo
    }`
    )
      .then(
        (data) => setRise(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {riseData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(riseData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 4 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={12} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>Rise & Thrive</Typography>
                </Grid>
              </Grid>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={urlFor(riseData[0].headingImage).url()} />
              </div>

            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 35,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.blue1 }}>{riseData[0].paragraphTitle}</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{
                  fontSize: 24, fontWeight: 200, mb: 5, color: appTheme.palette.primary.space, whiteSpace: 'pre-line',
                  wordWrap: 'break-word',
                }}>{riseData[0].paragraph1.split('<br>')
                  .map((line, index) => (
                    <span key={index} style={{ display: 'block' }}>{line}</span>
                  ))}</Typography>
              </Grid>
            </Grid>
          </Grid>




          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{}}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <Typography variant="h1" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 35,
                fontWeight: 500,
                padding: 0,
                mt: 10,
                mb: 4
              }}>
                <span style={{ paddingRight: 17, color: appTheme.palette.primary.blue1 }}>What does the Program include?</span>
                <img width={45} src={require('../images/decor.png')} />
              </Typography>
            </Grid>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mt: 5 }}>



              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 400,
                        width: 350,
                        margin: "auto",
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(riseData[0].firstImage).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {riseData[0].firstTitle}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "left", fontSize: 17, mb: 1, width: "90%", color: appTheme.palette.primary.space }}
                        >
                          {riseData[0].firstBlurb}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 400,
                        width: 350,
                        margin: "auto",
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(riseData[0].secondImage).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {riseData[0].secondTitle}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "left", fontSize: 17, mb: 1, width: "90%", color: appTheme.palette.primary.space }}
                        >
                          {riseData[0].secondBlurb}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>




                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 400,
                        width: 350,
                        margin: "auto",
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(riseData[0].thirdImage).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {riseData[0].thirdTitle}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "left", fontSize: 17, mb: 1, width: "90%", color: appTheme.palette.primary.space }}
                        >
                          {riseData[0].thirdBlurb}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>



                </Grid>
              </Grid>







              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}

              >
                <Grid container sx={{ width: "80%" }}>
                  <Grid container spacing={2}>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 400,
                          width: 350,
                          margin: "auto",
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={urlFor(riseData[0].fourthImage).url()} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                          >
                            {riseData[0].fourthTitle}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "left", fontSize: 17, mb: 1, width: "90%", color: appTheme.palette.primary.space }}
                          >
                            {riseData[0].fourthBlurb}
                          </Typography>
                        </div>
                      </Card>
                    </Grid>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 400,
                          width: 350,
                          margin: "auto",
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={urlFor(riseData[0].fifthImage).url()} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                          >
                            {riseData[0].fifthTitle}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "left", fontSize: 17, mb: 1, width: "90%", color: appTheme.palette.primary.space }}
                          >
                            {riseData[0].fifthBlurb}
                          </Typography>
                        </div>
                      </Card>
                    </Grid>




                  </Grid>
                </Grid>
              </Grid>



            </Grid>
          </Grid>






          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#899B98",
            mt: 5,
          }}>
            <Typography variant="h1" sx={{ mt: 7, fontSize: 40, textAlign: "center", color: appTheme.palette.primary.white, mb: -2 }}>{riseData[0].title}</Typography>
            <Typography variant="h1" sx={{ fontSize: 23, textAlign: "center", color: appTheme.palette.primary.white }}>{riseData[0].subtext}</Typography>
            <Typography variant="h2" sx={{
              width: "60%", fontSize: 23, mt: 4, textAlign: "left", color: appTheme.palette.primary.white, whiteSpace: 'pre-line',
              wordWrap: 'break-word',
            }}>{riseData[0].paragraph2.split('<br>')
              .map((line, index) => (
                <span key={index} style={{ display: 'block' }}>{line}</span>
              ))}</Typography>

            <Link to={riseData[0].surveyButton} target="_blank" style={{ textDecoration: 'none' }}>

              <Button
                width="150"
                variant="contained"
                disableElevation
                sx={{
                  color: appTheme.palette.primary.white, fontSize: 18, fontWeight: 500,
                  backgroundColor: appTheme.palette.primary.green2, borderRadius: .9, height: 45, mr: 3,
                  '&:hover': {
                    fontWeight: 700
                  },
                  mt: 5,
                  mb: 3
                }}>
                Take Survey Now
              </Button>
            </Link>
            <Typography variant="h2" sx={{ width: "50%", mb: 9, fontWeight: 400, fontSize: 20, mt: 4, textAlign: "center", color: appTheme.palette.primary.white }}>{riseData[0].additionalInfo}</Typography>

          </Grid>





          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
