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
                                <span>{props.name}</span>
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
        <div class="section">
            <div class="columns">
                <aside class="column is-2">
                    <nav class="menu">
                        <p class="menu-label">
                            General
                        </p>
                        <ul class="menu-list">
                            <li><a class="is-active has-background-primary">Upload</a></li>
                            <li><a>Option 1</a></li>
                        </ul>
                        <p class="menu-label">
                            Administration
                        </p>
                        <ul class="menu-list">
                            <li><a>Option 0</a></li>
                            <li>
                                <a class="">Option 1</a>
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
                        <p class="menu-label">
                            Accout
                        </p>
                        <ul class="menu-list">
                            <li><a>Option 0</a></li>
                            <li><a>Option 1</a></li>
                            <li><a>Option 2</a></li>
                        </ul>
                    </nav>
                </aside>

                <main class="column">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <div class="title">Upload</div>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item">
                                <button type="button" class="button is-small">
                                    Some Information/button Here
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="columns is-multiline">
                        <div class="column">
                            <div class="b">
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
            <Main {...props} />
            <br />
            <br />

        </>
    );
};

