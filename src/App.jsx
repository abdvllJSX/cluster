import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AddGateway from './pages/addGateway'
import GatewayConfig from './pages/gatewayconfig'
import GatewayDetails from './pages/gatewayDetails'
import ConfigDetails from './pages/configDetails'
import TransactionDetails from './pages/transactionDetails'
import TransactionAttempt from './pages/transactionAttempt'
import EditGateway from './pages/editGateway'
import Profile from './pages/profile'
import EditProfile from './pages/editProfile'
import Signup from './pages/auth/signup'
import Login from './pages/auth/login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-gateway" element={<AddGateway />} />
        <Route path="/add-gateway/:id" element={<GatewayConfig />} />
        <Route path="/gateway-details/:id" element={<GatewayDetails />} />
        <Route path="/gateway-details/:id/config-details" element={<ConfigDetails />} />
        <Route path="/gateway-details/:id/:trxID" element={<TransactionDetails />} />
        <Route path="/gateway-details/:id/:trxID/attempts" element={<TransactionAttempt />} />
        <Route path="/gateway-details/:id/edit" element={<EditGateway />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App 
