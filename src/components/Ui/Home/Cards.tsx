import { Cardz } from "../../Data";

export const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {Cardz.map((r, index) => {
          return (
            <section className="card">
              <div
                key={index}
                className="bg-card rounded-xl shadow-xl max-w-[27rem] p-5  box-shadow"
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
