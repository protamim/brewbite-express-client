import BannerImg from "../assets/images/banner_image.jpg";

const Banner = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${BannerImg})` }}
        className="bg-cover min-h-[50vh] bg-center relative before:bg-[rgba(12,12,12,0.29)] before:w-full before:absolute before:h-full"
      >
        <div className="min-h-[50vh] flex justify-center items-center">
          <div className="space-y-5 z-10 text-white px-5 md:px-0">
            <h2 className="text-center text-5xl font-semibold">
              TASTE OF LIFE
            </h2>
            <p className="text-xl text-center">
              The Taste of Life’ brings more flavors to life, creates more
              joyful moments
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
