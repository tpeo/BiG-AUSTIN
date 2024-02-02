import React, { useState, useEffect } from "react";
import {
    Typography,
    CssBaseline,
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

export default function SkillsDev(props) {

    const [skillsData, setSkills] = useState(null);

    useEffect(() => {
        createClient.fetch(
            `*[_type == "jobskills"]{
                backgroundImage,
                mainHeading,
                mainBlurb,
                leftImage,
                leftTitle,
                leftParagraph,
                rightImage,
                rightTitle,
                rightParagraph,
                blub1,        
                blub2,
                buttonText,
                buttonLink
    }`
        )
            .then(
                (data) => setSkills(data)
            )
            .catch(console.error);
    }, []//dependency array 
    )




    return (
        <ThemeProvider theme={appTheme}>
            {skillsData && (

                <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(skillsData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
                        <NavBar />
                    </Grid>

                    <Grid sx={{ height: "auto", mt: 10 }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CssBaseline />
                            <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.blue1 }}>{skillsData[0].mainHeading}</Typography>
                                <Typography variant="h2" sx={{ fontSize: 20, textTransform: "uppercase", fontWeight: 500, color: appTheme.palette.primary.blue1 }}>{skillsData[0].mainBlurb}</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 5, mb: 14 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%", margin: "auto" }}>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Grid sx={{ textAlign: 'center' }}>
                                    <img className="squareImage1"
                                        src={urlFor(skillsData[0].leftImage).url()}
                                        alt="Logo"
                                        style={{
                                            top: 0,
                                            width: 280,
                                            height: 280,
                                            margin: "auto",
                                            borderRadius: '15px',
                                            boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                        }}
                                    ></img>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 2,
                                        mt: 2
                                    }}>
                                        <span style={{ textAlign: "left" }}>{skillsData[0].leftTitle}</span>
                                        <img width={42} src={require('../images/decor.png')} />
                                    </Typography>

                                    <Typography variant="h2" sx={{ textAlign: "left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={skillsData[0].leftParagraph} />
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Grid sx={{ textAlign: 'center' }}>
                                    <img className="squareImage"
                                        src={urlFor(skillsData[0].rightImage).url()}
                                        style={{
                                            top: 0,
                                            width: 280,
                                            height: 280,
                                            margin: "auto",
                                            borderRadius: '15px',
                                            boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                        }}
                                    ></img>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 2,
                                        mt: 2
                                    }}>
                                        <span style={{}}>{skillsData[0].rightTitle}</span>
                                        <img width={42} src={require('../images/decor.png')} />
                                    </Typography>


                                    <Typography variant="h2" sx={{ textAlign: "left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={skillsData[0].rightParagraph} />
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: appTheme.palette.primary.blue1,
                        mt: 5,
                        paddingBottom: 10
                    }}>

                        <Grid sx={{ height: "auto", width: "45%", paddingTop: 8 }}>
                            <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 400, textAlign: "center", color: appTheme.palette.primary.white, mb: 4 }}>{skillsData[0].blub1}</Typography>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "left", color: appTheme.palette.primary.white, mb: 3 }}>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={skillsData[0].blub2} />

                                </Typography>
                        </Grid>



                    </Grid>




                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5
                    }}>

                        <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.space }}>{skillsData[0].buttonText}</Typography>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: 30,
                            fontWeight: 500,
                            padding: 0,
                            mt: 2,
                            mb: 8
                        }}>
                         <Link to={skillsData[0].buttonLink} target="_blank" style={{ textDecoration: 'none' }}>

                            <Button
                                width="150"
                                variant="contained"
                                disableElevation
                                sx={{
                                    color: appTheme.palette.primary.white, fontSize: 18, fontWeight: 500,
                                    backgroundColor: appTheme.palette.primary.green2, borderRadius: .9, height: 45, mr: 3,
                                    '&:hover': {
                                        fontWeight: 700
                                    },
                                }}>
                                Register Here
                            </Button>
                            </Link>
                            <img width={40} src={require('../images/decor.png')} />
                        </Grid>
                    </Grid>







                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
