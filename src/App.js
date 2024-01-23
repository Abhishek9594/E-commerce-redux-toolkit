
import './App.css';
import Products from './components/Products';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'
import DashBoard from './components/DashBoard';
import RootLayout from './components/RootLayout';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    )
  )
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
