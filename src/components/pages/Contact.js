import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Link,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import "./Pages.css"
import "../styles.css";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url'


export default function Contact(props) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd398f66-0971-44d8-94ab-a771a3062fae");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  const [contactData, setContact] = useState(null);
  const builder = imageUrlBuilder(createClient)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    createClient.fetch(
      `*[_type == "contact"]{
        mainHeading,
        mainBlurb,
        headerImage,
        buildingImage,
        message,
        phone,
        email,
        address,
    }`
    )
      .then(
        (data) => setContact(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )


  return (
    <ThemeProvider theme={appTheme}>
      {contactData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(contactData[0].headerImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "60%", mt: 10, mb: 2 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 44, color: appTheme.palette.primary.blue1 }}>{contactData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 22, textAlign: "center", mb: 4 }}>{contactData[0].mainBlurb}</Typography>


            </Grid>
          </Grid>


          <Grid container
            justifyContent="center"
            alignItems="center">
            <Typography variant="h2" sx={{ color: "#444444", fontSize: 22, fontWeight: 500, letterSpacing: 1, mb: 2 }}>  USE THIS <a href="https://forms.office.com/pages/responsepage.aspx?id=F83QyLQAS0m0ZXpNe0gQdVAjuV1FPWBGgcB3N5vlY6dUMDVCOFI4NTVZNUkxUE9JRUczRTFRREUxUC4u" target="_blank" rel="noopener noreferrer" style={{ color: '#219D80' }}>
              FORM
            </a>, OR THE ONE BELOW</Typography>
          </Grid>


          {/* <div class="ctct-inline-form" data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3"></div> */}


          <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 5 }}>
            <Grid container direction="row" justifyContent="center" sx={{ width: "100%", margin: "0 auto" }}>
              <Grid item md={4} xs={12} sx={{ paddingBottom: 5 }}>
                <Grid sx={{ width: "90%", margin: "0 auto" }}>
                  <form onSubmit={onSubmit}>
                    <Typography variant="h1" sx={{ fontSize: 25, padding: 0, margin: 0, mb: -1, color: appTheme.palette.primary.blue1 }}>Name</Typography>
                    <TextField inputProps={{
                      spellCheck: "false",
                      style: { fontFamily: "League Spartan", color: appTheme.palette.primary.blue1, fontSize: 20 }
                    }}
                      variant="outlined" margin="normal" fullWidth name="name" sx={{ mb: 4, backgroundColor: appTheme.palette.primary.green4, borderRadius: .5, border: "none" }} />



                    <Typography variant="h1" sx={{ fontSize: 25, padding: 0, margin: 0, mb: -1, color: appTheme.palette.primary.blue1 }}>Email</Typography>
                    <TextField inputProps={{
                      spellCheck: "false",
                      style: { fontFamily: "League Spartan", color: appTheme.palette.primary.blue1, fontSize: 20 }
                    }} variant="outlined" margin="normal" fullWidth name="email" type="email" sx={{ mb: 4, backgroundColor: appTheme.palette.primary.green4, borderRadius: .5 }} />

                    <Typography variant="h1" sx={{ fontSize: 25, padding: 0, margin: 0, mb: -1, color: appTheme.palette.primary.blue1 }}>Subject</Typography>
                    <TextField inputProps={{
                      spellCheck: "false",
                      style: { fontFamily: "League Spartan", color: appTheme.palette.primary.blue1, fontSize: 20 }
                    }} variant="outlined" margin="normal" fullWidth name="subject" type="text" sx={{ mb: 4, backgroundColor: appTheme.palette.primary.green4, borderRadius: .5 }} />




                    <Typography variant="h1" sx={{ fontSize: 25, padding: 0, margin: 0, mb: -1, color: appTheme.palette.primary.blue1 }}>Message</Typography>

                    <TextField inputProps={{
                      spellCheck: "false",
                      style: { fontFamily: "League Spartan", color: appTheme.palette.primary.blue1, fontSize: 20 }
                    }} variant="outlined" margin="normal" fullWidth multiline rows={4} name="message" sx={{ mb: 4, backgroundColor: appTheme.palette.primary.green4, borderRadius: .5 }} />
                    <Button type="submit" sx={{ width: "30%", textAlign: 'right', mt: 2, boxShadow: "none", marginLeft: '70%', fontSize: 19, fontWeight: 400, backgroundColor: appTheme.palette.primary.green2 }} variant="contained" fullWidth>
                      Submit
                    </Button>

                  </form>
                  <Typography variant="h1" sx={{ fontSize: 25, padding: 0, mt: 3 }}>{result}</Typography>
                </Grid>
              </Grid>

              <Grid item md={4} xs={12}>
                <Grid sx={{ marginLeft: "80px" }}>
                  <img
                    src={urlFor(contactData[0].buildingImage).url()}

                    style={{
                      top: 0,
                      left: 0,
                      width: 350,
                      margin: "auto",
                      marginBottom: 20,
                      borderRadius: '15px',
                      boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                    }}
                  />
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.615051392373!2d-97.68155072513709!3d30.33346557477931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b6380a9901e3%3A0xeee32eeb00ec3973!2sBiGAUSTIN!5e0!3m2!1sen!2sus!4v1706841289087!5m2!1sen!2sus" width="350" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
              </Grid>


            </Grid>
          </Grid>


          <Grid container spacing={2} sx={{ width: "60%", margin: "0 auto", paddingBottom: 10 }}>
            {/* First column */}
            <Grid item xs={12} sm={6} md={4}>
              <Link href="tel:5129288010" sx={{ textDecoration: "none" }}>
                <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                  <LocalPhoneIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocalPhoneIcon>
                  <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.blue1, textDecoration: "none" }}>{contactData[0].phone}</Typography></span>
                </div>

              </Link>

            </Grid>

            {/* Second column */}
            <Grid item xs={12} sm={6} md={4}>
              <Link href="mailto:info@bigaustin.org" sx={{ textDecoration: "none" }}>

                <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                  <EmailIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></EmailIcon>

                  <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.blue1, }}>{contactData[0].email}</Typography></span>
                </div>

              </Link>
            </Grid>

            {/* Third column */}
            <Grid item xs={12} sm={6} md={4}>
              <Link href="https://maps.app.goo.gl/8WnaWP4Ksy6jBjrC7" sx={{ textDecoration: "none" }}>
                <div style={{ display: 'flex', alignItems: 'center', width: "90%", margin: "0 auto" }}>
                  <LocationOnIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocationOnIcon>
                  <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.blue1, }}>{contactData[0].address}</Typography></span>
                </div>

              </Link>
            </Grid>
          </Grid>







          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
