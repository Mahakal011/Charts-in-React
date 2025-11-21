import React from "react";
import ReactDOM from "react-dom/client";
import  App  from "./App.jsx";
import "./index.css";
import { IntlProvider } from 'react-intl'

const messagesInEnglish = {
  "hi": "Hi"
};

const locale = 'en'; 
const messages = locale === 'en' ? messagesInEnglish : messagesInHindi;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
    
  </React.StrictMode>
);
