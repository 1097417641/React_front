import { Route,Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

function App() {
  return (
    <div className="App" style={{height:'100%'}}>
      <Routes>
       
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
