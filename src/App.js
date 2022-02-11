import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home'
import Search from './pages/search/search'
import Kg from './pages/kg/kg'
import List from './pages/search/list' 
import AddDocument from './pages/search/add-docuemnt';

import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ height: '100%' }}>
        <Routes>
          <Route path='/' element={<Admin />}>
            <Route path="login" element={<Login />} />
            <Route path='home' element={<Home />} />
            <Route path='search' element={<Search />}>
              <Route path='document' element={<List />}></Route> 
            </Route>
            <Route path='search/addDocument' element={<AddDocument />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
