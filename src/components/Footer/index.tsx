import { Contact } from "../Ui/Contact";
import { SiteMap } from "../Ui/Home/SiteMap";
import { Media } from "../Ui/Home/Media";
export const Footer = () => {
  return (
    <main>
      <div className="bg-[#291600] py-[4rem] px-[2rem] xl:px-0">
        <section className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="">
            <Contact />
          </div>
          <div className="md:ml-[8rem]">
            <SiteMap />
          </div>
          <div className="social-media">
            <Media />
          </div>
        </section>
      </div>
      <div className="text-center text-[#000000] bg-[#DBBCA1] p-4">
        <p>Copyright 2020 All Rights Reserved Company Name.</p>
      </div>
    </main>
  );
};

// max-w-screen-md mx-auto
