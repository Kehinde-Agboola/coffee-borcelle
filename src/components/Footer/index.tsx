import { DisData } from "../Data";
import { Contact } from "../Ui/Contact";
import { SiteMap } from "../Ui/Home/SiteMap";
import { Media } from "../Ui/Home/Media";
export const Footer = () => {
  return (
    <main className="bg-[#291600] py-[4rem] px-[2rem] md:px-0">
      <section className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="form w-full">
          <Contact />
        </div>
        <div className="w-full">
          <SiteMap />
        </div>
        <div className="social-media w-full">
          <Media />
        </div>
      </section>
    </main>
  );
};

// max-w-screen-md mx-auto
