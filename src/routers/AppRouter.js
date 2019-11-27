import React from 'react';
import { BrowserRouter, Route, Switch, Link  } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => {

const stylePages = {
    maxWidth: '60rem',

    margin: '0 auto',
    padding: '3rem 0 0 0',
    padding: '0 $m-size',
    height: '50rem',
    fontSize: '2em',
    textAlign:'center',
    fontWeight: 500,
}  
 

//pages Our Company
const AboutUs = () => (
        <div style={stylePages}>
            <p> This is from my component About Us Page</p>
            <Link to="/">Go home</Link>
        </div>
);

const BlogPage = () => (
    <div style={stylePages}>
        <p>Blog Page</p>
        <Link to="/">Go home</Link>
    </div>
);

const Contact = () => (
    <div style={stylePages}>
        <p>Contact Us Page</p>
        <Link to="/">Go home</Link>
    </div>
);

const HiringPage = () => (
    <div style={stylePages}>
        <p>We are Hiring Page</p>
        <Link to="/">Go home</Link>
    </div>
);

const TermsOfService = () => (
    <div style={stylePages}>
        <p>Terms of Service Page</p>
        <Link to="/">Go home</Link>
    </div>
);

//Pages Our hubgets
const CurrentStatus = () => (

        <div style={stylePages}>
            <p>This is from my component Current Status Page</p>
            <Link to="/">Go home</Link>
        </div>        
 );    
 
 const Features = () => (
    <div style={stylePages}>
        <p>Features Page</p>
        <Link to="/">Go home</Link>
    </div>
);

const ProgramHubgets = () => (
    <div style={stylePages}>
        <p>Join The Program Page</p>
        <Link to="/">Go home</Link>
    </div>
);



return(

    <BrowserRouter>
        <div> 
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about" component={AboutUs} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/hiring" component={HiringPage} />
                <Route path="/terms" component={TermsOfService} />
                <Route path="/contact" component={Contact} />
                <Route path="/program" component={ProgramHubgets} />
                <Route path="/features" component={Features} />
                <Route path="/status" component={CurrentStatus} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)};

export default AppRouter;