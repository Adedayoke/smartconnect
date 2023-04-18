import "./App.scss"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "./components";
import { Blog, EshopCart, Home, Login, Signup, SmartVendors, ProductDisplay, Eshop, SearchResult, EshopCategory, MyStore } from "./pages"; 
import { NoCodeReg } from "./pages/auth";
import { Admin, Dashboard, Orders, Products, Statistics } from "./pages/admin";

import { salesdata } from "./redux/slice/AdminSlice";
import { ADD_TO_CART, myCart } from "./redux/slice/CartSlice";
import { selectuserId } from "./redux/slice/AuthSlice";

import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const Salesdata = useSelector(salesdata)
  const UserId = useSelector(selectuserId)
  const CART = useSelector(myCart)
  const dispatch = useDispatch()
  const [UserData, setUserData ] = useState({
    labels: Salesdata.map((data) => data.year),
    datasets: [{
      label: "Users gained",
      data: Salesdata.map((data) => data.userGain),
      backgroundColor: "#08091b",
      borderRadius: 10,
    }]
  })
  const ID = UserId
  console.log(ID)
  const SetNeccesaryData = async ()=>{
    if (UserId){
      const docRef = doc(db, "users", UserId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userCart = docSnap.data().cart
        console.log(userCart)
        if(userCart.length !== 0){
          dispatch(ADD_TO_CART(...userCart))
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }
  useEffect(()=>{
    SetNeccesaryData()
  }, [ID])

  return (
    <div className="App">
      <>
    <BrowserRouter>
    <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/store" element={<Eshop />}>
          <Route path="" element={<MyStore />} />
          <Route path='products/:id' element={<ProductDisplay/>}/>
          <Route path="cart" element={<EshopCart />} />
          <Route path=":category" element={<EshopCategory />} />
          <Route path="results" element={<SearchResult />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard data={UserData} />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders data={UserData} />} />
          <Route path="statistics" element={<Statistics data={UserData} />} />
        </Route>
        <Route path="/coupon-merchants" element={<SmartVendors />} />
        <Route path="/no-code-signup" element={<NoCodeReg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;