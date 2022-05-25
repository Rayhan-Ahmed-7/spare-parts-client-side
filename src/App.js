import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import AddSpareParts from './Pages/Dashboard/AdminComponents/AddSpareParts';
import ManageOrders from './Pages/Dashboard/AdminComponents/ManageOrders';
import ManageSpareParts from './Pages/Dashboard/AdminComponents/ManageSpareParts';
import ManageUsers from './Pages/Dashboard/AdminComponents/ManageUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Dashboard/RequireAdmin';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PasswordReset from './Pages/Login/PasswordReset';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/password-reset' element={<PasswordReset />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile/>}></Route>
          <Route index path='myOrders' element={<MyOrders/>}></Route>
          <Route index path='payment/:id' element={<Payment/>}></Route>
          <Route index path='addReview' element={<AddReview/>}></Route>
          <Route index path='manageOrders' element={<RequireAdmin><ManageOrders/></RequireAdmin>}></Route>
          <Route index path='addSpareParts' element={<RequireAdmin><AddSpareParts/></RequireAdmin>}></Route>
          <Route index path='manageSpareParts' element={<RequireAdmin><ManageSpareParts/></RequireAdmin>}></Route>
          <Route index path='manageUsers' element={<RequireAdmin><ManageUsers/></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
