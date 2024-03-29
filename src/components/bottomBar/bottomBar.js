import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  Link,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import createClient from '../../client.js';
import FormComponent from "../form.js";
import InlineSignUpForm from "../pages/InlineSignUpForm.js";




export default function BottomBar() {

  const [footerData, setFooter] = useState(null);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);


  useEffect(() => {
  
    createClient.fetch(
      `*[_type == "footer"]{
        address,
        phone,
        email,
        twitterLink,
        instaLink,
        pinterestLink,
        ytLink
    }`
    )
      .then(
        (data) => setFooter(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   window._ctct_m = "8766f4c8847a61c81bf06cd82f3fd1ae";

  //   return () => {
  //     document.body.removeChild(script);
  //     window._ctct_m = null;
  //   };
  // }, []);


  return (
    <ThemeProvider theme={appTheme}>
      {footerData && (



        <Grid sx={{
          backgroundColor: "#252A34",
        }}>
          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#252A34",
            margin: "auto",
            paddingBottom: 5,
            paddingTop: 12,
            '@media only screen and (max-width: 500px)': {
              paddingTop: 2, // Adjust the width for smaller screens
              paddingBottom: 18,
            },
          }}>

            <Grid container sx={{ width: "80%" }}>
              <Grid item xs>
                <Card
                  sx={{
                    width: 250,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                  }}
                >
                  <div className="links" style={{
                    "padding-right": "10px", "margin-top": "50px", "@media (max-width: 768px)": {
                      "padding-right": "0px",
                    }
                  }}>
                    <ul>
                      <li>
                        <Link href="https://maps.app.goo.gl/8WnaWP4Ksy6jBjrC7">
                          <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                            <LocationOnIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocationOnIcon>
                            <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>{footerData[0].address}</Typography></span>
                          </div>

                        </Link>
                      </li>
                      <li>
                        <Link href="tel:5129288010">
                          <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                            <LocalPhoneIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocalPhoneIcon>
                            <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>{footerData[0].phone}</Typography></span>
                          </div>

                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:info@bigaustin.org">

                          <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                            <EmailIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></EmailIcon>

                            <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>{footerData[0].email}</Typography></span>
                          </div>

                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Grid>
              <Grid item xs>
                <Card
                  sx={{
                    width: 140,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                    '@media only screen and (max-width: 500px)': {
                      paddingTop: 5, // Adjust the width for smaller screens
                    },
                  }}
                >
                  <div className="links" style={{ "padding": "10px" }}>
                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                      >
                        Quick Links
                      </Typography>
                    </div>
                    <ul>
                      <li>
                        <Link href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          How We Help
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteer">
                          Get Involved
                        </Link>
                      </li>
                      <li className="aspire">
                        <Link href="/aspire">
                          Aspire
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Grid>

              <Grid item xs>
                <Card
                  sx={{
                    width: 140,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                    '@media only screen and (max-width: 500px)': {
                      paddingTop: 5, // Adjust the width for smaller screens
                    },
                  }}
                >
                  <div className="links" style={{ "padding": "10px" }}>
                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                      >
                        About
                      </Typography>
                    </div>
                    <ul>
                      <li>
                        <Link href="/about">
                          Who We Are
                        </Link>
                      </li>
                      <li>
                        <Link href="/ourimpact">
                          Our Impact
                        </Link>
                      </li>
                      <li>
                        <Link href="/dreamteam">
                          Dream Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Grid>

              <Grid item xs>
                <Card
                  sx={{
                    width: 140,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                  }}
                >
                  <div className="links" style={{ "padding": "10px" }}>
                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                      >
                        How We Help
                      </Typography>
                    </div>
                    <ul>
                      <li>
                        <Link href="/services">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs">
                          Programs
                        </Link>
                      </li>
                      <li>
                        <Link href="/workshops">
                          Workshops
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Grid>

              <Grid item xs>
                <Card
                  sx={{
                    width: 140,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                  }}
                >
                  <div className="links" style={{ "padding": "10px" }}>
                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                      >
                        Get Involved
                      </Typography>
                    </div>
                    <ul>
                      <li>
                        <Link href="/volunteer">
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link href="/partnership">
                          Partner
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Grid>



              <Grid item xs>
                <Card
                  sx={{
                    width: 280,
                    display: "flex",
                    backgroundColor: "#252A34",
                    boxShadow: "none",
                    flexDirection: "column",
                  }}
                >
                  <div className="links" style={{ "padding": "10px" }}>
                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                      >
                        Newsletter
                      </Typography>
                    </div>

                 
                    <div class="ctct-inline-form" data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3"></div>
                       {/*signup-form-widget.min.js:30 Div for inline form "Inline Form Created 2022/05/02, 02:15:33 PM" is missing. Was inline code installed? */}
                    {/* <InlineSignUpForm /> */}

                    {/* <div
                      className="ctct-inline-form"
                      dangerouslySetInnerHTML={{ __html: '<div data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3"></div>' }}
                    ></div> */}


                    {/* <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 1000,
                      maxWidth: '100%',
                    }}
                  >
                    <input className="input" type="text" placeholder="Enter your email" id="fname" name="fname"></input>
                    <Button sx={{ color: appTheme.palette.primary.white, height: "45px", fontSize: 17, backgroundColor: appTheme.palette.primary.green2, fontWeight: 350, borderRadius: 0, paddingLeft: 4, paddingRight: 4 }}>Subscribe</Button>
                  </Box> */}
                    <Typography variant="h2" sx={{ fontSize: 15, mt: 1, color: appTheme.palette.primary.platinum }}>Your email is safe with us, we don’t spam.</Typography>
                    {/* <Typography variant="h2" sx={{ fontSize: 15, mt: 1, color: appTheme.palette.primary.platinum }}>Refresh page if newsletter doesn't load.</Typography> */}



                    <div>
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 17, mt: 3, mb: 2, color: appTheme.palette.primary.white }}
                      >
                        Follow Us
                      </Typography>
                    </div>

                    <Link href={footerData[0].twitterLink} style={{ textDecoration: 'none' }} target="_blank">
                      <TwitterIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></TwitterIcon>
                    </Link>
                    <Link href={footerData[0].instaLink} style={{ textDecoration: 'none' }} target="_blank">
                      <InstagramIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></InstagramIcon>
                    </Link>

                    <Link href={footerData[0].pinterestLink} style={{ textDecoration: 'none' }} target="_blank">
                      <FacebookIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></FacebookIcon>
                    </Link>

                    <Link href={footerData[0].ytLink} style={{ textDecoration: 'none' }} target="_blank">
                      <LinkedInIcon style={{ border: '4px solid #B6F599', width: 30, height: 30 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LinkedInIcon>
                    </Link>

                  </div>
                </Card>
              </Grid>
            </Grid>

            {/* <FormComponent/> */}



          </Grid>

          <div className="wrapperLeft">
            <img width={100} src={require('../images/leftfooter.png')} />
          </div>

          <div className="wrapperRight">
            <img width={100} src={require('../images/leftfooter.png')} />
          </div>



        </Grid>





      )}
    </ThemeProvider>



  )
}


// import React from "react";
// import "./bottomBar.css";


// export default function BottomBar() {
//   return (
//     <div className="bottomBarContainer">
//       <div className="rectangle">
//       <div className="flex-container-1">
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-2">
//           <span className="get-in-touch">Get In Touch</span>
//           <span className="contact-us">Contact us</span>
//           <span className="our-services">Our services</span>
//         </div>
//         <div className="flex-container-2">
//           <span className="get-in-touch">Get In Touch</span>
//           <span className="contact-us">Contact us</span>
//           <span className="our-services">Our services</span>
//         </div>
//         <div className="flex-container-4">
//           <span className="newsletter">Newsletter</span>
//           <div className="flex-container-5">
//             <div className="email-box">
//               <span className="enter-your-email">Enter your email</span>
//             </div>
//             <div className="subscribe-frame">
//               <span className="subscribe">Subscribe</span>
//             </div>
//           </div>
//           <span className="email-frame">
//             Your email is safe with us,we don’t spam.
//           </span>
//           <span className="follow-me">Follow Me</span>
//           {/* <img className="group-3251" src={group3251} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };
