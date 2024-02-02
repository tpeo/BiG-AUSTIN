import React, { useState, useEffect } from "react";
import {
  Typography,
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
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
    return builder.image(source)
}

export default function Consulting(props) {

  const [educData, setEduc] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "education"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        boldText1,
        paragraph1,
        boldText2,
        paragraph2,
        buttonLink,
        skills[]{
          skills-> {
            title,
            description,
            image
          }
        },
    }`
    )
      .then(
        (data) => setEduc(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )



  return (
    <ThemeProvider theme={appTheme}>
      {educData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(educData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <Typography variant="h1" sx={{ fontSize: 40, mb: 3, mt: 5, color: appTheme.palette.primary.blue1 }}>{educData[0].mainHeading}</Typography>
            <Grid sx={{ height: "auto", width: "48%", mb: 1 }}>
              <Typography variant="h2" sx={{ fontSize: 18, textAlign: "center", color: appTheme.palette.primary.space }}>{educData[0].mainBlurb}</Typography>
            </Grid>
          </Grid>


          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appTheme.palette.primary.blue1,
            mt: 5
          }}>

            <Grid sx={{ height: "auto", width: "45%", paddingTop: 8 }}>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 400, textAlign: "center", color: appTheme.palette.primary.white, mb: 2 }}>{educData[0].boldText1}</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white, mb: 4 }}>{educData[0].paragraph1}</Typography>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 500, textAlign: "center", color: appTheme.palette.primary.white, mb: 2 }}>{educData[0].boldText2}</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}><ReactMarkdown rehypePlugins={[rehypeRaw]} children={educData[0].paragraph2}/> </Typography>
            </Grid>

            <Grid sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 30,
                fontWeight: 500,
                padding: 0,
                mt: 5,
                mb: 8
              }}>
              <Link to={educData[0].buttonLink} target="_blank" style={{ textDecoration: 'none' }}>
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
                    }}>
                    Upcoming Sessions
                  </Button>
                </Link>
                <img width={40} src={require('../images/decor.png')} />
              </Grid>
          </Grid>


          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            margin: "auto",
            mt: 12,
            mb: 12
          }}>
            <Grid container spacing={5}>
            {educData[0].skills.map((item) => (
              <Grid item xs>
                {/* {console.log(item.skills)} */}
              <Card
                sx={{
                  backgroundColor: appTheme.palette.primary.white,
                  width: 250,
                  borderRadius: 1,
                  margin:"auto",
                  display: "flex",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  flexDirection: "column",
                }}
              >
                <div style={{ "margin-bottom": "10px"}}>
                  <img height={20} src={urlFor(item.skills.image).url()} />
                </div>

                <div style={{ "padding": "10px"}}>
                <div>
                  <Typography
                    variant="h1"
                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 2 }}
                  >
                    {item.skills.title}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="h2"
                    sx={{fontSize: 17, mb: 1,  width: 220 }}
                  >
                    {item.skills.description}
                  </Typography>
                </div>
                </div>

                <Grid item sx={{ textAlign: 'right', paddingRight: 0, mt: 1}}>
                    <img width={35} src={require('../images/decor.png')} />
                </Grid>
              </Card>
            </Grid>
            ))}
            </Grid>
          </Grid>

          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
