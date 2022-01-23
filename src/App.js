import { Route,Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home'
import Search from './pages/search/search'
import Kg from './pages/kg/kg'
import List from './pages/search/List'


function App() {
  return (
    <div className="App" style={{height:'100%'}}>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Admin/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='search' element={<Search/>}>
            <Route path=':value' element={<List/>}></Route>

          </Route>
          <Route path='relation' element={<Kg/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
