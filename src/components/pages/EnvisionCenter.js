import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Card,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}

export default function EnvisionCenter(props) {

  const [envisionData, setEnvision] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "envision"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        headingVideo,
        videoCaption,
        visionStatement,
        missionStatement,
        card1title,
        card1image,
        card1text,   
        card2title,
        card2image,
        card2text,  
        card3title,
        card3image,
        card3text, 
        card4title,
        card4image,
        card4text,         
    }`
    )
      .then(
        (data) => setEnvision(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {envisionData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(envisionData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "70%", mt: 10, mb: 4 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{envisionData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, margin: "0 auto", width: "65%", textAlign: "center", mb: 3 }}>{envisionData[0].mainBlurb}</Typography>


              <div className="programs-image-container" style={{ width: "50%", display: "flex", margin: "0 auto", justifyContent: "center" }}>
                {/* <img src={urlFor(aspireData[0].headerImage).url()} /> */}
                <iframe style={{ borderRadius: '10px' }} width="100%" height="315" src={envisionData[0].headingVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
              <Grid container justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h2" sx={{ fontSize: 22, color: appTheme.palette.primary.green1, textAlign: "center" }}>{envisionData[0].videoCaption}</Typography>
                </Grid>
              </Grid>




              <Grid container justifyContent="center" alignItems="center">
                <Grid sx={{ mr: 10, width: "20%" }}>
                  <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.blue1 }}>Vision Statement</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>{envisionData[0].visionStatement}</Typography>
                </Grid>
                <Grid sx={{ width: "20%" }}>
                  <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.blue1 }}>Mission Statement</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>{envisionData[0].missionStatement}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid container
            justifyContent="center"
            alignItems="center">
            <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 500, letterSpacing: 1, mb: 6 }}>4 PILLARS</Typography>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mb: 20 }}>
              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />


                <Grid container spacing={5}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 420,
                        width: 250,
                        margin: "auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 3
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={urlFor(envisionData[0].card1image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card1title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card1text}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 420,
                        width: 250,
                        margin: "auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 3
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={urlFor(envisionData[0].card2image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card2title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card2text}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 420,
                        width: 250,
                        margin: "auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 3
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={urlFor(envisionData[0].card3image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card3title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card3text}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 420,
                        width: 250,
                        margin: "auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 3
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={urlFor(envisionData[0].card4image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card4title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          {envisionData[0].card4text}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>



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
