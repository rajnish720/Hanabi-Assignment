import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import UserForm from './components/UserForm'
import ResultPage from './components/ResultPage';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/user-form' element={<UserForm/>}></Route>
      <Route path='/result' element={<ResultPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
