import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Purchase } from "./pages/Purchase";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
