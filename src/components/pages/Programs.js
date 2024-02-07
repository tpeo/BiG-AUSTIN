import React, { useState, useEffect } from "react";
import {
    Typography,
    CssBaseline,
    Button,
    Card,
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

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
    return builder.image(source)
}


export default function Programs(props) {

    const [programData, setProgram] = useState(null);

    useEffect(() => {
        createClient.fetch(
            `*[_type == "programsPage"]{
                headingImage,
                programs[]{
                    programs-> {
                      title,
                      description,
                      image,
                      buttonLink
                    }
                },
            }`
        )
            .then(
                (data) => setProgram(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {programData && (

                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(programData[0].headingImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    <Grid sx={{ height: "auto", mt: 5, mb: 3 }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CssBaseline />
                            <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                <Typography variant="h1" sx={{ fontSize: 40 }}>Programs</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {programData[0].programs.map((item, index) => (

                        <Grid sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {/* {console.log(item)} */}
                            <Card
                                sx={{
                                    height: "auto",
                                    width: "70%",
                                    borderRadius: 1,
                                    display: "flex",
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    flexDirection: "column",
                                    mb: 9,
                                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 0px 25px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 0px 20px rgba(0, 0, 0, 0.02)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        {/* Adjust the image size and alignment */}
                                        <div className="programs-image-container" style={{ width: "90%", display: "flex", justifyContent: "center", marginLeft: 30 }}>
                                            <img width={"100%"} src={urlFor(item.programs.image).url()} alt="Coffee Talk" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        {/* Adjust the text content and button placement */}
                                        <div style={{ marginLeft: 25, width: "92%" }}>
                                            <Typography
                                                variant="h1"
                                                sx={{ fontWeight: 550, fontSize: 28, mb: 2, padding: 0 }}
                                            >
                                                {item.programs.title}
                                            </Typography>
                                            <Typography
                                                variant="h2"
                                                sx={{ fontSize: 20, mb: 1, padding: 0 }}
                                            >
                                                {item.programs.description}
                                            </Typography>

                                            <Grid container justifyContent="flex-start" alignItems="center" spacing={2} sx={{ mt: 5 }}>
                                                <Grid item xs={6} md={4}>
                                                    <Link to={item.programs.buttonLink} target="_blank" style={{ textDecoration: 'none' }}>
                                                        <Button
                                                            width="100%"
                                                            variant="contained"
                                                            disableElevation
                                                            sx={{
                                                                color: appTheme.palette.primary.white,
                                                                fontSize: 18,
                                                                fontWeight: 500,
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
                                                <Grid item xs={6} md={8} sx={{ textAlign: 'right' }}>
                                                    {/* Adjust the image width */}
                                                    <img width={45} src={require('../images/decor.png')} alt="Decor" />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}











                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
