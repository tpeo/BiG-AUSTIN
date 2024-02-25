import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Card,
  Button,
  Grid,
} from "@mui/material";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FullCalendar from '@fullcalendar/react'
import Modal from '@mui/material/Modal';
import dayGridPlugin from '@fullcalendar/daygrid'
import BottomBar from "../bottomBar/bottomBar.js";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import moment from "moment";
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


export default function Workshops(props) {

  const [workData, setWork] = useState(null);
  const [toggleOn, setToggleOn] = useState(false);
  const [events, setEvents] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleChange = () => {
    setToggleOn((prevToggle) => !prevToggle);
  };

  const handleEventClick = ({ event }) => {
    // Open the modal when the event is clicked 
    // console.log(event);
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  // const handleOpen = (item) => {
  //   setSelectedTeamMember(item.people);
  //   setOpen(true);
  //   // other logic for opening the modal
  // };



  useEffect(() => {
    createClient.fetch(
      `*[_type == "workshopsPage"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        workshops1[]->{
            image,
            description,
            title,
            name,
            dateTime,
            button
        },
    }`
    )
      .then(
        (data) => setWork(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )

  useEffect(() => {

    if (workData) {
      const newEvents = workData[0].workshops1.map(item => ({
        title: item.title,
        description: item.description,
        button: item.button,
        image: item.image,
        date: new Date(item.dateTime),
      }));

      setEvents(newEvents);
      // console.log(events);
    }
  }, [workData]); // Update events whenever workshopsData changes




  return (
    <ThemeProvider theme={appTheme}>
      {workData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(workData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}>
            <Grid sx={{ height: "auto", width: "55%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{workData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, color: appTheme.palette.primary.space, textAlign: "center", mb: 3 }}>{workData[0].mainBlurb}</Typography>
            </Grid>
          </Grid>




          <Grid container spacing={2} sx={{ width: "78%", margin: "0 auto", }} justifyContent="space-between">
            {/* First Grid Item */}
            <Grid item xs sx={{

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",  // Align text to the left
              justifyContent: "center",
              margin: "auto",
              paddingLeft: "0px",
              paddingBottom: 6,

            }}>
              <Grid sx={{ height: "auto", paddingLeft: "0px", }}>
                <Grid container justifyContent="center" alignItems="center">
                  <CssBaseline />
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 26,
                    color: "#252A34",
                    fontWeight: 500,
                    padding: 0,
                    mb: 0
                  }}>
                    <span style={{ paddingRight: 17, paddingLeft: 0, }}>Upcoming Workshops</span>
                    <img width={45} src={require('../images/decor.png')} alt="decor" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second Grid Item (Toggle) */}
            <Grid item xs sx={{ textAlign: 'right' }}> {/* Align the switch to the right */}
              <FormControlLabel
                value="start"
                control={<Switch color="primary" onChange={handleChange} />}
                label="Calendar View"
                labelPlacement="start"
              />
            </Grid>
          </Grid>

          {toggleOn ?

            <Grid sx={{
              width: "78%",
              margin: "0 auto",
              mb: 12
            }}>

              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventClick={handleEventClick}
                eventColor={appTheme.palette.primary.green1}
              />


              {/* Modal */}
              {selectedEvent && (
                <Modal
                  open={isModalOpen}
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
                      height: '70%',
                      bgcolor: 'background.paper',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      backgroundImage: `url(${urlFor(selectedEvent.extendedProps.image).url()})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <Grid
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '65%',
                        height: '100%',
                        backgroundColor: '#1c2029',
                        opacity: 0.95,
                        zIndex: 1,
                        '@media only screen and (max-width: 600px)': {
                          width: '100%', // Adjust the width for smaller screens
                        },
                      }}
                    ></Grid>

                    <Grid container>
                      <Grid item xs={12} sm={7}
                        sx={{
                          position: 'relative',
                          zIndex: 2,
                          padding: '50px',
                          color: 'white',
                        }}
                      >
                        
                        <Typography variant="h1" sx={{ fontSize: 27, padding: 0, mb: 3 }}>{selectedEvent.title}</Typography>
     
                        <div style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                        <Typography variant="h2" sx={{ fontSize: 23, padding: 0, mb: 7 }}> <ReactMarkdown rehypePlugins={[rehypeRaw]} children={selectedEvent.extendedProps.description} /> </Typography>
                        </div>
                        <Link to={selectedEvent.extendedProps.button} target="_blank" style={{ textDecoration: 'none' }}>
                          <Button
                            width="150"
                            variant="contained"
                            disableElevation
                            sx={{
                              color: appTheme.palette.primary.white, fontSize: 18, fontWeight: 500,
                              backgroundColor: appTheme.palette.primary.green2, borderRadius: .9, height: 45, mr: 3, mt: 1,
                              '&:hover': {
                                fontWeight: 700,
                                backgroundColor: appTheme.palette.primary.green3,
                                color: appTheme.palette.primary.white,
                                transition: "all 0.3s ease",
                              },
                            }}>
                            Register Now
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>

                  </Grid>
                </Modal>
              )}


            </Grid>

            :

            <Grid item sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "78%",
              margin: "0 auto",
              mb: 12
            }}>
              <Grid container spacing={5}>
                {workData[0].workshops1.map((items) => (

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        width: 340,
                        height: 680,
                        borderRadius: 1,
                        margin: "auto",
                        display: "flex",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <img height={20} style={{ "border-bottom": "7px solid #B6F599" }} src={urlFor(items.image).url()} />
                      </div>

                      <Grid sx={{ paddingLeft: 3 }}>
                        <Typography variant="h2" sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          fontSize: 17,
                          fontWeight: 500,
                          color: '#999999',
                          fontWeight: 350,
                          padding: 0,
                          mb: 2,
                          mt: 2
                        }}>
                          <PersonIcon sx={{ marginRight: 1 }}></PersonIcon>
                          <span style={{ paddingRight: 17 }}>{items.name}</span>
                          <CalendarMonthIcon sx={{ marginLeft: 3, marginRight: 1 }}></CalendarMonthIcon>
                          <span style={{ paddingRight: 17 }}> {moment(items.dateTime).format('YYYY-MM-DD')}</span>
                        </Typography>
                      </Grid>

                      <div style={{ "padding-left": "30px" }}>
                        <div>
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 2 }}
                          >
                            {items.title}
                          </Typography>
                        </div>

                        <div style={{ maxHeight: '170px', overflowY: 'auto' }}>
      {/* Adjust maxHeight value according to your need */}
      <Typography variant="h2" sx={{ fontSize: 17, mb: 1, width: '90%' }}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={items.description} />
      </Typography>
    </div>
                      </div>

                      <Grid>
                        <Link to={items.button} target="_blank" style={{ textDecoration: 'none' }}>
                          <Button
                            width="150"
                            height="20"
                            variant="contained"
                            disableElevation
                            sx={{
                              ml: 3, mb: 4, mt: 2, color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                              backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                              '&:hover': {
                                fontWeight: 700,
                                backgroundColor: appTheme.palette.primary.green3,
                                color: appTheme.palette.primary.white,
                                transition: "all 0.3s ease",
                              },
                            }}>
                            Learn More
                          </Button>
                        </Link>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>



          }














          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
