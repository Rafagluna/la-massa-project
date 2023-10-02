// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import Services from './componentes/Services';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/servicos" element={<Services />} />
    </Router>
  );
};

export default AppRouter;
