import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {DndProvider} from "react-dnd";
import {ThemeProvider} from "@emotion/react";
import {createTheme, CssBaseline} from "@mui/material";
import {HTML5Backend} from "react-dnd-html5-backend";
const theme = createTheme();
ReactDOM.render(
  <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <main>
                  <Router>
                      <App />
                  </Router>
              </main>
          </ThemeProvider>
      </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
