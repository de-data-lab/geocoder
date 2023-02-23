import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import "../App.css";
import 'bulma/css/bulma.css';
import Logo from "../Geo_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */


const Header = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" >
                        <img src={Logo} width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <a className="navbar-item">
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
                                        <FontAwesomeIcon icon={faUser} color="red" />
                                    </span>
                                <span>Yupeng Lei</span>
                              </button>
                                : 
                                <div className="button is-primary">
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
                <aside className="column is-2">
                    <nav className="menu">
                        <p className="menu-label">
                            General
                        </p>
                        <ul className="menu-list">
                            <li><a className="is-active has-background-primary">Upload</a></li>
                            <li><a>Option 1</a></li>
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a>Option 0</a></li>
                            <li>
                                <a className="">Option 1</a>
                                <ul>
                                    <li><a>SubOption 0</a></li>
                                    <li><a>SubOption 1</a></li>
                                    <li><a>SubOption 2</a></li>
                                </ul>
                            </li>
                            <li><a>Option 2</a></li>
                            <li><a>Option 3</a></li>
                            <li><a>Option 4</a></li>
                        </ul>
                        <p className="menu-label">
                            Accout
                        </p>
                        <ul className="menu-list">
                            <li><a>Option 0</a></li>
                            <li><a>Option 1</a></li>
                            <li><a>Option 2</a></li>
                        </ul>
                    </nav>
                </aside>

                <main className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title">Upload</div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button type="button" className="button is-small">
                                    Some Information/button Here
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


export const PageLayout = (props) => {


    return (
        <>
            <Header {...props} />
            <AuthenticatedTemplate>
                <Main {...props} />
            </AuthenticatedTemplate>
            <br />
            <br />

        </>
    );
};

