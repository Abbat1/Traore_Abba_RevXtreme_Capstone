
import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the application
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import { ContextProvider } from './store/ContextProvider'; // Import ContextProvider for state management

// Render the application to the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  // Enable strict mode for highlighting potential problems in the application
  <React.StrictMode>
    {/* Provide the context to the entire application */}
    <ContextProvider>
      {/* Enable routing in the application */}
      <BrowserRouter>
        {/* Render the main App component */}
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
);