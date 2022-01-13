import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/ThemeContext";
import RoutesSite from "../config/RouterSite";

import "./app.scss";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter basename="v2-id">
            <Route>
                <ThemeProvider theme={{ theme }}>
                    <GlobalStyles />
                    <RoutesSite />
                </ThemeProvider>
            </Route>
        </BrowserRouter>
    );
}

export default App;
