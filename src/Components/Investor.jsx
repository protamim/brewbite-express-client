import investoImg from '../assets/images/investor_transparent.png'

const Investor = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-5">
                    <div className='flex gap-8 items-center'>
                        <div className='flex-1'>
                            <img src={investoImg} alt="" />
                        </div>
                        <div className='flex-1 text-slate-100 space-y-6'>
                            <h2 className='text-4xl font-bold text-lime-300'>Investor</h2>
                            <p>Olympic is publicly listed on both national stock exchanges in Bangladesh. And we&apos;re also a constituent of the Dhaka Stock Exchange&apos;s DSE30 index. We&apos;re constantly thinking of ways to make our amazing company even better. We think we&apos;re pretty unique and we hope you&apos;ll think so too. Please check out our Investors section to learn more.</p>
                            <div>
                                <button className='border-2 border-lime-400 px-4 py-1 hover:bg-lime-400 hover:text-black transition-all'>Our Success</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Investor;