import { BrowserRouter,Routes,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { categorias } from './components/Productos/Productos';


function App() {

  return (
    <BrowserRouter className="App">
      <NavBar categorias={categorias} />
      <Routes>
      <Route exact path='/' element={<ItemListContainer />}/>
      <Route exact path='/category/:id' element={<ItemListContainer />}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
