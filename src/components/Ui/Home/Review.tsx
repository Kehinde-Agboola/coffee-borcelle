import { Reviews } from "../../Data";
export const Review = () => {
  return (
    <>
      <main className="bg-cardbg text-white">
        <section className="text-center">
          {Reviews?.map((r, index) => {
            return (
              <div key={index}>
                <div>
                  <div className="flex gap-[1rem] justify-center items-center">
                    <h1 className="font-mom font-bold text-white text-[3rem]">
                      {r.header}
                    </h1>
                    <img src={r.img} alt="" />
                  </div>
                  <h2 className="font-poppins text-white text-[2rem]">
                    {r.subheader}
                  </h2>
                </div>
                <div className="card">
                  <div className="bg-card rounded-xl shadow-xl p-6">
                    <p className="text-[15px]  font-inter">{r.text}</p>
                    <p className="text-author font-bold">{r.author}</p>                                     
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};
