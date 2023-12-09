import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProdDetails from "../Pages/ProdDetails/ProdDetails";
import UpdateProd from "../Pages/UpdateProd/UpdateProd";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'add-product',
                element: <PrivateRoute> <AddProduct /> </PrivateRoute>
            },
            {
                path: 'cart',
                element: <PrivateRoute> <MyCart /> </PrivateRoute>,
                loader: ()=> fetch('https://brew-bite-server.vercel.app/user/cart')
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/products/:brand',
                element: <BrandProducts />,
                loader: ({params})=> fetch(`https://brew-bite-server.vercel.app/products/${params.brand}`)
            },
            {
                path: '/products/:brand/:prodName',
                element: <PrivateRoute> <ProdDetails /> </PrivateRoute>,
                loader: ({params})=> fetch(`https://brew-bite-server.vercel.app/products/${params.brand}/${params.prodName}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <UpdateProd /> </PrivateRoute>,
                loader: ({params})=> fetch(`https://brew-bite-server.vercel.app/productsId/${params.id}`)
            }
        ]
    }
])

export default Routes;