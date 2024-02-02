import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Image, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function DreamTeam(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Board of Directors </h2>

            <Row style = {{textAlign:"center", marginTop:50}}>
                <Col span={12} offset={6}>
                  <body>
                    BiGAUSTIN values both cultural and economic diversity. 
                    The Board of Directors represents the diversity of the community we serve, and contributes a depth and 
                    breadth of business and financing experience. The Board consists of small business owners, corporate 
                    representatives, attorneys, bankers and small business owners.
                  </body>
                </Col>
              </Row>
            
            <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[16,70]}>
                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Cameron Williamson</h2>
                    <body>Founder</body>
                </Col>
            </Row>
      </div>

      <div style = {{backgroundColor:"#3D4451", textAlign:"center", marginTop:100, color:"white"}}>
        
        <Row style = {{textAlign:"center", marginTop:50}}>
            <Col span={12} offset={6}>
              <h2 style = {{marginTop:50, color: "white"}}> Dream Team </h2>
              <body style = {{color: "white"}}>
              "Individual commitment to a group effort--that is what makes a team work, a company work, 
              a society work, a civilization work." --Vince Lombardi
              <br/><br/>
              Empowering small business through education and investment, igniting community growth.  
              <br/><br/>
              Our continued success could not be possible without the support of our staff, 
              on-site contractors, as well as our volunteer teachers, mentors, interns and volunteers, 
              who, by their commitment to our mission, help Central Texas businesses thrive every day.  
              </body>
            </Col>
          </Row>

        <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[16,70]}>
            <Col span={4} offset = {6}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
                <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
                <body style = {{color: "white"}}>Founder</body>
            </Col>

            <Col span={4} offset = {6}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
                <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
                <body style = {{color: "white"}}>Founder</body>
            </Col>

            <Col span={4} offset = {6}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
              <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
              <body style = {{color: "white"}}>Founder</body>
            </Col>
            <Col span={4}>
                <img 
                width={150}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style = {{borderRadius:"50%"}}
                />
                <h2 style = {{fontSize: 20, color: "white"}}>Cameron Williamson</h2>
                <body style = {{color: "white"}}>Founder</body>
            </Col>
          </Row>
         <br/><br/>
      </div>
      <BottomBar/>
    </div>

    
    
  )
}
