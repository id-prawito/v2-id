import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "../config/GlobalStyles";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../config/ThemeContext";
import RoutesSite from "../config/RouterSite";

import "./app.scss";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
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
