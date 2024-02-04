import React, { useState, useEffect } from "react";
import {
    Typography,
    CssBaseline,
    Card,
    Button,
    Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

import NavBar from "../navBar/navBar.js";
import "../styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
    return builder.image(source)
}

export default function Lending(props) {

    const [lendingData, setLending] = useState(null);

    useEffect(() => {
        createClient.fetch(
            `*[_type == "lending"]{
                backgroundImage,
                mainHeading,
                mainBlurb,
                headingImage,
                headingBlurb,
                leftButton,
                rightButton,
                topTitle,
                topText,
                topImage,
                bottomTitle,
                bottomText,
                bottomImage,
                firstCtitle,
                firstCimage,
                firstCblurb,
                secondCtitle,
                secondCimage,
                secondCblurb,
                thirdCtitle,
                thirdCimage,
                thirdCblurb,
                fourthCtitle,
                fourthCimage,
                fourthCblurb,
                FifthCtitle,
                FifthCimage,
                FifthCblurb,
                card1title,
                card1text,
                card2title,
                card2text,
                card3title,
                card3text
            }`
        )
            .then(
                (data) => setLending(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {lendingData && (

                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(lendingData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
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
                                    <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{lendingData[0].mainHeading}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 4 }}>{lendingData[0].mainBlurb}</Typography>

                            <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={urlFor(lendingData[0].headingImage).url()} />
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
                                    <Typography variant="h2" sx={{ fontSize: 22, color: appTheme.palette.primary.green1, textAlign: "center" }}>{lendingData[0].headingBlurb}</Typography>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="center" alignItems="center">
                                <Link to={lendingData[0].leftButton} target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button
                                        width="150"
                                        height="20"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35, mr: 2,
                                            '&:hover': {
                                                fontWeight: 700
                                            },
                                            '@media only screen and (max-width: 600px)': {
                                                marginBottom: 2, // Adjust the width for smaller screens
                                            },
                                        }}>
                                        Schedule an Appointment
                                    </Button>
                                </Link>

                                <Link to={lendingData[0].rightButton} target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button
                                        width="150"
                                        height="20"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                                            '&:hover': {
                                                fontWeight: 700
                                            },
                                        }}>
                                        Start your Application
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid container justifyContent="center" alignItems="center" style={{ height: "auto", mt: 3, backgroundColor: appTheme.palette.primary.blue1 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "90%", mt: 7 }}>
                            <Grid item md={4} xs={12}>
                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        color: appTheme.palette.primary.white,
                                        padding: 0,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17 }}>{lendingData[0].topTitle}</span>
                                        <img width={45} src={require('../images/decor.png')} />
                                    </Typography>
                                    <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white, }}>{lendingData[0].topText}</Typography>
                                </Grid>
                            </Grid>

                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                <img
                                    className="squareImage"
                                    src={urlFor(lendingData[0].topImage).url()}
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



                    <Grid container justifyContent="center" alignItems="center" style={{ paddingTop: 30, paddingBottom: 100, backgroundColor: appTheme.palette.primary.blue1 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', padding: 5 }}>
                                <img
                                    className="squareImage"
                                    src={urlFor(lendingData[0].bottomImage).url()}
                                    alt="Logo"
                                    style={{
                                        width: 400,
                                        height: 400,
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
                                        color: appTheme.palette.primary.white,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17 }}>{lendingData[0].bottomTitle}</span>
                                        <img width={45} src={require('../images/decor.png')} />
                                    </Typography>
                                    <Typography variant="h2" className="markDown" sx={{ fontSize: 20, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white }}>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={lendingData[0].bottomText} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 10 }}
                    >
                        <Typography variant="h1" sx={{
                            fontSize: 35,
                            color: appTheme.palette.primary.blue1,
                            fontWeight: 500,
                        }}>
                            Our Five C’s — what we look for
                        </Typography>
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
                                                height: 350,
                                                width: 250,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(lendingData[0].firstCimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
                                                >
                                                    {lendingData[0].firstCtitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {lendingData[0].firstCblurb}
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>

                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.white,
                                                height: 350,
                                                width: 250,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(lendingData[0].secondCimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
                                                >
                                                    {lendingData[0].secondCtitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {lendingData[0].secondCblurb}
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>

                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.white,
                                                height: 350,
                                                width: 250,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(lendingData[0].thirdCimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
                                                >
                                                    {lendingData[0].thirdCtitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {lendingData[0].thirdCblurb}
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid container sx={{ width: "70%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs>
                                            <Card
                                                sx={{
                                                    backgroundColor: appTheme.palette.primary.white,
                                                    height: 350,
                                                    width: 250,
                                                    boxShadow: "none",
                                                    borderRadius: 1,
                                                    margin: "auto",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >

                                                <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                    <img src={urlFor(lendingData[0].fourthCimage).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
                                                    >
                                                        {lendingData[0].fourthCtitle}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                    >
                                                        {lendingData[0].fourthCblurb}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </Grid>



                                        <Grid item xs>
                                            <Card
                                                sx={{
                                                    backgroundColor: appTheme.palette.primary.white,
                                                    height: 350,
                                                    width: 250,
                                                    boxShadow: "none",
                                                    borderRadius: 1,
                                                    margin: "auto",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >

                                                <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                    <img src={urlFor(lendingData[0].FifthCimage).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
                                                    >
                                                        {lendingData[0].FifthCtitle}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                    >
                                                        {lendingData[0].FifthCblurb}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>



                        </Grid>
                    </Grid>











                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ backgroundColor: appTheme.palette.primary.green4 }}

                    >
                        <Grid sx={{ mb: 10, mt: 10 }}>

                            <Grid container justifyContent="left" sx={{ justifyContent: "center", width: "100%" }}>
                                <Typography variant="h1" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    fontSize: 30,
                                    fontWeight: 500,
                                    padding: 0,
                                    mb: 4
                                }}>
                                    <span style={{ paddingRight: 17 }}>Our Process</span>
                                    <img width={45} src={require('../images/decor.png')} />
                                </Typography>
                                <CssBaseline />


                                <Grid container spacing={2}>

                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.green5,
                                                height: 400,
                                                width: 280,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 3}}
                                                >
                                                    {lendingData[0].card1title}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    className="markDown"
                                                    variant="h2"
                                                    sx={{ textAlign: "left", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={lendingData[0].card1text} />                                                
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>



                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.green5,
                                                height: 400,
                                                width: 280,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 3 }}
                                                >
                                                    {lendingData[0].card2title}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    className="markDown"
                                                    variant="h2"
                                                    sx={{ textAlign: "left", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={lendingData[0].card2text} />                                                
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>

                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.green5,
                                                height: 400,
                                                width: 280,
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                margin: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 3 }}
                                                >
                                                    {lendingData[0].card3title}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    className="markDown"
                                                    variant="h2"
                                                    sx={{ textAlign: "left", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={lendingData[0].card3text} />                                                
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
