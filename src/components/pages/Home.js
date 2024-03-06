import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Card,
  Button,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
// import NavBar from "../navBar/navBar.js";
import NavBar from "../navBar/navBar.js";
import { Link } from 'react-router-dom';
import "./Pages.css"
import { ThemeProvider } from "@mui/material/styles";
// import Carousel from "react-material-ui-carousel";
import "../styles.css";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'
import CookieConsent from "react-cookie-consent";
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image
import ReactMarkdown from 'react-markdown';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import rehypeRaw from "rehype-raw";


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
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
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

function Arrow1(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
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


const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}



export default function Home(props) {

  const [homeData, setHome] = useState(null);


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


  const [currentSlide1, setCurrentSlide1] = useState(0)
  const [loaded1, setLoaded1] = useState(false)
  const [sliderRef1, instanceRef1] = useKeenSlider({
    initial: 0,
    // slides: {
    //   perView: 4,
    // },
    slideChanged(slider) {
      setCurrentSlide1(slider.track.details.rel)
    },
    created() {
      setLoaded1(true)
    },
  })



  useEffect(() => {
    createClient.fetch(
      `*[_type == "home"]{
      mainHeading,
      mainBlurb,
      mainButton,
      mainButtonLink,
      backgroundImage,
      about,
      stat1title,
      stat1number,
      stat2title,
      stat2number,
      stat3title,
      stat3number,
      stat4title,
      stat4number,
      waysWeHelp,
      column1image,
      column1title,
      column1blurb,
      column1link,
      column2image,
      column2title,
      column2blurb,
      column2link,
      column3image,
      column3title,
      column3blurb,
      column3link,
      testimonials1[]->{
        name,
        description,
        image,
        blurb
      },
      partners1[]->{
        partnersImages
      },
      partnertitle,
      partnerlink,
      scheduleappbutton,
      scheduleapp
    }`
    )
      .then(
        (data) => setHome(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )



  return (
    <ThemeProvider theme={appTheme}>
      {homeData && (



        <div style={{ height: "100vh" }}>
          <NavBar />

          <Grid component="main" sx={{ paddingBottom: 15, backgroundImage: `url(${urlFor(homeData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <Grid container justifyContent="center" sx={{ paddingTop: "60px" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ mt: 15, textAlign: "center", width: 800 }}>
                <Typography variant="h1" sx={{ fontSize: 50, fontWeight: 500, lineHeight: 1, color: appTheme.palette.primary.white }}>{homeData[0].mainHeading}</Typography>
                <Typography variant="h2" sx={{ font: 'League Spartan', fontSize: 30, fontWeight: 500, color: appTheme.palette.primary.white }}>  <ReactMarkdown rehypePlugins={[rehypeRaw]} children={homeData[0].mainBlurb} /> </Typography>
              </Grid>

              <Grid container direction="column" alignItems="center">
                <Button
                  width="200"
                  variant="contained"
                  href={homeData[0].mainButtonLink}
                  target="_blank"
                  disableElevation
                  sx={{
                    mt: 6, color: appTheme.palette.primary.white, backgroundColor: appTheme.palette.primary.green2, fontSize: 20, mb: 2, fontWeight: 500,
                    '&:hover': {
                      fontWeight: 700,
                      backgroundColor: appTheme.palette.primary.green3,
                      color: appTheme.palette.primary.white,
                      transition: "all 0.3s ease",
                    },
                  }}>
                  {homeData[0].mainButton}
                </Button>
              </Grid>
            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mt: 13, mb: 18 }}>
            <Grid container justifyContent="center" sx={{ width: "65%" }}>
              <Grid container direction="row" sx={{ mb: 5 }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 2
                }}>
                  <span style={{ paddingRight: 17 }}>About Us</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 200 }}><ReactMarkdown rehypePlugins={[rehypeRaw]} children={homeData[0].about} /> </Typography>
              </Grid>

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
                        {homeData[0].stat1number}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mt: 0, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].stat1title}
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
                        {homeData[0].stat2number}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].stat2title}
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
                        {homeData[0].stat3number}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].stat3title}
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
                        {homeData[0].stat4number}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].stat4title}
                      </Typography>
                    </div>
                  </Card>
                </Grid>
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
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 1
                }}>
                  <span style={{ paddingRight: 17 }}>Ways We Help</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div className="circular-image2" style={{ "textAlign": "center" }}>
                    <img width={200} src={urlFor(homeData[0].column1image).url()} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      {homeData[0].column1title}
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >
                      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={homeData[0].column1blurb} />
                    </Typography>
                  </div>
                  {/* Adjust the button width */}
                  <Link to={homeData[0].column1link} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button
                      width="100%"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: appTheme.palette.primary.white,
                        fontSize: 18,
                        fontWeight: 500,
                        height: 40,
                        mt: 3,
                        backgroundColor: appTheme.palette.primary.green2,
                        '&:hover': {
                          fontWeight: 700,
                          backgroundColor: appTheme.palette.primary.green3,
                          color: appTheme.palette.primary.white,
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div className="circular-image2" style={{ "textAlign": "center" }}>
                    <img width={200} src={urlFor(homeData[0].column2image).url()} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      {homeData[0].column2title}
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >

                      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={homeData[0].column2blurb} />

                    </Typography>
                  </div>
                  {/* Adjust the button width */}
                  <Link to={homeData[0].column2link} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button
                      width="100%"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: appTheme.palette.primary.white,
                        fontSize: 18,
                        fontWeight: 500,
                        height: 40,
                        mt: 3,
                        backgroundColor: appTheme.palette.primary.green2,
                        '&:hover': {
                          fontWeight: 700,
                          backgroundColor: appTheme.palette.primary.green3,
                          color: appTheme.palette.primary.white,
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div className="circular-image2" style={{ "textAlign": "center" }}>
                    <img width={200} src={urlFor(homeData[0].column3image).url()} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      {homeData[0].column3title}
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >
                      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={homeData[0].column3blurb} />

                    </Typography>
                  </div>
                  {/* Adjust the button width */}
                  <Link to={homeData[0].column3link} target="_blank" style={{ textDecoration: 'none' }}>
                    <Button
                      width="100%"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: appTheme.palette.primary.white,
                        fontSize: 18,
                        fontWeight: 500,
                        height: 40,
                        mt: 3,
                        backgroundColor: appTheme.palette.primary.green2,
                        '&:hover': {
                          fontWeight: 700,
                          backgroundColor: appTheme.palette.primary.green3,
                          color: appTheme.palette.primary.white,
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>




              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" sx={{ mb: 15 }}>
            <Link to={homeData[0].scheduleapp} target="_blank" style={{ textDecoration: 'none' }}>
              <Button
                width="200"
                variant="contained"
                disableElevation
                sx={{
                  mt: 1.5, height: 60, backgroundColor: appTheme.palette.primary.green2, color: appTheme.palette.primary.white, fontSize: 20, mb: 2, fontWeight: 500,
                  '&:hover': {
                    fontWeight: 700,
                    backgroundColor: appTheme.palette.primary.green3,
                    color: appTheme.palette.primary.white,
                    transition: "all 0.3s ease",
                  },
                }}>
                {homeData[0].scheduleappbutton}
              </Button>
            </Link>
          </Grid>





          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.blue1, textAlign: "center", color: "white", marginTop: 100, marginBottom: 90 }}>
            <h2 style={{ color: "white", paddingTop: 50, paddingBottom: 20 }}>Testimonials</h2>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                {homeData[0].testimonials1.map((item) => (
                  <div className="keen-slider__slide number-slide1">
                    {console.log("home", item.name)}
                    <Grid container justifyContent="center" alignItems="center" sx={{ mb: 10, backgroundColor: appTheme.palette.primary.blue1 }}>
                      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
                        <Grid item md={4} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Grid sx={{ textAlign: "center" }}>
                            <div className="circular-image" >
                              <img
                                // {urlFor(testimonial.image).url()}
                                src={urlFor(item.image).url()}
                                alt="Logo"
                              ></img>
                            </div>
                          </Grid>
                          <Grid>
                            <Typography variant="h1" sx={{ textAlign: "center", fontSize: 21, fontWeight: 500, color: appTheme.palette.primary.white, mb: -1 }}>{item.name}</Typography>
                            <Typography variant="h2" sx={{ textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white }}>  <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item.description} /> </Typography>
                          </Grid>
                        </Grid>
                        <Grid item md={5} xs={12} >
                          <Grid container alignItems="center" justifyContent="center" sx={{}}>
                            <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, textAlign: "center", color: appTheme.palette.primary.white, width: "90%" }}> <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item.blurb} /> </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                  </div>
                ))}
              </div>
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
              <div className="dots">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
          </div>





          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 10 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 2
                }}>
                  <span style={{ paddingRight: 17 }}>Our Partners</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 200 }}>Trusted Partnerships with Leading Organizations</Typography>
            </Grid>
          </Grid>




          <div className="testimonials" style={{ textAlign: "center", color: "white", width: "100%" }}>
            <div className="navigation-wrapper">
              <div ref={sliderRef1} className="keen-slider">
                {homeData[0].partners1.map((items) => (
                  <div className="keen-slider__slide number-slide1">
                    {console.log(items)}
                    <Grid container justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
                      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                        {/* Image 1 */}
                        {/* {console.log(items)} */}
                        {(items.partnersImages).map((item) => (
                          <Grid sx={{ textAlign: "center" }}>
                            <div className="partnersImage">
                              {console.log(item)}
                              <img width={200}
                                src={urlFor(item).url()}
                                alt="Image 1"
                              />
                            </div>
                          </Grid>
                        ))}

                      </Grid>
                    </Grid>

                  </div>
                ))}
              </div>
              {loaded1 && instanceRef1.current && (
                <>
                  <Arrow1
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef1.current?.prev()
                    }
                    disabled={currentSlide1 === 0}
                  />

                  <Arrow1
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef1.current?.next()
                    }
                    disabled={
                      currentSlide1 ===
                      instanceRef1.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>

          </div>



          <Grid container direction="column" alignItems="center">
            <Link to={homeData[0].partnerlink} target="_blank" style={{ textDecoration: 'none' }}>
              <Button
                width="200"
                variant="contained"
                disableElevation
                sx={{
                  color: appTheme.palette.primary.white, fontSize: 20, mb: 12, fontWeight: 500,
                  backgroundColor: appTheme.palette.primary.green2, height: 50,
                  '&:hover': {
                    fontWeight: 700,
                    backgroundColor: appTheme.palette.primary.green3,
                    color: appTheme.palette.primary.white,
                    transition: "all 0.3s ease",
                  },
                }}>
                {homeData[0].partnertitle}
              </Button>
            </Link>
          </Grid>

          <CookieConsent
            location="bottom"
            buttonText="I Agree"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#435058", fontFamily: "League Spartan", }}
            buttonStyle={{ backgroundColor: "#219D80", color: "white", fontSize: "13px", fontFamily: "League Spartan", }}
          // expires={150}
          >
            By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
          </CookieConsent>


          <BottomBar />
        </div>
      )}
    </ThemeProvider>

  )
}
