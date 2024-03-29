import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Button,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "./Pages.css"
import "../styles.css";
import { Link } from 'react-router-dom';
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

export default function Donate(props) {

  const [donateData, setDonate] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "donate"]{
        backgroundImahe,
        mainHeading,
        mainBlurb,
        donate1,
        donateImage1,
        donate2,
        donateImage2,
        donateButtonTitle,
        donateButton
    }`
    )
      .then(
        (data) => setDonate(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )



  return (
    <ThemeProvider theme={appTheme}>
      {donateData && (


        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(donateData[0].backgroundImahe).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>


          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "80%", mt: 10 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ textAlign: "center", fontSize: 40, color: appTheme.palette.primary.blue1 }}>{donateData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, width: "60%", margin: "0 auto", textAlign: "center", color: "#444444" }}><ReactMarkdown rehypePlugins={[rehypeRaw]} children={donateData[0].mainBlurb} />  </Typography>


            </Grid>
          </Grid>





          <Grid container justifyContent="center" alignItems="center" style={{ height: "auto"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
              <Grid item md={4} xs={12} sx={{ paddingLeft: 5, paddingRight: 5 }}>
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 30,
                    fontWeight: 500,
                    padding: 0,
                    mb: 4
                  }}>
                    <span style={{ paddingRight: 17 }}>Our Mission</span>
                    <img width={45} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: 20, fontWeight: 200, mb: 3
                  }}><ReactMarkdown rehypePlugins={[rehypeRaw]} children= {donateData[0].donate1} />
                   
                  </Typography>
                </Grid>
              </Grid>

              <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <img
                  className="squareImage"
                  src={urlFor(donateData[0].donateImage1).url()}
                  alt="Logo"
                  style={{
                    width: 350,
                    height: 350,
                    borderRadius: '15px',
                    boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                  }}
                />
              </Grid>
            </Grid>
          </Grid>



          <Grid container justifyContent="center" alignItems="center" style={{ paddingBottom: 50 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>


              <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', padding: 5 }}>
                <img
                  className="squareImage"
                  src={urlFor(donateData[0].donateImage2).url()}
                  alt="Logo"
                  style={{
                    width: 350,
                    height: 350,
                    borderRadius: '15px',
                    boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                  }}
                />
              </Grid>

              <Grid item md={4} xs={12} sx={{ paddingLeft: 5, paddingRight: 5 }} >
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left", }}>
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 30,

                    fontWeight: 500,
                    padding: 0,
                    mb: 4
                  }}>
                    <span style={{ paddingRight: 17 }}>Our History</span>
                    <img width={45} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontSize: 20, fontWeight: 200, mb: 3
                  }}><ReactMarkdown rehypePlugins={[rehypeRaw]} children= {donateData[0].donate2} />
          
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>









          <Grid container justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
            <Link to={donateData[0].donateButton} target="_blank" style={{ textDecoration: 'none' }}>

              <Button
                width="200"
                height="40"
                variant="contained"
                disableElevation
                sx={{
                  color: appTheme.palette.primary.white, fontSize: 25, fontWeight: 500, mt: 2,
                  backgroundColor: appTheme.palette.primary.green2, borderRadius: 1, height: 50, width: 200,
                  '&:hover': {
                    fontWeight: 700,
                    backgroundColor: appTheme.palette.primary.green3,
                    color: appTheme.palette.primary.white,
                    transition: "all 0.3s ease",
                  },
                }}>
                {donateData[0].donateButtonTitle}
              </Button>
            </Link>
          </Grid>





          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
