import { DisData } from "../../Data";
export const Discover = () => {
  return (
    <main className="bg-card py-[3rem] xl:-mt-[28rem]">
      {DisData?.map((l, index) => {
        return (
          <section
            key={index}
            className="md:flex md:gap-4 xl:gap-0 justify-between px-5 md:px-5 xl:px-0"
          >
            <div>
              <img
                src={l.img}
                alt=""
                className="md:w-[80%] xl:w-[80%] w-full block mx-auto"
              />
            </div>
            <div className="w-full md:w-[70%] xl:w-[50%] md:mx-auto">
              <h1 className="font-poppins font-bold text-body md:text-[3rem] text-[2rem]">
                {l.header}
              </h1>
              <h2 className="font-poppins text-text text-[2rem]">
                {l.subheader}
              </h2>
              <p className="text-[1.2rem] font-inter py-5">{l.pag1}</p>
              <p className="text-[1.2rem] font-inter">{l.pag2}</p>
              <button
                className="mt-[2rem] py-4 px-8 bg-button text-white xl:w-[30%] font-inter text-[1.3rem] rounded-md
        "
              >
                {l.button}
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
};
