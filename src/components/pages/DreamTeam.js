import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import Modal from '@mui/material/Modal';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "../styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'
import "keen-slider/keen-slider.min.css"
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";


const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}





export default function DreamTeam(props) {

  const [teamData, setTeam] = useState(null);

  const [selectedTeamMember, setSelectedTeamMember] = useState(null);


  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);

  const handleOpen = (item) => {
    setSelectedTeamMember(item);
    setOpen(true);
    // other logic for opening the modal
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    createClient.fetch(
      `*[_type == "dreamteam"] {
        backgroundImage,
        mainHeading,
        mainQuote,
        mainBlurb,
        directorsBlurb,
        people1[]->{
            name,
            description,
            image,
            number,
            email,
            blurb
        },
        directors1[]->{
            name,
            description,
            image
        },
      }`
    )
      .then(
        (data) => setTeam(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {teamData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(teamData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          {console.log(teamData)}

          <Grid sx={{ height: "auto", mt: 5, mb: 7 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                <Typography variant="h1" sx={{ fontSize: 40 }}>{teamData[0].mainHeading}</Typography>
              </Grid>
            </Grid>
            <Typography variant="h2" sx={{ fontSize: 22, fontWeight: 400, width: "60%", margin: "0 auto", textAlign: "center" }}>{teamData[0].mainQuote}</Typography>
            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", width: "70%", margin: "0 auto", mt: 3 }}>{teamData[0].mainBlurb}</Typography>
          </Grid>


          <Grid container spacing={3} sx={{ width: "70%", margin: "0 auto" }}>
            {teamData[0].people1.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div className="imagecard" onClick={() => handleOpen(item)} style={{ textAlign: 'center' }}>
                  <div className="circular-image2">
                    {console.log(item.image)}
                    <img width={200} src={urlFor(item.image).url()} alt={item.name} style={{ display: 'block' }} />
                  </div>
                  <Typography variant="h1" sx={{ fontSize: 19, padding: 1, fontWeight: 400 }}>{item.name}</Typography>
                  <Typography variant="h2" sx={{ fontSize: 17, fontWeight: 400 }}>{item.description}</Typography>
                </div>
              </Grid>
            ))}

            {selectedTeamMember && (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
                sx={{ borderRadius: '10px', border: 'none', outline: '0' }}
              >
                <Grid
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    '@media only screen and (max-width: 600px)': {
                      width: '80%', // Adjust the width for smaller screens
                    },
                  }}

                >
                  <Grid container>
                    {/* Left side  */}
                    <Grid item xs={12} sm={5} style={{ backgroundColor: appTheme.palette.primary.blue1, borderRadius: '10px 0 0 10px' }}>
                      <div className="programs-image-container" style={{ width: "70%", margin: "0 auto", marginTop: "60px", marginBottom: "45px", display: "flex", justifyContent: "center" }}>
                        <img src={urlFor(selectedTeamMember.image).url()} style={{ width: "220px", height: "220px", objectFit: "cover" }} />
                      </div>


                      <div style={{ width: "50%", margin: "0 auto", justifyContent: "center", marginBottom: "75px" }}>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 20, width: "100%", margin: "0 auto" }}>
                          <LocalPhoneIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocalPhoneIcon>
                          <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>{selectedTeamMember.number}</Typography></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                          <EmailIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></EmailIcon>
                          <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>{selectedTeamMember.email}</Typography></span>
                        </div>
                      </div>



                    </Grid>

                    {/* Right side  */}
                    <Grid item xs={12} sm={7} style={{ backgroundColor: appTheme.palette.primary.platinum, paddingTop: "60px", paddingLeft: "30px", borderRadius: '0 10px 10px 0', paddingBottom: "75px" }}>

                      <Typography variant="h1" sx={{ fontSize: 25, padding: 0, paddingBottom: 1, fontWeight: 400 }}>{selectedTeamMember.name}</Typography>
                      <Typography variant="h2" sx={{ fontSize: 17, fontWeight: 400 }}>{selectedTeamMember.description}</Typography>

                      <Typography variant="h2" sx={{ fontSize: 17, mt: 2, fontWeight: 300, width: "92%", }}>      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={selectedTeamMember.blurb} /></Typography>

                    </Grid>
                  </Grid>
                </Grid>
              </Modal>
            )}

          </Grid>





          <Grid sx={{ backgroundColor: appTheme.palette.primary.platinum, borderRadius: "20px 20px 0 0", paddingBottom: "60px" }}>
            <Grid sx={{ height: "auto", mt: 5, mb: 7, paddingTop: "30px" }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 36, color: "#2C3343" }}>Board of Directors</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: "#2C3343", width: "50%", margin: "0 auto", mt: 3 }}>{teamData[0].directorsBlurb}</Typography>
            </Grid>

            <Grid container spacing={2} sx={{ width: '60%', margin: '0 auto' }}>
              {teamData[0].directors1.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  <Grid container spacing={2}>
                    {/* Left side  */}
                    <Grid item xs={5} style={{}}>
                      <div className="circular-image3">
                        <img width={200} src={urlFor(item.image).url()} alt={item.name} style={{ display: 'block' }} />
                      </div>
                    </Grid>
                    {/* Right side  */}
                    <Grid item xs={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography variant="h1" sx={{ fontSize: 19, mt: 2, color: "#2C3343", padding: 1, fontWeight: 400 }}>{item.name}</Typography>
                      <Typography variant="h2" sx={{ fontSize: 17, color: "#2C3343", fontWeight: 300, width: "60%", textAlign: "center" }}>{item.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>





          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
