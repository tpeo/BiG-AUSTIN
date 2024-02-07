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
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}


// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <div className="prev-arrow" onClick={onClick}>
    <img src={ArrowLeftImage} alt="Previous" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next-arrow" onClick={onClick}>
    <img src={ArrowRightImage} alt="Next" />
  </div>
);

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow2 ${props.left ? "arrow2--left" : "arrow2--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}




export default function About(props) {

  const [impactData, setImpact] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })



  useEffect(() => {
    createClient.fetch(
      `*[_type == "impact"]{
      mainHeading,
      backgroundImage,
      mainBlurb,
      stat1title,
      stat1subheading,
      stat1number,
      stat2title,
      stat2subheading,
      stat2number,
      stat3title,
      stat3subheading,
      stat3number,
      stat4title,
      stat4subheading,
      stat4number,
      clientstories[]{
        clientstories-> {
          name,
          blurb,
          image,
          videoURL
        }
      },
    }`
    )
      .then(
        (data) => setImpact(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {impactData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(impactData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid sx={{ height: "auto", mt: 7}}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                <Typography variant="h1" sx={{ fontSize: 40, mb: 5 }}>Impact We Create</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{  mb: 13 }}>
            <Grid container justifyContent="center" sx={{ width: "65%" }}>


              <Grid container spacing={2} sx={{}}>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/helpicon.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, fontSize: 28, mb: 1, letterSpacing: 2, padding: 0, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat1number}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 17, mt: 0, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat1subheading}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/volunteers.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat2number}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 17, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat2subheading}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/peopleSaved.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat3number}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 17, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat3subheading}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      flexDirection: "column",
                      margin: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/country.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {impactData[0].stat4number}
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white, textAlign:"center" }}
                      >
                        {impactData[0].stat4subheading}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>





          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.platinum, textAlign: "center", color: "white"}}>
            <div style={{ paddingTop: "80px" }}>
              <div className="arrow-wrapper">
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>

              {loaded && instanceRef.current && (
                <div className="dots1">
                  {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot1" + (currentSlide === idx ? " active" : "")}
                      ></button>
                    )
                  })}
                </div>
              )}
            </div>


            <Typography variant="h2" style={{ color: appTheme.palette.primary.green1, paddingTop: 50, fontSize: "30px", textAlign: "left", width: "60%", margin: "0 auto", paddingBottom: 20, fontWeight: 500 }}>CLIENT SUCCESS STORIES</Typography>
            <div className="navigation-wrapper">

              <div ref={sliderRef} className="keen-slider">
                {impactData[0].clientstories.map((item) => (
                  <div className="keen-slider__slide number-slide1">
                    {/* {console.log("impact", item.clientstories)} */}
                    <Grid container justifyContent="center" alignItems="center" sx={{ width: "72%", paddingTop: "40px", margin: "0 auto", mb: 10, backgroundColor: appTheme.palette.primary.platinum }}>
                      <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{ width: "100%" }}>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                          <Grid sx={{ textAlign: 'center' }}>
                            <Typography variant="h1" sx={{ textAlign: "left", padding: "0px", paddingBottom: "20px", fontSize: 30, fontWeight: 500, color: appTheme.palette.primary.blue1 }}>{item.clientstories.name}</Typography>
                            <Typography variant="h2" sx={{ textAlign: "left", fontSize: 20, fontWeight: 200, color: appTheme.palette.primary.space, whiteSpace: 'pre-line', wordWrap: 'break-word' }}>
                              <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item.clientstories.blurb} />
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ textAlign: "center" }}>
                            <div className="square-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <img
                                src={urlFor(item.clientstories.image).url()}
                                alt="Logo"
                                style={{ maxWidth: '100%', height: 'auto' }}
                              />
                            </div>
                          </Grid>
                        </Grid>

                        {/* YouTube Video */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: "50px" }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/N_prLS-aTqU?si=cjiCqqsFF9fPy8S_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
