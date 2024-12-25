import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import './App.css';


function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
