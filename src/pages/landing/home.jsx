import Navbar from "../../components/landing/nav";
import Hero from "../../components/landing/home/hero";
import PlaceTextBesideImage from "../../components/landing/placeTextBesideImage";
import FeedBack from "../../components/landing/feedback";
import Banner from "../../components/landing/banner";
import Footer from "../../components/landing/footer";
const Home = () => {
    const useCase = [
        {
            header: 'Connected once, stay connected',
            paragraph: 'Your business is always ready to collect payments seamlessly, ensuring constant connectivity and uninterrupted transactions',
            content: [
                '100% conversion rate',
                'Real-Time Payment Updates',
                'Multiple Payment Options',
                '24/7 Uptime and Reliability'
            ],
            image: '/landing/stay_connected.png',
        },
        {
            header: 'Phenomenal sales conversion rate',
            paragraph: 'Ensure your customers can always complete payments seamlessly, boosting your sales conversion and reducing cart abandonment.',
            content: [
                'Seamless Checkout Experience',
                'Increased Conversion Rates',
                'Enhanced Customer Trust',
                'Faster Payment Processing'
            ],
            image: '/landing/phenomenal_sales.png',

        },
        {
            header: 'Robust payment gateway performance Insight',
            paragraph: 'Get on-the-fly payment gateway insight and flip the switch on-the-go with our robust solution. ',
            content: [
                'Real-time Transaction Monitoring',
                'Multiple Payment Attempt Analysis',
                'Instant Gateway Switching',
                'Customizable Performance Alerts',
                'Comprehensive Analytics Dashboard:',
            ],
            image: '/landing/robust_payment.png',

        },
        {
            header: 'Intelligent Gateway Switching Layer',
            paragraph: 'Perfect for businesses looking to improve checkout experience and maximize revenue by ensuring every transaction has the best chance of success.',
            content: [
                'Optimized Payment Routing',
                'Increased Transaction Success Rates',
                'Seamless Failover System',
                'Enhanced Customer Experience',
            ],
            image: '/landing/intelligent_gateway.png',

        },

    ]
    return (
        <>
            <Navbar />
            <Hero />
            <section className="flex flex-col gap-[13rem] sm:gap-[7rem] py-[2rem]">
                {useCase.map((item, index) => <PlaceTextBesideImage {...item} key={index} id={index} />)}
            </section>
            <FeedBack />
            <Banner />
            <Footer  />
        </>
    );
}

export default Home;