import Home from "./pages/home/Home";
import "./app.css";
import About from "./pages/About/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/register/Register";
import ContactUs from '../src/pages/contactUs/ContactUs'
import Main from "./pages/preloader/Main";
import ITabout from './pages/ITabout/ITabout'
import Study from './pages/study AB/Study'


function App() {
  return(
    <>
    <BrowserRouter>
     <Routes>
        <Route index element={<Main/>}/>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/aboutIT" element={<ITabout/>}/>
        <Route path="/studyAbroad" element={<Study/>}/>
     </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
