import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AddGateway from './pages/addGateway'
import GatewayConfig from './pages/gatewayconfig'
import GatewayDetails from './pages/gatewayDetails'
import ConfigDetails from './pages/configDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-gateway" element={<AddGateway />} />
        <Route path="/add-gateway/:id" element={<GatewayConfig />} />
        <Route path="/gateway-details/:id" element={<GatewayDetails />} />
        <Route path="/gateway-details/:id/config-details" element={<ConfigDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App 
