import { useMsal } from "@azure/msal-react";
import 'bulma/css/bulma.min.css';

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/geolocator",
                mainWindowRedirectUri: "/geolocator" // redirects the top level app after logout
            });
        }
    }

    return (
        <div  onClick={() => handleLogout("popup")}>Sign out</div>
    );

}