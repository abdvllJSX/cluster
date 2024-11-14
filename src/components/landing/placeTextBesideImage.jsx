import MaxContainer from "../common/maxcontainer";

const PlaceTextBesideImage = ({ header, paragraph, content, image, id }) => {
    const contents = [...content]
    return (
        <div>
            <MaxContainer>
                <div className={`container items-center flex sm:flex-col ${id % 2 ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
                    <div className="">
                        <h1 className="text-[5.5rem] sm:text-[3.2rem] sm:leading-[4rem] max-w-[58rem] font-[600]">{header}</h1>
                        <p className="text-[1.8rem] max-w-[45rem] text-[#535862] mt-[2.7rem] mb-[1.5rem]">{paragraph}</p>
                        <div className="flex flex-col gap-[1rem] sm:gap-[1.5rem]">
                            {contents.map((content, index) => <Content text={content} key={index} />) }
                        </div>
                    </div>

                    <img src={image} alt="content image" className="w-[48%] sm:mt-[5rem] sm:w-full" />
                </div>
            </MaxContainer>
        </div>
    );
}

const Content = ({ text }) => {
    return (
        <div className="flex gap-[1.5rem] items-center">
            <img src="/landing/checkout.svg" alt="checkout icon" className="w-[1.8rem] sm:w-[2rem] sm:h-[2rem] h-[1.8rem]" />
            <p className="text-[#000000]">{text}</p>
        </div>
    )
}

export default PlaceTextBesideImage;