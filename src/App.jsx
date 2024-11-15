import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddGateway from "./pages/addGateway";
import CreatePassword from "./pages/auth/createPassword";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/resetPassword";
import Signup from "./pages/auth/signup";
import ConfigDetails from "./pages/configDetails";
import Dashboard from "./pages/dashboard";
import EditGateway from "./pages/editGateway";
import EditProfile from "./pages/editProfile";
import GatewayDetails from "./pages/gatewayDetails";
import GatewayConfig from "./pages/gatewayconfig";
import Home from "./pages/landing/home";
import Partners from "./pages/landing/partners";
import WhyCluster from "./pages/landing/whyCluster";
import Profile from "./pages/profile";
import TransactionAttempt from "./pages/transactionAttempt";
import TransactionDetails from "./pages/transactionDetails";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whycluster" element={<WhyCluster />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-gateway" element={<AddGateway />} />
          <Route path="/add-gateway/:id" element={<GatewayConfig />} />
          <Route path="/gateway-details/:id" element={<GatewayDetails />} />
          <Route
            path="/gateway-details/:id/config-details"
            element={<ConfigDetails />}
          />
          <Route
            path="/gateway-details/:id/:trxID"
            element={<TransactionDetails />}
          />
          <Route
            path="/gateway-details/:id/:trxID/attempts"
            element={<TransactionAttempt />}
          />
          <Route path="/gateway-details/:id/edit" element={<EditGateway />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/onboarding/signup" element={<Signup />} />
          <Route path="/onboarding/login" element={<Login />} />
          <Route
            path="/onboarding/reset-password"
            element={<ResetPassword />}
          />
          <Route
            path="/onboarding/create-password"
            element={<CreatePassword />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
