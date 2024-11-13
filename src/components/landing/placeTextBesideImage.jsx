import MaxContainer from "../common/maxcontainer";

const PlaceTextBesideImage = ({ header, paragraph, content, image, id }) => {
    const contents = [...content]
    return (
        <div>
            <MaxContainer>
                <div className={`container items-center flex ${id % 2 ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
                    <div className="">
                        <h1 className="text-[5.5rem] max-w-[58rem] font-[600]">{header}</h1>
                        <p className="text-[1.8rem] max-w-[45rem] text-[#535862] mt-[2.7rem] mb-[1.5rem]">{paragraph}</p>
                        <div className="flex flex-col gap-[1rem]">
                            {contents.map((content, index) => <Content text={content} key={index} />) }
                        </div>
                    </div>

                    <img src={image} alt="content image" className="w-[48%]" />
                </div>
            </MaxContainer>
        </div>
    );
}

const Content = ({ text }) => {
    return (
        <div className="flex gap-[1.5rem] items-center">
            <img src="/landing/checkout.svg" alt="checkout icon" className="w-[1.8rem] h-[1.8rem]" />
            <p className="text-[#000000]">{text}</p>
        </div>
    )
}

export default PlaceTextBesideImage;