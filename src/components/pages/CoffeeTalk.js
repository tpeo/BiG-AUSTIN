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

export default function CoffeeTalk(props) {

    const [coffeeData, setCoffee] = useState(null);



    useEffect(() => {
        createClient.fetch(
            `*[_type == "womencoffee"]{
                backgroundImage,
                mainHeading,
                headingImage,
                mainParagraph,
                buttonLink,
                speakersBlurb,
                speakers,
    }`
        )
            .then(
                (data) => setCoffee(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {coffeeData && (

                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(coffeeData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    <Grid sx={{ height: "auto", mt: 10 }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CssBaseline />
                            <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{coffeeData[0].mainHeading}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 5, mb: 14 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                <img className="squareImage"
                                    src={urlFor(coffeeData[0].headingImage).url()}
                                    alt="Logo"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        width: 350,
                                        height: 350,
                                        margin: "auto",
                                        borderRadius: '15px',
                                        boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                    }}
                                ></img>
                            </Grid>

                            <Grid item md={4} xs={12} >
                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                    <Typography variant="h2" sx={{
                                        fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.black, whiteSpace: 'pre-line',
                                    }}>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={coffeeData[0].mainParagraph} />
                                    </Typography>
                                    <Link to={coffeeData[0].buttonLink} target="_blank" style={{ textDecoration: 'none' }}>
                                        <Button
                                            width="150"
                                            height="20"
                                            variant="contained"
                                            disableElevation
                                            sx={{
                                                color: appTheme.palette.primary.white, fontSize: 17, fontWeight: 500,
                                                backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 40,
                                                '&:hover': {
                                                    fontWeight: 700,
                                                    backgroundColor: appTheme.palette.primary.green3,
                                                    color: appTheme.palette.primary.white,
                                                    transition: "all 0.3s ease",
                                                },
                                            }}>
                                            Join Our Coffee Talks
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>



                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: appTheme.palette.primary.green4
                    }}>
                        <Grid sx={{ height: "auto", width: "60%", mb: 7 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mt: 6,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17, fontSize: 37, color: appTheme.palette.primary.white }}>WBI Speakers</span>
                                        <img width={40} src={require('../images/decor.png')} />
                                    </Typography>                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white }}>{coffeeData[0].speakersBlurb}</Typography>
                        </Grid>




                        <Grid item sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50%",
                            margin: "auto",
                            mb: 12
                        }}>
                            <Grid container spacing={5}>
                                {coffeeData[0].speakers.map((items) => (
                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.white,
                                                width: 200,
                                                borderRadius: 0,
                                                display: "flex",
                                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.02)",
                                                flexDirection: "column",
                                            }}
                                        >

                                            <img width={800} src={urlFor(items).url()} />


                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
