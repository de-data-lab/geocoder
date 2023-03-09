import { UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import "../App.css";
import 'bulma/css/bulma.css';
import Logo from "../Geo_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthenticatedTemplate } from "@azure/msal-react";

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
                        <img src={Logo} width="112" height="28" alt=""/>
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
                                            <FontAwesomeIcon icon={faUser} color="#00d1b2" />
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
        <div className="section">
            <div className="columns">
                
                

                <main className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title">{props.hasUploaded ? "You file has been uploaded successfully." : "You can upload a file now."}</div>
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

const Instruction = () => {
    return (
        <div className="section">
            <div className="columns">
                <main className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title">Instruction</div>
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
                                1. Login with your email. 
                            </div>
                            <div className="b">
                                2. Upload a ".csv", ".xls", or ".xlsx" file where the first line is a name like "addresses" and the other lines are addresses.
                            </div>
                            <div className="b">
                                3. You will receive email confirmation that your file has been received and is being processed. 
                            </div>
                            <div className="b">
                                4. The geolocated addresses will be emailed to you as a ".zip" file when they are ready. 
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
            <UnauthenticatedTemplate>
                <Instruction />
            </UnauthenticatedTemplate>

        </>
    );
};

/**
 * 
 * 
 * 
 * 
 * 

<aside className="column is-2">
                    <nav className="menu">
                        <p className="menu-label">
                            General
                        </p>
                        <ul className="menu-list">
                            <li><a className="is-active has-background-primary" href="https://de-data-lab.github.io/geolocator/">Upload</a></li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 1</a></li>
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 0</a></li>
                            <li>
                                <a href="https://de-data-lab.github.io/geolocator/" className="">Option 1</a>
                                <ul>
                                    <li><a href="https://de-data-lab.github.io/geolocator/">SubOption 0</a></li>
                                    <li><a href="https://de-data-lab.github.io/geolocator/">SubOption 1</a></li>
                                    <li><a href="https://de-data-lab.github.io/geolocator/">SubOption 2</a></li>
                                </ul>
                            </li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 2</a></li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 3</a></li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 4</a></li>
                        </ul>
                        <p className="menu-label">
                            Accout
                        </p>
                        <ul className="menu-list">
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 0</a></li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 1</a></li>
                            <li><a href="https://de-data-lab.github.io/geolocator/">Option 2</a></li>
                        </ul>
                    </nav>
                </aside>



 */