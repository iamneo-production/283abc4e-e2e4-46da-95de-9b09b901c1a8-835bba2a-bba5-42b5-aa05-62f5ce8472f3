
import './App.css';
import { useEffect} from 'react';
import { Routes, useLocation, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/MainPage';
import Dashboard from './Components/DashBoard/DashBoard';
import MyAccount from './Components/DashBoard/Pages/MyAccount/MyAccount';
import Projects from './Components/DashBoard/Pages/Projects/Projects';
import AboutUs from './Components/AboutUs/AboutUs';
import Events from './Components/Events/Events';
import National from './Components/National/National';
import Vote from './Components/Vote/Vote';
import Terms from './Components/DashBoard/Pages/Terms/Terms';
import Privacy from './Components/DashBoard/Pages/Privacy/Privacy';
import Faq from './Components/DashBoard/Pages/Faq/Faq';
const ScrolltoTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrolltoTop/>
        <Logobar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='myaccount' element={<MyAccount/>}/>
              <Route path='projects' element={<Projects/>}/>
          </Route>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/event' element={<Events/>}/>
              <Route path='/nation' element={<National/>}/>
              <Route path='/vote' element={<Vote/>}/>
              <Route path='/terms' element={<Terms/>}/>
              <Route path='/privacy' element={<Privacy/>}/>
              <Route path='/faq' element={<Faq/>}/>
            
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
