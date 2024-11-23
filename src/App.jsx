import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteGuard from "./components/common/routeGuard";
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
import Settings from "./pages/profile";
import TransactionAttempt from "./pages/transactionAttempt";
import TransactionDetails from "./pages/transactionDetails";

const queryClient = new QueryClient();
function App() {
  const isAuthenticated = !!localStorage.getItem("ctx");
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whycluster" element={<WhyCluster />} />
          <Route path="/partners" element={<Partners />} />
          <Route
            path="/dashboard"
            element={
              <RouteGuard>
                <Dashboard />
              </RouteGuard>
            }
          />
          <Route
            path="/add-gateway"
            element={
              <RouteGuard>
                <AddGateway />
              </RouteGuard>
            }
          />
          <Route
            path="/add-gateway/:id"
            element={
              <RouteGuard>
                <GatewayConfig />
              </RouteGuard>
            }
          />
          <Route
            path="/gateway-details/:id"
            element={
              <RouteGuard>
                <GatewayDetails />
              </RouteGuard>
            }
          />
          <Route
            path="/gateway-details/:id/config-details"
            element={
              <RouteGuard>
                <ConfigDetails />
              </RouteGuard>
            }
          />
          <Route
            path="/gateway-details/:id/transactions/:trxID"
            element={
              <RouteGuard>
                <TransactionDetails />
              </RouteGuard>
            }
          />
          <Route
            path="/gateway-details/:id/transactions/:trxID/attempts"
            element={
              <RouteGuard>
                <TransactionAttempt />
              </RouteGuard>
            }
          />
          <Route
            path="/gateway-details/:id/edit"
            element={
              <RouteGuard>
                <EditGateway />
              </RouteGuard>
            }
          />
          <Route
            path="/profile"
            element={
              <RouteGuard>
                <Settings />
              </RouteGuard>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <RouteGuard>
                <EditProfile />
              </RouteGuard>
            }
          />
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
