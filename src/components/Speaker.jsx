const Speakers = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-12 px-8">
      <h1 className="w-full text-[#1D2E28] text-4xl md:text-6xl lg:text-6xl font-bold mb-6 xl:mb-8 text-center">
        SPEAKERS
      </h1>
      <div className="flex flex-col items-center bg-[#0a5c36] border border-gray-100 rounded-lg shadow md:flex-row md:max-w-xl">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png"
          alt="Noteworthy technology acquisitions 2021"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, aut!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
