import './style/App.css';
import FormulaireListe from './Component/FormulaireListe';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Fruits from './Component/Fruits';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<FormulaireListe />} />
        <Route path='/fruits' element={ <Fruits /> } />
      </Routes>
    </>
  );
}

export default App;
