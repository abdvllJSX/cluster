import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AddGateway from './pages/addGateway'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-gateway" element={<AddGateway />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App 
