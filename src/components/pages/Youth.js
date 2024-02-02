import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import imageUrlBuilder from '@sanity/image-url'

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
      className={`arrow1 ${props.left ? "arrow1--left" : "arrow1--right"
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

export default function Youth(props) {

  const [youthData, setYouth] = useState(null);
  const items = [1, 2, 3, 4, 5, 6]


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
      `*[_type == "youthEntreprenuership"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        headingVideo,
        photos,
    }`
    )
      .then(
        (data) => setYouth(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {youthData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(youthData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
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
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{youthData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{
                fontSize: 20, margin: "0 auto", width: "75%", textAlign: "center", mb: 7, whiteSpace: 'pre-line',
                wordWrap: 'break-word',
              }}>{youthData[0].mainBlurb.split('<br>')
                .map((line, index) => (
                  <span key={index} style={{ display: 'block' }}>{line}</span>
                ))}</Typography>


              <div className="programs-image-container" style={{ width: "50%", display: "flex", margin: "0 auto", justifyContent: "center" }}>
                {/* <img src={urlFor(aspireData[0].headerImage).url()} /> */}
                <iframe style={{ borderRadius: '10px' }} width="100%" height="315" src={youthData[0].headingVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>

            </Grid>
          </Grid>






          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.green4, textAlign: "center", color: "white", marginTop: 40 }}>
            <h2 style={{ color: appTheme.palette.primary.white, paddingTop: 50 }}>Photo Gallery</h2>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                {youthData[0].photos.map((items) => (
                  <div className="keen-slider__slide number-slide1">
                    <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: appTheme.palette.primary.green4 }}>
                      <div>
                        <img width={400}
                          src={urlFor(items).url()}
                          alt="Logo"
                        ></img>
                      </div>

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








          <BottomBar />
        </div>
      )}
    </ThemeProvider>




  )
}
