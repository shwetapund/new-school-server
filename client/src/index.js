import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home';
import Addproduct from './views/AddProduct/AddProduct';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/addproduct',
        element:<Addproduct/>
    }
])

root.render(
    <RouterProvider router={router}/>
)