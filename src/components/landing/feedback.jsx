import MaxContainer from "../common/maxcontainer";

const FeedBack = () => {
    const cards = [
        {
            content: "\"Our checkout completion grew by 30% after integrating with Cluster. Customers love the flexibility to choose their preferred payment option.\"",
            image: '/landing/tunde_bolaji.png',
            name: 'Tunde Bolaji, CEO',
            nameStyle: 'text-[#230E2A]',
            cardStyle: 'bg-[#FDF6FF]',
            contentStyle: 'text-[#535862]',
            company: 'ThePlace'
        },
        {
            content: "\"Since adding Cluster, our transactions have increased, with customers enjoying the choice of payment options.\"",
            image: '/landing/tunde_bolaji.png',
            name: 'Bola Idris, CMO',
            nameStyle: 'text-[#FFFFFF]',
            cardStyle: 'bg-card_gradient',
            contentStyle: 'text-[#FFFFFF]',
            company: 'ThePlace'
        },
        {
            content: "\"Cluster integration boosted our checkout rate by 42%. Customers now have more control over how they pay.\"",
            image: '/landing/tunde_bolaji.png',
            name: 'Edem Ekeme, CEO',
            nameStyle: 'text-[#230E2A]',
            cardStyle: 'bg-[#FDF6FF]',
            contentStyle: 'text-[#535862]',
            company: 'ThePlace'
        },
    ]
    return (
        <section className="mt-[10rem] sm:mt-[5rem]">
            <MaxContainer>
                <div className="container">
                    <h2 className="text-[4rem] sm:text-[3rem] w-[35rem] font-[600]">What businesses are saying</h2>
                    <div className="mt-[3rem] flex sm:hidden overflow-x-scroll justify-between">
                        {
                            cards.map((card, index) => <Card {...card} key={index} />)
                        }
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const Card = ({ content, image, name, cardStyle, contentStyle, nameStyle }) => {
    return (
        <div className={`w-[32%] sm:w-[100rem] h-[40rem] border ${cardStyle} rounded-[.8rem] flex flex-col p-[1.5rem]`}>
            <p className={`font-[500] ${contentStyle} text-[2rem]`}>{content}</p>

            <div className="mt-auto">
                <img src={image} alt="ceo" className="w-[6.5rem] h-[6.5rem]" />
                <h3 className={`text-[1.5rem] ${nameStyle} font-[600]`}>{name}</h3>
                <p className="text-[1.3rem] text-[#AF47D2]">ThePlace</p>
            </div>
        </div>
    )
}

export default FeedBack;