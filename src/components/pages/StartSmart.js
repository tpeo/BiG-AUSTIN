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

export default function StartSmart(props) {

  const [smartData, setSmart] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "startsmart"]{
        backgroundImage,
        mainHeading,
        headingImage,
        title1,
        paragraph1,
        title2,
        paragraph2,
        card1image,
        card1title,
        card1paragraph,      
        card2image,
        card2title,
        card2paragraph, 
        card3image,
        card3title,
        card3paragraph,     
        card4image,
        card4title,
        card4paragraph,   
        card5image,
        card5title,
        card5paragraph,     
        card6image,
        card6title,
        card6paragraph, 
        card7image,
        card7title,
        card7paragraph,                 
        instructorImage,
        instructorName,
        instructorTitle,
        instructorDescp,
        programDetails,
        faq1[]->{
            question,
            answer
        },
    }`
    )
      .then(
        (data) => setSmart(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {smartData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(smartData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "68%", mt: 10, mb: 4 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={12} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>{smartData[0].mainHeading}</Typography>
                </Grid>
              </Grid>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={urlFor(smartData[0].headingImage).url()} />
              </div>

            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8, mt: 4 }}>
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
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>{smartData[0].title1}</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{
                  fontSize: 24, fontWeight: 200, color: appTheme.palette.primary.space, whiteSpace: 'pre-line',
                  wordWrap: 'break-word'
                }}>{smartData[0].paragraph1.split('<br>')
                  .map((line, index) => (
                    <span key={index} style={{ display: 'block' }}>{line}</span>
                  ))}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
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
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>{smartData[0].title2}</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{
                  fontSize: 24, fontWeight: 200, mb: 5, color: appTheme.palette.primary.space, whiteSpace: 'pre-line',
                  wordWrap: 'break-word'
                }}>{smartData[0].paragraph2.split('<br>')
                  .map((line, index) => (
                    <span key={index} style={{ display: 'block' }}>{line}</span>
                  ))}</Typography>
              </Grid>
            </Grid>
          </Grid>




          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <Typography variant="h1" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 35,
                fontWeight: 500,
                padding: 0,
                mt: 5,
              }}>
                <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>The Entrepreneurial Leap </span>
                <img width={45} src={require('../images/decor.png')} />
              </Typography>
            </Grid>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mb: 10 }}>



              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(smartData[0].card1image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {smartData[0].card1title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          {smartData[0].card1paragraph}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(smartData[0].card2image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {smartData[0].card2title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          {smartData[0].card2paragraph}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(smartData[0].card3image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {smartData[0].card3title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          {smartData[0].card3paragraph}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>


                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={urlFor(smartData[0].card4image).url()} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                        >
                          {smartData[0].card4title}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          {smartData[0].card4paragraph}
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
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          margin: "auto",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={urlFor(smartData[0].card5image).url()} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                          >
                            {smartData[0].card5title}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            {smartData[0].card5paragraph}
                          </Typography>
                        </div>
                      </Card>
                    </Grid>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          margin: "auto",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={urlFor(smartData[0].card6image).url()} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                          >
                            {smartData[0].card6title}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            {smartData[0].card6paragraph}
                          </Typography>
                        </div>
                      </Card>
                    </Grid>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          margin: "auto",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={urlFor(smartData[0].card7image).url()} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, color: appTheme.palette.primary.space, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                          >
                            {smartData[0].card7title}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            {smartData[0].card7paragraph}
                          </Typography>
                        </div>
                      </Card>
                    </Grid>




                  </Grid>
                </Grid>
              </Grid>



            </Grid>
          </Grid>



          <Grid sx={{ height: "auto", mt: 2, backgroundColor: appTheme.palette.primary.blue1 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center", mt: 5, mb: 5 }}>
                <Typography variant="h1" sx={{ fontSize: 25, color: appTheme.palette.primary.white }}>Meet your Instructor</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mb: 14, paddingBottom: 7, backgroundColor: appTheme.palette.primary.blue1 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
              <Grid item md={4} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid sx={{ textAlign: "center" }}>
                  <div className="circular-image" >
                    <img
                      src={urlFor(smartData[0].instructorImage).url()}
                      alt="Logo"
                    ></img>
                  </div>
                </Grid>
                <Grid>
                  <Typography variant="h1" sx={{ textAlign: "center", fontSize: 21, fontWeight: 500, color: appTheme.palette.primary.white, mb: -1 }}>{smartData[0].instructorName}</Typography>
                  <Typography variant="h2" sx={{
                    textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white,
                    wordWrap: 'break-word',
                  }}>{smartData[0].instructorTitle.split('<br>')
                    .map((line, index) => (
                      <span key={index} style={{ display: 'block' }}>{line}</span>
                    ))}</Typography>

                </Grid>
              </Grid>


              <Grid item md={5} xs={12} >
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                  <Typography variant="h2" sx={{
                    fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white, whiteSpace: 'pre-line',
                    wordWrap: 'break-word',
                  }}>{smartData[0].instructorDescp.split('<br>')
                    .map((line, index) => (
                      <span key={index} style={{ display: 'block' }}>{line}</span>
                    ))}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>




          <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: -8
                    }}>

                        <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.blue1 }}>Ready to transform your business dreams into reality?</Typography>
                        <Typography variant="h2" sx={{ fontSize: 22, fontWeight: 500, color: appTheme.palette.primary.space, letterSpacing: 1, mb: 4, textTransform: "uppercase" }}>Don't miss out on this incredible opportunity. Secure your spot today!</Typography>
                        <Typography variant="h2" sx={{ fontSize: 22, textAlign: "center", color: appTheme.palette.primary.blue1, lineHeight: "17px",
              }}>
                 <ReactMarkdown rehypePlugins={[rehypeRaw]} children={smartData[0].programDetails} />
                {/* {smartData[0].programDetails.split('<br>')
              .map((line, index) => (
                <span key={index} style={{ display: 'block' }}>{line}</span>
              ))} */}
              </Typography>

                    </Grid>



          <Grid sx={{
            mt: 10,
            mb: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Grid container sx={{ width: "70%" }}>
              <CssBaseline />
              <Grid container sx={{}}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 35,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>FAQ</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>

              </Grid>


              {smartData[0].faq1.map((item) => (
                <Grid>
                  {console.log(item)}
                  <Typography variant="h2" sx={{ textAlign: "left", fontSize: 24, fontFamily: "DM Serif Display", fontWeight: 500, mb: 2, color: appTheme.palette.primary.space }}>{item.question}</Typography>
                  <Typography variant="h2" sx={{
                    fontSize: 24, fontWeight: 200, color: appTheme.palette.primary.space, mb: 3, whiteSpace: 'pre-line',
                    wordWrap: 'break-word',
                  }}>{item.answer.split('<br>')
                    .map((line, index) => (
                      <span key={index} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </Typography>
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
