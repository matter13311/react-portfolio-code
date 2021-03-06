import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Matthew Liang',
      headerLinks: [
        { title: 'Home', path: '/react-portfolio'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Hello, I\'m Matt!',
        subTitle: 'I\'m an aspiring fullstack developer.',
        gitHubLink: 'https://github.com/matter13311?tab=repositories',
        linkendinLink: 'https://www.linkedin.com/in/matthew-liang-854637169/'
      },
      about: {
        title: 'Who\'s Matt?',
      },
      contact: {
        title: 'Let\'s talk',
      }
    }
  }

  render(){
    return (
        <Router>
          <Container className = "p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Matthew Liang</Navbar.Brand>

              <Navbar.Toggle  className="border-0" aria-controls="navbar-toggle"/>

              <Navbar.Collapse id="navbar_toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/react-portfolio">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/react-portfolio" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} gitHubLink={this.state.home.gitHubLink} linkendinLink={this.state.home.linkendinLink}/>} />
            <Route path="/about" render={()=> <AboutPage title={this.state.about.title}/>} />
            <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title}/>} />
            <Route path="/resume" render={()=> <ResumePage />} />
          


          </Container>
        </Router>
      );
  }
}

export default App;
//things to add:
//3. add projects
//4. add button look for demo or code.
//5. add PDF thing so that it can be viewed on the phone

//git status, git add ., git commit -m "", npm run deploy
