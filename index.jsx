import { createRoot } from "react-dom/client";
import { Route } from "react-router-dom";
import { CheckoutPage } from "./Checkout.jsx";
import { FailPage } from "./Fail.jsx";
import "./style.css";
import { SuccessPage } from "./Success.jsx";

import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/sandbox">
        <Route index element={<CheckoutPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="fail" element={<FailPage />} />
      </Route>
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
