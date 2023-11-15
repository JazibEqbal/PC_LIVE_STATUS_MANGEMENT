import React from "react";
import PCStatus from "./pages/PCStatus";
import { PCInstanceProvider } from './context/pcContext';
import PCInstance from "./lib/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  const pcInstance = new PCInstance(process.env.REACT_APP_BACKEND_URL);
  return (
    <PCInstanceProvider value={{ pcInstance }}>
      <Router>
        <div>
          <main className="py-3">
            <Container>
              <Routes>
                <Route path="/" element={<PCStatus />} exact />
              </Routes>
            </Container>
          </main>
        </div>
      </Router>
    </PCInstanceProvider>
  );
};

export default App;
