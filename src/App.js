import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
//import Authentication from './routes/authentication/authentication.component';


const Navigation = () => {
  <div>
    <div>
      return <h1>I am The Navigation Bar</h1>
    </div>
    <Outlet />
  </div>

}

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />

      </Route>
    </Routes>
  );
};

export default App;
