import { UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import "../App.css";
import 'bulma/css/bulma.css';
import Logo from "../Geo_logo.png";
import Login from "../login.png";
import Upload from "../upload.png";
import Confirmation from "../confirmation.png";
import Result from "../result.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { fa4 } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatedTemplate } from "@azure/msal-react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from "react";


/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */


const Header = (props) => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://de-data-lab.github.io/geolocator/">
                        <img src={Logo}  alt="" />
                    </a>

                    <a role="button" href="https://de-data-lab.github.io/geolocator/" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item is-hoverable" href="https://de-data-lab.github.io/geolocator/">
                            Home
                        </a>

                        <a className="navbar-item is-hoverable" href="https://de-data-lab.github.io/geolocator/">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="https://de-data-lab.github.io/geolocator/">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="https://de-data-lab.github.io/geolocator/">
                                    About
                                </a>
                                <a className="navbar-item" href="https://de-data-lab.github.io/geolocator/">
                                    Contact
                                </a>
                                <a className="navbar-item" href="https://de-data-lab.github.io/geolocator/">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {isAuthenticated ?
                                    <button className="button">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faUser} color="#0057B8" />
                                        </span>
                                        <span>{props.name}</span>
                                    </button>
                                    :
                                    <div className="button is-primary" style={{backgroundColor: "#0057B8"}}>
                                        <strong>Sign up</strong>
                                    </div>}

                                <div className="button is-light">
                                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const Main = (props) => {
    

    return (
        <div className="section">
            <div className="columns">
                <main className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title"></div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button type="button" className="button is-small">
                                    Beta version
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="b">
                                {props.children}
                            </div>
                        </div>




                    </div>


                </main>
            </div>
            
        </div>
    )
}

const Image = (props) => {
    return (
        <img src={props.src} style={{marginTop: "30px"}} />
    )
}

const Instruction = () => {
    return (
        <div className="section">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0057B8', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0057B8' }}
                    iconStyle={{ background: '#0057B8', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={fa1} />}
                >
                    <h3 className="vertical-timeline-element-title">LOGIN</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        Login with your email.
                    </p>
                    <Image src={Login} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0057B8', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0057B8' }}
                    iconStyle={{ background: '#0057B8', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={fa2} />}
                >
                    <h3 className="vertical-timeline-element-title">UPLOAD</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        Upload a ".csv", ".xls", or ".xlsx" file where the first line is a name like "addresses" and the other lines are addresses.
                    </p>
                    <Image src={Upload} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0057B8', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0057B8' }}
                    iconStyle={{ background: '#0057B8', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={fa3} />}
                >
                    <h3 className="vertical-timeline-element-title">CONFIRMATION</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        You will receive email confirmation that your file has been received and is being processed. 
                    </p>
                    <Image src={Confirmation} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0057B8', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0057B8' }}
                    iconStyle={{ background: '#0057B8', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={fa4} />}
                >
                    <h3 className="vertical-timeline-element-title">RESULT</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        The geocoded addresses will be emailed to you as a ".zip" file when they are ready. 
                    </p>
                    <Image src={Result} />
                </VerticalTimelineElement>
                
            </VerticalTimeline>

        </div>
    )
}


export const PageLayout = (props) => {
    
    return (
        <>
            <Header {...props} />
            <AuthenticatedTemplate>
                <Main {...props} />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Instruction />
            </UnauthenticatedTemplate>
        </>
    );
};








