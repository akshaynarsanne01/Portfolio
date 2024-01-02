const Contact = () => {
  //   const inputStyle = {
  //     "::placeholder": {
  //       color: "#dd5522", // Change the color to your desired placeholder color
  //     },
  //   };
  return (
    <div className="p-0 pt-4 font-inter bg-[#101d25] text-[#addbb7] dark:text-white text-center items-center rounded-sm lg:p-10">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p>Feel free to reach out to me for any queries or opportunities! </p>
      <div className="p-0 lg:p-6 flex flex-col w-3/4 lg:w-2/4 m-auto">
        <h1 className="text-xl">Email Me 💌</h1>

        <input
          className="bg-[#101d25] border-solid border-2 border-[#dd5522] text-[#addbb7] font-bold rounded-xl p-2 m-4"
          placeholder="Your Email"
        />
        <input
          className="bg-[#101d25] border-solid border-2 border-[#dd5522]  text-[#addbb7] font-bold rounded-xl p-2 m-4"
          placeholder="Your Name"
        />
        <input
          className="bg-[#101d25] border-solid border-2 border-[#dd5522]  text-[#addbb7] font-bold rounded-xl p-2 m-4"
          placeholder="Subject"
        />
        <input
          className="h-32 bg-[#101d25] border-solid border-2 border-[#dd5522]  text-[#addbb7] font-bold rounded-xl p-2 m-4"
          placeholder="Message"
        />
        <button className="p-4 m-6 bg-[#dd5522] rounded-2xl">Send</button>
      </div>
    </div>
  );
};
export default Contact;
