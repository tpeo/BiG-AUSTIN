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

import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


// Custom arrow components

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



export default function Partners(props) {
    // console.log('in home screen');

    const [partnersData, setPartners] = useState(null);


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
            `*[_type == "partnersWithUs"]{
                backgroundImage,
                mainHeading,
                mainBlurb,
                column1image,
                column1title,
                column1blurb,
                column2image,
                column2title,
                column2blurb,
                column3image,
                column3title,
                column3blurb,
                column4image,
                column4title,
                column4blurb,
                partnersButton,
                partners[]{
                    partners-> {
                        partnersImages
                    }
                },
                }`
        )
            .then(
                (data) => setPartners(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )



    return (
        <ThemeProvider theme={appTheme}>
            {partnersData && (



                <div style={{ height: "100vh" }}>
                    <NavBar />

                    <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                        <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(partnersData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
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
                                        <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{partnersData[0].mainHeading}</Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 4 }}>{partnersData[0].mainBlurb}</Typography>


                            </Grid>
                        </Grid>


                        <Grid container
                            justifyContent="center"
                            alignItems="center">
                            <Typography variant="h2" sx={{ fontSize: 25, margin: "0 auto", fontWeight: 500, letterSpacing: 1, mb: 6 }}>WHY SHOULD YOU PARTNER WITH US?</Typography>
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
                                                    paddingTop: 2,
                                                    margin: "auto",
                                                    borderRadius: 3,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >

                                                <div className="image-container" style={{ "margin-bottom": "10px" }}>
                                                    <img width={110} src={urlFor(partnersData[0].column1image).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column1title}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column1blurb}
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
                                                    paddingTop: 2,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >

                                                <div className="image-container" style={{ "margin-bottom": "10px" }}>
                                                    <img width={110} src={urlFor(partnersData[0].column2image).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column2title}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column2blurb}
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
                                                    paddingTop: 2,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >

                                                <div className="image-container" style={{ "margin-bottom": "10px" }}>
                                                    <img width={110} src={urlFor(partnersData[0].column3image).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column3title}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column3blurb}
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
                                                    paddingTop: 2,
                                                    borderRadius: 3,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >

                                                <div className="image-container" style={{ "margin-bottom": "10px" }}>
                                                    <img width={110} src={urlFor(partnersData[0].column4image).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column4title}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                    >
                                                        {partnersData[0].column4blurb}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </Grid>



                                    </Grid>
                                </Grid>
                            </Grid>



                        </Grid>







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
                                    {partnersData[0].partners.map((items) => (
                                        <div className="keen-slider__slide number-slide1">
                                            {/* {console.log(items)} */}
                                            <Grid container justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                                                    {/* Image 1 */}
                                                    {/* {console.log(items)} */}
                                                    {(items.partners.partnersImages).map((item) => (
                                                        <Grid sx={{ textAlign: "center" }}>
                                                            <div className="partnersImage">
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
                            <Link to={partnersData[0].partnersButton} target="_blank" style={{ textDecoration: 'none' }}>

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
                                    Partner With Us
                                </Button>
                            </Link>
                        </Grid>
                        <BottomBar />
                    </div>
                </div>
            )}
        </ThemeProvider>

    )
}
