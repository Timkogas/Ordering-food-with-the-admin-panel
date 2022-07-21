import Layout from "./components/Layout/Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Dishes from './containers/Dishes/Dishes'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout/>}>
            <Route path='/'element={<Dishes/>} />
            <Route path='/orders'element={<Orders/>}/>
          </Route>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;