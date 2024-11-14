import MaxContainer from "../../common/maxcontainer";

const Body = () => {
    const content = [
        {
            image: '/landing/__paystack.svg',
            header: 'Paystack',
            imagestyle: 'w-[3rem] h-[3rem]',
            paragraph: 'Trusted by 200,000+ businesses, Thousands of organizations of all sizes trust Paystack to grow their business.',
        },
        {
            image: '/landing/__moniepoint.svg',
            header: 'Moniepoint',
            paragraph: 'Collect payments, access loans and manage operations with a business banking solution that meets all your needs.',
        },
        {
            image: '/landing/__opay.svg',
            header: 'Opay',
            paragraph: 'OPay  solutions make payments easier, transfers free, savings more rewarding and gives you cashback on airtime.',
        },
        {
            image: '/landing/_nomba.png',
            header: 'Nomba',
            paragraph: 'With Nomba, you can accept payments faster and easier with our reliable POS terminals or via QR.',
        },
        {
            image: '/landing/_squad.png',
            header: 'Squad',
            imagestyle:  'w-[10rem]', 
            paragraph: 'Squad is a powerful payment platform that is designed to meet the needs of businesses of all sizes.',
        },
        {
            image: '/landing/_fern.png',
            header: 'Fern',
            imagestyle:  'w-[12rem]', 
            paragraph: 'With the FERN payment gateway, merchants can conveniently accept payments, control finances, and track transactions.',
        },
    ]

    return (
        <section className="">
            <MaxContainer>
                <div className="container pt-[7rem] sm:pt-[2rem] sm:pb-[3rem] pb-[5rem]">
                    <div className="mt-[3rem] grid grid-cols-3 sm:grid-cols-1 gap-[3rem]">
                       { content.map((item, index) => <Content {...item} key={index} />) }
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const Content = ({ image, header, paragraph, imagestyle }) => (
    <div className="border border-[#D5D7DA] p-[1.5rem] rounded-[.8rem]">
        <img src={image} alt="reliable" className={`mb-[1.5rem] ${imagestyle}`} />
        <h3 className="text-[1.8rem] text-[#181D27] font-[500] mb-[.5rem]">{header}</h3>
        <p className="text-[1.6rem] text-[#535862]">{paragraph}</p>
    </div>
)

export default Body;