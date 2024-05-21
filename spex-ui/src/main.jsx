import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FeedbackProvider} from "./context/Feedback.jsx";
import {UserProvider} from "./context/User.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
      </UserProvider>
  </React.StrictMode>,
)
