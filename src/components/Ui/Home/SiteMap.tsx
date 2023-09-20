import { Link } from "../../Data";
export const SiteMap = () => {
  return (
    <>
      <div className="links">
        <div>
          <h1 className="text-[2rem] font-inter font-bold text-white">
            SiteMap
          </h1>
          <p className="text-[1.5rem] pb-5 text-cardbg">All our Pages</p>
        </div>

        {Link?.map((l, index) => {
          return (
            <>
              <div key={index}>
                <ul>
                  <li className="text-white">
                    <a className="text-[1.5rem]" href={l.pathname}>
                      {l.title}
                    </a>
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
