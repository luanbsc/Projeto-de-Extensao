import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import EmailsByCategory from "./Pages/EmailsByCategory/EmailsByCategory";
import EmailDetail from "./Pages/EmailDetail/EmailDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/emailsbycategory" element={<EmailsByCategory />} />
        <Route path="/email/:id" element={<EmailDetail />} />
      </Routes>
    </BrowserRouter>
  );
}