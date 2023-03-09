import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";


/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            console.log("count login");
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        /*<MicrosoftLogin className="logout" clientId={process.env.REACT_APP_CLIENT_ID} authCallback={() => handleLogin("popup")} />*/
        <div onClick={() => handleLogin("popup")}>Sign in</div>
    );
}