import React from "react";
import CreateProject from "./pages/CreateProject";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateProject />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
