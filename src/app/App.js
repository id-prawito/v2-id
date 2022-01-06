import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import RoutesSite from "../config/RouterSite";
import GlobalStyles from "../config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../config/ThemeContext";
import "./app.scss";
import { useContext } from "react";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter basename="v2-id">
            <Route>
                <ThemeProvider theme={{ theme }}>
                    <GlobalStyles />
                    <Header />
                    <RoutesSite />
                    <Footer />
                </ThemeProvider>
            </Route>
        </BrowserRouter>
    );
}

export default App;
