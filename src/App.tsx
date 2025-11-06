import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import EmailsByCategory from "./Pages/EmailsByCategory/EmailsByCategory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/emailsbycategory" element={<EmailsByCategory />} />
      </Routes>
    </BrowserRouter>
  );
}