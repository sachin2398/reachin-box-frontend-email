
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login"
import MainEmailPage from "./pages/Main-Email-Page/MainEmailPage";

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Login />} />
      <Route path='/user' element={ <MainEmailPage/>} />
   </Routes>
   
  
  );
}

export default App;
