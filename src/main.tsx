import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const rootContainer = document.querySelector("#root");
if (rootContainer) {
    const root = ReactDomClient.createRoot(rootContainer);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
