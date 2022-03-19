import React, { useEffect, useState, lazy } from "react";
import { useRoutes, Outlet } from "react-router-dom";
/* import { currentAdmin } from "../../connectBackend/auth"; */
import Home from './pages/Home';
import Irrigration from "./pages/Irrigration";
import Fertilizers from './pages/Fertilizers'
// auth


export const Routes = ({ isProtected }) => {
  /* const object = isProtected; */
  /* console.log("isProtected", object); */
  const [isAdmin, setIsAdmin] = useState(false);

/*   useEffect(() => {
  
    if (isProtected && isProtected.token) {
      currentAdmin(isProtected.token)
        .then((res) => {
        
          setIsAdmin(true);
        })
        .catch((err) => {
         
          setIsAdmin(false);
        });
    }
  }, [isProtected]); */

  let routes = useRoutes([
    /*   { path: "/", element: <Home /> },
    { path: "/login", element: <TestLogin /> },
    { path: "/register", element: <Register /> },
    { path: "/register/complete", element: <RegisterComplete /> },
    { path: "/forgot/password", element: <ForgotPassword /> },
    {
      path: "/user",
      element: isProtected !== null ? <Outlet /> : <LoadingToRedirect />,
      children: [
        { path: "/user/history", element: <History /> },
        { path: "/user/password", element: <Password /> },
        { path: "/user/wishlist", element: <Wishlist /> },
        { path: "/user/checkout", element: <CheckOut /> },
        { path: "/user/payment", element: <Payment /> },
      ],
    },
    {
      path: "/admin",
      element: isAdmin ? <Outlet /> : <LoadingToRedirect />,
      children: [
        { path: "/admin/dashboard", element: <AdminDashBoard /> },
        { path: "/admin/orders", element: <OrdersAdmin /> },
        { path: "/admin/category/:slug", element: <UpdateCategory /> },
        { path: "/admin/category", element: <Category /> },
        { path: "/admin/subcategory", element: <SubCategory /> },
        { path: "/admin/subcategory/new", element: <AddSubCategory /> },
        { path: "/admin/subcategory/:slug", element: <UpdateSubCategory /> },
        { path: "/admin/product/new", element: <CreateProductAdmin /> },
        { path: "/admin/products", element: <ListProducts /> },
        {
          path: "/admin/products/update/:slug",
          element: <UpdateProductAdmin />,
        },
        { path: "/admin/coupon/new", element: <CreateCouponPage /> },
        { path: "/admin/sales", element: <SalesPage /> },
        { path: "/admin/pickuporders", element: <PickupOrders /> },
      ],
    },
    // product routes
    { path: "/product/:slug", element: <ProductDetail /> },

    // ...
    // category routes
    { path: "/category/:slug", element: <CategoryHome /> },
    //subcategory products
    { path: "/subcategory/:slug", element: <SubProducts /> },

    // search
    { path: "/shop?", element: <SearchProduct /> },
    { path: "/shop", element: <Shop /> },
    { path: "/cart", element: <Cart /> }, */
    { path: "/", element: <Home /> },
    { path: "/irrigration", element: <Irrigration /> },
    { path: "/fertilizers", element: <Fertilizers /> },
  ]);
  return routes;
};
