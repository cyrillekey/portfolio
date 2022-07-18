
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Index from './Pages';
import SingleProject from './Pages/SingleProject';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/project/:id' element={<SingleProject/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
