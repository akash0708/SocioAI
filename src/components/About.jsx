const About = () => {
  return (
    <div className="bg-gradient-to-r from-white via-green-400 to-white py-10">
      <div className="flex flex-col justify-center items-center min-h-[82vh] max-w-[1240px] px-4 sm:px-6 lg:px-8 mx-auto">
        <div
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#1D2E28] pb-8"
          style={{ fontFamily: "Gothic A1" }}
        >
          ABOUT
        </div>
        <div
          className="text-center text-[18px] sm:text-[20px] md:text-[22px] text-[#0F5132] w-full max-w-[1135px]"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          Welcome to Socio AI, A Thesis Presentation Competition! Hosted by the IEEE Computer Society Chapter, Kolkata Section, this dynamic event invites final-year UG and PG students to showcase their innovative AI projects aimed at solving real-world social issues. Compete for prestigious awards, gain recognition, and connect with like-minded individuals passionate about making a positive impact through AI. Join us in leveraging technology for a better tomorrow!
        </div>
      </div>
    </div>
  );
};

export default About;
