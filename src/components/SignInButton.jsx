import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import MicrosoftLogin from "react-microsoft-login";

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <MicrosoftLogin className="logout" clientId={process.env.REACT_APP_CLIENT_ID} authCallback={() => handleLogin("popup")} />
    );
}