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
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image
import imageUrlBuilder from '@sanity/image-url'
import { useKeenSlider } from "keen-slider/react"


const builder = imageUrlBuilder(createClient)

function urlFor(source) {
    return builder.image(source)
}



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


export default function Aspire(props) {

    const [aspireData, setAspire] = useState(null);


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
            `*[_type == "aspire"]{
                backgroundImage,
                mainHeading,
                mainBlurb,
                headingVideo,
                buttonLink,
                card1title,
                card1image,
                card1text,
                card2title,
                card2image,
                card2text,
                card3title,
                card3image,
                card3text,
                news[]{
                    news-> {
                      title,
                      date,
                      description,
                    }
                  },
            }`
        )
            .then(
                (data) => setAspire(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {aspireData && (

                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(aspireData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "80%", mt: 10, mb: 4 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{aspireData[0].mainHeading}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 22, width: "60%", margin: "0 auto", textAlign: "center", mb: 7 }}>{aspireData[0].mainBlurb}</Typography>


                            <div className="programs-image-container" style={{ width: "50%", display: "flex", margin: "0 auto", justifyContent: "center" }}>
                                {/* <img src={urlFor(aspireData[0].headerImage).url()} /> */}
                                <iframe style={{ borderRadius: '10px' }} width="100%" height="315" src={aspireData[0].headingVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>

                            <Grid container justifyContent="center" alignItems="center" sx={{ mb: 3, mt: 5 }}>
                                <Link to={""} target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button
                                        width="200"
                                        height="40"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            color: appTheme.palette.primary.white, fontSize: 20, fontWeight: 500, mt: 2,
                                            backgroundColor: appTheme.palette.primary.green2, borderRadius: 1, height: 50, width: 220,
                                            '&:hover': {
                                                fontWeight: 700,
                                                backgroundColor: appTheme.palette.primary.green3,
                                                color: appTheme.palette.primary.white,
                                                transition: "all 0.3s ease",
                                            },
                                        }}>
                                        Sign up for Updates
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

                        sx={{ mt: 25, paddingBottom: 10, margin: "auto" }}
                    >
                        <Grid container justifyContent="center" sx={{ width: "65%" }}>

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
                                    <span style={{ paddingRight: 17 }}>3 Goals, Major Impact</span>
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
                                            <img src={urlFor(aspireData[0].card1image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {aspireData[0].card1title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {aspireData[0].card1text}
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
                                            <img src={urlFor(aspireData[0].card2image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {aspireData[0].card2title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {aspireData[0].card2text}
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
                                            <img src={urlFor(aspireData[0].card3image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {aspireData[0].card3title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {aspireData[0].card3text}
                                            </Typography>
                                        </div>


                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>



                    <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.green4, paddingBottom: 20, textAlign: "center", color: "white" }}>
                        <h2 style={{ color: appTheme.palette.primary.blue1, fontWeight: 800, paddingTop: 50, paddingBottom: 20 }}>Recent News</h2>
                        <div className="navigation-wrapper">
                            <div ref={sliderRef} className="keen-slider">
                                {aspireData[0].news.map((item) => (
                                    <div className="keen-slider__slide number-slide1">
                                        {/* {console.log("news", item)} */}
                                        <Grid container justifyContent="center" alignItems="center" sx={{ mb: 5, backgroundColor: appTheme.palette.primary.green4 }}>

                                            <Grid container direction="row" sx={{ width: "50%" }}>
                                                <h2 style={{ color: appTheme.palette.primary.blue1, textAlign: "left", fontSize: 23, fontWeight: 800, paddingTop: 50, paddingBottom: 2 }}>{item.news.title}</h2>

                                                <Typography variant="h2" sx={{ textAlign: "center", fontWeight: 500, color: appTheme.palette.primary.blue1, fontSize: 17, mb: 3, mt: 1, textTransform: "uppercase" }}>{item.news.date}</Typography>

                                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                                    <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, color: appTheme.palette.primary.blue1 }}>{item.news.description}</Typography>
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
                            <div className="dots2">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(idx)
                                            }}
                                            className={"dot2" + (currentSlide === idx ? " active" : "")}
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
