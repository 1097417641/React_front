import { Layout } from 'antd';
import Header from './compontents/Header'
import Content from './compontents/Content'
import Footer from './compontents/Footer'
import { Route,Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

function App() {
  return (
    <div className="App" style={{height:'100%'}}>
      <Routes>
        <Route path='/' element={<Admin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
