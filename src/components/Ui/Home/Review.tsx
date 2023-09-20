import { Reviews } from "../../Data";
import { Cards } from "./Cards";
export const Review = () => {
  return (
    <>
      <main className="bg-cardbg text-white py-[4rem]">
        <section className="text-center">
          {Reviews?.map((r, index) => {
            return (
              <div key={index}>
                <div>
                  <div className="flex justify-center items-center">
                    <h1 className="font-mom font-bold text-white text-[3rem]">
                      {r.header}
                    </h1>
                    <img src={r.img} alt="" />
                  </div>
                  <h2 className="font-poppins w-[90%] mx-auto md:w-full text-white text-[2rem]">
                    {r.subheader}
                  </h2>
                </div>
                <Cards />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
