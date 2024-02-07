import React, { useState, useEffect } from "react";
import {
    Typography,
    CssBaseline,
    Card,
    Button,
    Box,
    Grid,
    InputAdornment,
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

export default function Volunteer(props) {

    const [volunteerData, setVolunteer] = useState(null);


    useEffect(() => {
        createClient.fetch(
            `*[_type == "volunteer"]{
                backgroundImage,
                mainHeading,
                mainBlurb,
                headingImage,
                volunteerReasons[]{
                    volunteerReasons-> {
                      title,
                      description,
                      icon
                    }
                  },
                  volunteerBlurb1,
                  volunteerBlurb2,
                  volunteerButton,
            }`
        )
            .then(
                (data) => setVolunteer(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {volunteerData && (


                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(volunteerData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    {/* {console.log(volunteerData[0])} */}

                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "80%", mt: 10 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.blue1 }}>{volunteerData[0].mainHeading}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, width: "60%", margin: "0 auto", textAlign: "center", mb: 5, color: "#444444" }}>{volunteerData[0].mainBlurb}</Typography>


                            <div className="programs-image-container" style={{ width: "50%", display: "flex", margin: "0 auto", justifyContent: "center" }}>
                                <img src={(urlFor(volunteerData[0].headingImage).url())} />
                            </div>

                        </Grid>
                    </Grid>



                    <Grid sx={{ backgroundColor: appTheme.palette.primary.blue1 }}>
                        <Grid item sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            margin: "auto",
                            paddingTop: 10,
                            paddingBottom: 10,
                            mt: 9,
                            mb: 12
                        }}>
                            <Grid container spacing={3}>
                                {volunteerData[0].volunteerReasons.map((items) => (
                                    <Grid item xs sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "78%",
                                        margin: "auto",
                                        mb: 5
                                    }}>

                                        <Card
                                            style={{ border: "2px solid white", boxShadow: "5px 5px 0 rgb(182, 245, 153)" }}
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.blue1,
                                                boxShadow: "none",
                                                height: 300,
                                                width: 340,
                                                borderRadius: 3,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >

                                            <Grid container direction="row" sx={{ textAlign: "left" }}>
                                                <Typography variant="h1" sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    padding: 2,
                                                    mt: 1,
                                                    mb: 4
                                                }}>
                                                    <span style={{ paddingRight: 10, width: "70%", fontSize: 27, color: appTheme.palette.primary.white }}>{items.volunteerReasons.title}</span>
                                                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                                                        <img width={85} src={urlFor(items.volunteerReasons.icon).url()} />
                                                    </div>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textAlign: "left", fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                    >
                                                        {items.volunteerReasons.description}
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                        </Card>
                                    </Grid>

                                ))}

                            </Grid>
                        </Grid>
                    </Grid>











                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 4
                    }}>
                        <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "center", color: appTheme.palette.primary.space }}>{volunteerData[0].volunteerBlurb1}</Typography>
                        <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "center", color: appTheme.palette.primary.space }}>{volunteerData[0].volunteerBlurb2}</Typography>



                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: 30,
                            fontWeight: 500,
                            padding: 0,
                            mb: 4
                        }}>
                            <Link to={volunteerData[0].volunteerButton} target="_blank" style={{ textDecoration: 'none' }}>
                                <Button
                                    width="150"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: appTheme.palette.primary.white, fontSize: 18, fontWeight: 500,
                                        backgroundColor: appTheme.palette.primary.green2, borderRadius: .9, height: 45, mr: 3,
                                        '&:hover': {
                                            fontWeight: 700,
                                            backgroundColor: appTheme.palette.primary.green3,
                                            color: appTheme.palette.primary.white,
                                            transition: "all 0.3s ease",
                                        },
                                        mt: 5,
                                        mb: 3
                                    }}>
                                    Volunteer Now!
                                </Button>
                            </Link>
                            <img width={45} src={require('../images/decor.png')} />
                        </Grid>
                    </Grid>














                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
