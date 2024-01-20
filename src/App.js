
import './App.css';
import ToastNotification from './components/ToastNotification';
import Products from './components/products/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editproduct from './components/edit/Editproduct';

function App() {
  // let { id } = useParams();
  // const router= createBrowserRouter([
  //   {path: "/", element: <Products/>, children:[
  //     {path : 'editproduct/:id' , element : <Editproduct/>}
  //   ]}
  // ]);
  return (
     
    //  <RouterProvider router={router}>
    //   <Products/>
    //   <ToastNotification/>
    //  </RouterProvider>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/editproduct/:id' element={<Editproduct/>}></Route>
      </Routes>
      <ToastNotification/>
    </BrowserRouter>
  );
}

export default App;
