import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home} from "../Pages/Home"
import { Product} from "../Pages/Product"
import { About} from "../Pages/About"
import { Contact} from "../Pages/Contact"
import { Signup} from "../Pages/Signup"
import { Login} from "../Pages/Login"
import { ProductDetails} from "../Pages/ProductDetails"
import { PageNotFound } from '../Pages/PageNotFound'
import { PrivateRoute } from './PrivateRoute'
import { Cart } from '../Pages/Cart'
export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/products" element={<Product/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/cart" element={ <PrivateRoute><Cart/> </PrivateRoute>   }></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/shoppingcart' element={<PrivateRoute> <Cart/> </PrivateRoute>}></Route>
        <Route path="/products/:product_id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
              
          </Routes>
    </div>
  )
}
