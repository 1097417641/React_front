import { Route,Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home'
import Search from './pages/search/search'
import Kg from './pages/kg/kg'
import List from './pages/search/List'
import RelationKG from './pages/kg/charts/relations'
import Qa from './pages/qa/qa'

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
          <Route path='relation' element={<Kg/>}>
            <Route path=':value' element={<RelationKG/>}></Route>
          </Route>
          <Route path='qa' element={<Qa/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
