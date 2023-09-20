import { Cardz } from "../../Data";

export const Cards = () => {
  return (
    <>
      <div className="card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 px-5 md:px-5 xl:px-0 py-[3rem]">
        {/* <section className="card"> */}
        {Cardz.map((r, index) => {
          return (
            <div
              key={index}
              className="bg-card rounded-xl shadow-xl max-w-full md:max-w-[27rem] p-5  box-shadow"
            >
              <p className="text-[15px]  font-inter">{r.text}</p>
              <p className="text-author font-bold pt-5">{r.author}</p>
            </div>
          );
        })}
        {/* </section> */}
      </div>
    </>
  );
};
