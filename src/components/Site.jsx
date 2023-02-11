import { useState } from "react";
import { Data } from "./Data";

export const Site = () => {

    const [query,setQuery] = useState("")

  return (
    <div>
      <section className="px-10  bg-[url('/Bg_img.jpg')] bg-cover md:px-20 lg:px-40">
        <div className="min-h-screen w-full">
          <div className="flex justify-between items-center pt-5">
            <a href="/">
              <img src="./ACC Logo.svg" alt="acc logo" />
            </a>

            <a href="#">
              <img src="./S-14.png" alt="Grupe logo" className="w-8" />
            </a>
          </div>

          <div className="px-8 py-10">
            <input
              type="text"
              pattern="text"
              placeholder="Sobai English e Search Korba"
              className="w-full mx-auto py-3 px-6 outline-none rounded-3xl shadow-lg text-gray-400-400"
              onChange={(e) => {setQuery(e.target.value)}}
            />
          </div>

          <div className="flex flex-col gap-4 items-center pb-10 sm:flex-row md:flex-wrap md:flex-row">
            {Data.filter((item) => item.title.toLocaleLowerCase().includes((query))).map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative w-[360px] h-auto bg-gray-200 p-2 rounded-xl"
                >
                  <img
                    src={item.img}
                    alt="logo"
                    className="w-full h-auto rounded-xl transform transition delay-600 hover:scale-[102%]"
                  />
                  <div className="flex px-1 py-1 flex-row justify-between items-center">
                    <h2 className="text-gray-800 font-medium">
                      {item.emoji} {item.title}
                    </h2>
                    <p className="font-semibold text-[14px]">{item.exam}</p>
                  </div>
                  <a
                    href={item.img}
                    download
                    className="absolute top-6 right-6 bg-gradient-to-t from-cyan-300 to-teal-300 rounded-xl text-sm font-medium  px-2 py-1 transform transition delay-600 hover:scale-105"
                  >
                    {item.sub}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
