import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/home/Home";
import LatestNews from "./pages/latest-news/LatestNews";
import PopularNews from "./pages/popular-news/PopularNews";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='popular-news' element={<PopularNews/>}/>
            <Route path='latest-news' element={<LatestNews/>}/>
          </Route>
        </Routes>
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
