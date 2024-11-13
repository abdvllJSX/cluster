import MaxContainer from "../../common/maxcontainer";

const Body = () => {
    const content = [
        {
            image: '/landing/reliable.svg',
            header: 'Reliable & Secure Payment Processing',
            paragraph: 'Cluster is built with industry-leading encryption, and secure servers to ensure every transaction is safe from fraud or unauthorized access.',
        },
        {
            image: '/landing/easy_integration.svg',
            header: 'Easy Integration with Your Business',
            paragraph: 'We support a wide variety of programming languages and frameworks, enabling a smooth, flexible integration.',
        },
        {
            image: '/landing/optimized.svg',
            header: 'Optimized for Customer Experience',
            paragraph: 'Every transaction is optimized for speed, ensuring smooth checkout experiences that reduce cart abandonment and boost conversions.',
        },
        {
            image: '/landing/advanced.svg',
            header: 'Advanced Analytics & Reporting',
            paragraph: 'Customizable dashboards offer real-time data, so you always have a clear picture of your business’s payment performance.',
        },
        {
            image: '/landing/_expert.svg',
            header: '24/7 Expert Support',
            paragraph: 'Whether you have a technical question, need assistance with integration, our experienced team is available to assist you whenever you need it.',
        },
        {
            image: '/landing/fraud.svg',
            header: 'Fraud Prevention & Risk Management',
            paragraph: 'Tailored risk management settings allow you to customize your protection based on your specific business needs.',
        },
    ]

    return (
        <section className="">
            <MaxContainer>
                <div className="container pt-[7rem] pb-[5rem]">
                    <h2 className="text-center text-[3.5rem] font-[600]">Transform Your Payment Experience</h2>
                    <p className="text-center max-w-[80rem] mx-auto">Our payment gateway management services are designed to empower businesses of all sizes. With our cutting-edge technology, exceptional support, and commitment to security, we provide everything you need to streamline payments, enhance customer satisfaction, and grow your business with confidence.</p>
                    <div className="mt-[3rem] grid grid-cols-3 gap-[2rem] gap-y-[4rem]">
                       { content.map((item, index) => <Content {...item} key={index} />) }
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const Content = ({ image, header, paragraph }) => (
    <div className="">
        <img src={image} alt="reliable" className="mb-[.8rem] mx-auto" />
        <h3 className="text-[1.8rem] text-center text-[#181D27] font-[500] mb-[.5rem]">{header}</h3>
        <p className="text-[1.6rem] text-center text-[#535862]">{paragraph}</p>
    </div>
)

export default Body;