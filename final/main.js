import "./style.css";
import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

const app = document.getElementById("app");
const loginBtn = document.getElementById("btn-siwa");

const loginSIWA = async () => {
    account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173",
        "http://localhost:/5173/fail"
    );
};

const init = async () => {
    try {
        const user = await account.get();
        app.innerHTML = `<h3>Hi ${user.name || user.email} 👋</h3>`;
    } catch (error) {
        console.error(error);
    }
};

init();

loginBtn.addEventListener("click", loginSIWA);
