import { Footer, Header } from "./components";
import { Blog, Home, Login, Signup, SmartVendors } from "./pages"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import { ToastContainer } from "react-toastify";
import MyStore from "./pages/myStore/MyStore";
import Eshop from "./pages/eshop/Eshop";
import ProductDisplay from "./pages/productDisplay/ProductDisplay";
import EshopCart from "./pages/eshopCart/EshopCart";
import NoCodeReg from "./pages/auth/NoCodeReg";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { salesdata } from "./redux/slice/AdminSlice";
import { useEffect, useState } from "react";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Statistics from "./pages/admin/Statistics";
import EshopCategory from "./pages/eshopCategory/EshopCategory";
import SearchResult from "./pages/searchResult/SearchResult";
import { ADD_TO_CART, myCart } from "./redux/slice/CartSlice";
import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { selectuserId } from "./redux/slice/AuthSlice";

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


  const SetNeccesaryData = async ()=>{
    if (UserId){
      const docRef = doc(db, "users", UserId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const userCart = docSnap.data().cart
        dispatch(ADD_TO_CART(...userCart))
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }
  useEffect(()=>{
    SetNeccesaryData()
  }, [UserId, CART])

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
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.scss";
// import { Home, Contact, Admin } from "./pages";
// import { Footer, Header } from "./components";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Reset from "./pages/auth/Reset";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <ToastContainer />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/contact" element={<Contact />}/>
//         <Route path="/login" element={<Login />}/>
//         <Route path="/register" element={<Register />}/>
//         <Route path="/reset" element={<Reset />}/>
//         <Route path="/admin/*" element={<AdminOnlyRoute><Admin /></AdminOnlyRoute> }/>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;
