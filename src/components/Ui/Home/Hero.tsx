import Image from "../../../assets/absolute-img.svg";
export const Hero = () => {
  return (
    <div className="bg-hero ">
      <main className=" ">
        <section className="text-white text-center md:text-left">
          <div className="pt-[16rem] pb-[4rem] md:pb-0 px-[3rem] md:px-[10rem]">
            <h1 className=" text-white font-pomp xl:text-[6rem]  text-[4rem] ">
              Coffee Makes Mood
            </h1>
            <p className="text-white font-galada text-[2rem]">
              "Indulge in Every Sip: Experience the Richness of Coffee!"
            </p>
          </div>
        </section>
        <div className="md:relative xl:bottom-[28rem] hidden xl:block">
          <img src={Image} alt="" />
        </div>
      </main>
    </div>
  );
};
