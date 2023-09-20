export const Contact = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-[2rem] font-inter font-bold text-white">
            Contact Us
          </h1>
          <p className="text-[1.5rem] pb-5 text-cardbg">Send Us a Message</p>
        </div>
        <form className="w-full">
          <div className="mb-6">
            <div className="w-full ">
              <input
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Email********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="shadow bg-card focus:shadow-outline focus:outline-none text-black font-inter py-2 px-[3rem] rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
