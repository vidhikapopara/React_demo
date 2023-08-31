import React from "react";
import Twitter from "./admin/User";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/admin/twitter" exact element={<Twitter />} />
          {/* <Route
            path="/admin/products/create"
            exact
            element={<ProductCreate />}
          />
          <Route
            path="/admin/products/:id/edit"
            exact
            element={<ProductEdit />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
