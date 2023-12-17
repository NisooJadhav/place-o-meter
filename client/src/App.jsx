import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Students from "./components/Students";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AdminAuth from "./components/AdminAuth";
import AllStudents from "./components/AllStudents";
import Eligible from "./components/Eligible";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Students />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          {/* // http://localhost:3000/edit-student/1 */}
          {/* <Route path="/edit-student/:id" element={<Students />}></Route> */}

          <Route path="/admin" element={<AdminAuth />}></Route>
          <Route path="/all" element={<AllStudents />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/eligible" element={<Eligible />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;