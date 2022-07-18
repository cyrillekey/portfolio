
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Index from './Pages';
import SingleProject from './Pages/SingleProject';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/project/:id' element={<SingleProject/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
