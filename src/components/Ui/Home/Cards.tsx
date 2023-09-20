import { Cardz } from "../../Data";

export const Cards = () => {
  return (
    <>
      <div className="card grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-0 xl:grid-cols-3 py-[3rem]">
        {Cardz.map((r, index) => {
          return (
            <section className="card">
              <div
                key={index}
                className="bg-card rounded-xl shadow-xl w-[27rem] p-5 text-center box-shadow"
              >
                <p className="text-[15px]  font-inter">{r.text}</p>
                <p className="text-author font-bold pt-5">{r.author}</p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
