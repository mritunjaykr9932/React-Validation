import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidenavbar';
import Jobs from './Pages/Jobs';
import Analytics from './Pages/Analytics';
import Home from './Pages/Home';
import SideBar from './components/SideBar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path='/analytics' element={<Analytics/>}/>
          
        </Routes>
        
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
