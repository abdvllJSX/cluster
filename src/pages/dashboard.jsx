import Navbar from "../components/common/navbar";
import Gateways from "../components/home/gateways";
import Overview from "../components/home/overview";
const Dashboard = () => {
    return ( 
        <>
            <Navbar />
            <Overview />
            <Gateways />
        </>
    );
}
 
export default Dashboard;