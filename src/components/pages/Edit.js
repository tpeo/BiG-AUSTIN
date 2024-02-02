import React from "react";
import { Typography } from 'antd';
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const { Title} = Typography;

export default function About(props) {
  return (
    <div style= {{position: "relative", height: "100vh"}}>
      <div className="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, textAlign:"center", justifyContent:"center", height: "500px"}}>
           <NavBar/>
            <Row style = {{marginBottom: 100}}>
              <Col span={14} offset={5}>
                <Title style = {{color:"white", fontSize: 50, fontWeight: "bold", marginTop:150}}> 
                  About BiG Austin
                </Title>
              </Col>
            </Row>
            
        </div>
        
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
        <Row>
          <Col span={12} offset={6}>
            <h2>Vision Statement</h2>
            <body>
                BiGAUSTIN provides fair access to capital, resources to build small businesses, 
                tools to attain livable wages, and quality affordable housing.  
            </body>
          </Col>
        </Row>
      </div>

      <div style = {{marginTop:100, marginBottom: 100}}>
        <Row gutter = {[50,100]}>
          <Col span={6} offset={6}>
            <h2>Our Mission</h2>
            <body>
            Empowering underserved Texans to excel and prosper through education, counseling, and capital.
            <br/><br/>
            BiGAUSTIN, an Austin-based CDFI, has been at the intersection of economic and community development 
            in Central Texas for nearly three decades. Focused on a combination of small business and workforce 
            development efforts, we provide solutions and create financial strength for women, minorities, and 
            clients facing systemic inequalities. We remain proudly committed to building healthy, sustainable 
            communities and value efforts that lead to the creation of equitable economic participation.
            </body>
          </Col>
          <Col span={6}>
            <img
            width = {400}
            src={require('../images/chelleneffe.png')} 
            style = {{marginTop:20}}
            />
          </Col>

          <Col span={6} offset={6}>
            <img
            width = {400}
            src={require('../images/chelleneffe.png')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={6}>
            <h2>Our History</h2>
            <body>
            Empowering underserved Texans to excel and prosper through education, counseling, and capital.
            <br/><br/>
            BiGAUSTIN, an Austin-based CDFI, has been at the intersection of economic and community development 
            in Central Texas for nearly three decades. Focused on a combination of small business and workforce 
            development efforts, we provide solutions and create financial strength for women, minorities, and 
            clients facing systemic inequalities. We remain proudly committed to building healthy, sustainable 
            communities and value efforts that lead to the creation of equitable economic participation.
            </body>
          </Col>
          
        </Row>
      </div>

    <BottomBar/>
    </div>

    
    
  )
}
