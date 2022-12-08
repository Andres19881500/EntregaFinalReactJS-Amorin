import { BrowserRouter,Routes,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
      <Route exact path='/' element={<ItemListContainer />}/>
      <Route exact path='/category/:id' element={<ItemListContainer />}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
