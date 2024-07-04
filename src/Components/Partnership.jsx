import baseAssets from "../assets/baseAssets";

function Partnership() {
  return (
    <div className="w-full bg-Layoutyellow flex items-center justify-center p-[20px]">
      <div className="container flex-col flex items-center justify-center">
        <div
          className="title_group text_center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <h2 className="title text-2xl font-semibold">Our Top Partners</h2>
        </div>

        <div className=" flex-row flex items-center justify-evenly  mt-[20px] max-md:flex-col w-full">
          <div className="flex items-center justify-evenly w-[50vw] max-md:w-full  max-md:pt-[20px]  max-md:pb-[20px]">
          <img
            src={baseAssets.stripe}
            alt="stripe"
            className="h-[60px] w-[100px] "
          />
          <img
            src={baseAssets.vercel}
            alt="vercel"
            className="h-[30px] w-[120px] "
          />
          </div>
          <img
            src={baseAssets.razorpay}
            alt="razorpay"
            className="h-[35px] w-[150px]  "
          />
          <div className="flex items-center justify-evenly w-[50vw] max-md:w-full max-md:pt-[20px]">
          <img
            src={baseAssets.amazon}
            alt="amazon"
            className="h-[60px] w-[120px]  mt-[20px] "
          />
          <img
            src={baseAssets.googleCloud}
            alt="google cloud"
            className=" h-[40px] w-[100px] "
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
