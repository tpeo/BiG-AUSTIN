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
import imageUrlBuilder from '@sanity/image-url'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
const builder = imageUrlBuilder(createClient)

function urlFor(source) {
    return builder.image(source)
}


export default function WomensBiz(props) {

    const [womenData, setWomen] = useState(null);

    useEffect(() => {
        createClient.fetch(
            `*[_type == "womensBiz"]{
            backgroundImage,
            mainHeading,
            mainBlurb,
            headingImage,
            imageCaption,
            headingBlurb,
            card1title,
            card1image,
            card1text,
            card2title,
            card2image,
            card2text,
            card3title,
            card3image,
            card3text,
            blurb,
            buttonLink,
            firstOffertitle,
            firstOfferimage,
            firstOfferblurb,
            secondOffertitle,
            secondOfferimage,
            secondOfferblurb,
            thirdOffertitle,
            thirdOfferimage,
            thirdOfferblurb,
            fourthOffertitle,
            fourthOfferimage,
            fourthOfferblurb,
            FifthOffertitle,
            FifthOfferimage,
            FifthOfferblurb,
        }`
        )
            .then(
                (data) => setWomen(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {womenData && (
                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(womenData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 10 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.blue1 }}>{womenData[0].mainHeading}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>{womenData[0].mainBlurb}</Typography>


                            <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={urlFor(womenData[0].headingImage).url()} />
                            </div>
                            <Typography variant="h1" sx={{ fontSize: 22, textAlign: "center", color: appTheme.palette.primary.blue1 }}>{womenData[0].imageCaption}</Typography>
                            <Typography variant="h2" sx={{ fontSize: 18, textAlign: "center", color: appTheme.palette.primary.green1 }}>{womenData[0].headingBlurb}</Typography>
                        </Grid>
                    </Grid>




                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"

                        sx={{ mt: 25, paddingBottom: 3, margin: "auto" }}
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
                                    <span style={{ paddingRight: 17 }}>Services</span>
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
                                            <img src={urlFor(womenData[0].card1image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {womenData[0].card1title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {womenData[0].card1text}
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
                                            <img src={urlFor(womenData[0].card2image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {womenData[0].card2title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {womenData[0].card2text}
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
                                            display: "flex",
                                            margin: "auto",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >

                                        <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                            <img src={urlFor(womenData[0].card3image).url()} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                                            >
                                                {womenData[0].card3title}
                                            </Typography>
                                        </div>

                                        <div>
                                            <Typography
                                                variant="h2"
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                {womenData[0].card3text}
                                            </Typography>
                                        </div>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "100%", mb: 7 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.green1 }}>{womenData[0].blurb}</Typography>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="center" alignItems="center">
                                <Link to={womenData[0].buttonLink} target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button
                                        width="150"
                                        height="20"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            color: appTheme.palette.primary.white, fontSize: 17, fontWeight: 500, mt: 2,
                                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                                            '&:hover': {
                                                fontWeight: 700,
                                                backgroundColor: appTheme.palette.primary.green3,
                                                color: appTheme.palette.primary.white,
                                                transition: "all 0.3s ease",
                                            },
                                        }}>
                                        Schedule an Appointment
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>




                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 3 }}
                    >
                        <Typography variant="h1" sx={{
                            fontSize: 35,
                            color: appTheme.palette.primary.blue1,
                            fontWeight: 500,
                        }}>
                            What we offer
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
                                                height: 300,
                                                width: 250,
                                                margin: "auto",
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(womenData[0].firstOfferimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                                                >
                                                    {womenData[0].firstOffertitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {womenData[0].firstOfferblurb}
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
                                                margin: "auto",
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(womenData[0].secondOfferimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                                                >
                                                    {womenData[0].secondOffertitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {womenData[0].secondOfferblurb}
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
                                                margin: "auto",
                                                boxShadow: "none",
                                                borderRadius: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >

                                            <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                <img src={urlFor(womenData[0].thirdOfferimage).url()} />
                                            </div>

                                            <div >
                                                <Typography
                                                    variant="h1"
                                                    sx={{ fontWeight: 550, padding: 0, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                                                >
                                                    {womenData[0].thirdOffertitle}
                                                </Typography>
                                            </div>

                                            <div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                >
                                                    {womenData[0].thirdOfferblurb}
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
                                sx={{ mt: 5 }}
                            >
                                <Grid container sx={{ width: "70%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs>
                                            <Card
                                                sx={{
                                                    backgroundColor: appTheme.palette.primary.white,
                                                    height: 300,
                                                    width: 250,
                                                    margin: "auto",
                                                    boxShadow: "none",
                                                    borderRadius: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >

                                                <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                    <img src={urlFor(womenData[0].fourthOfferimage).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ fontWeight: 550, padding: 0, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                                                    >
                                                        {womenData[0].fourthOffertitle}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                    >
                                                        {womenData[0].fourthOfferblurb}
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
                                                    margin: "auto",
                                                    boxShadow: "none",
                                                    borderRadius: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >

                                                <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                                    <img src={urlFor(womenData[0].FifthOfferimage).url()} />
                                                </div>

                                                <div >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{ fontWeight: 550, padding: 0, textAlign: "center", fontSize: 22, mb: 1, mt: 1 }}
                                                    >
                                                        {womenData[0].FifthOffertitle}
                                                    </Typography>
                                                </div>

                                                <div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                                    >
                                                        {womenData[0].FifthOfferblurb}
                                                    </Typography>
                                                </div>
                                            </Card>
                                        </Grid>

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
