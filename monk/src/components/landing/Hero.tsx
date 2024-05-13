const Hero = () => {
  return (
    <section className="h-screen w-full ">
      <div className="m-10 py-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 text-whites">
            <h1 className="text-7xl">
              MONK MODE
              <br /> BY
              <br />
              <strong>IMAN GADZHI</strong>
            </h1>
            <p className="">
              Formulate Your Own Protocol
              <br /> To Achieve Your Wildest Goals With Monk Mode
            </p>
            <button className="bg-slate-200 w-52 rounded-md">
              get started
            </button>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Fg0UcmvMgIQ?si=4Ln0UWyDLxMxTlhS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
