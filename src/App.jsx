import React from "react";

function App() {
  return (
    <>
      {/* header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="font-bold text-blue-300">
          nowfluence
        </div>
        <div className="flex gap-4 font-semibold">
          <div className="cursor-pointer hover:underline">
            Sign Up
          </div>
          <div className="cursor-pointer hover:underline text-blue-300">
            Login
          </div>
        </div>
      </header>

      {/* first section */}
      <section>
        <div className="flex justify-center px-24 py-8 gap-8  bg-gradient-to-t from-blue-50 via-transparent to-transparent">
          <div className="w-[40%]">
            <h6 className="opacity-75 text-sm font-semibold">Brand Name</h6>
            <h3 className="text-2xl font-semibold mt-1">Campaign Title Here</h3>
            <div className="opacity-75 text-sm">
              Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="mt-1 opacity-75 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Wute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </div>
            <div className="flex justify-between items-center mt-4 text-xs font-bold">
              <div className="">Requested Start Date: MM/DD/YYYY</div>
              <button className="border border-gray-500 bg-white-500 border-black cursor-pointer py-1 px-6 rounded">View Campaign Breif</button>
            </div>
          </div>
          <div className="w-[60%]">
            <img className="w-[100%] h-auto rounded-xl shadow-xl" src={"https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"} />
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className="px-24 py-8">
          <h3 className="text-2xl font-semibold mt-1">Deliverables Requested</h3>
          <div className="grid grid-cols-2 grid-rows-3 gap-8 pt-8 w-150 mx-auto">
            <div className="flex justify-end items-center">
              <img className="w-[50%] h-auto" src={"https://www.pngplay.com/wp-content/uploads/12/Ig-Logo-PNG-Free-File-Download.png"} />
            </div>
            <div className="flex justify-center items-center opacity-75 text-sm">Duis aute irure dolor in reprehenderit Duis aute irure dolor in</div>
            <div className="flex justify-end items-center">
              <img className="w-[50%] h-auto" src={"https://www.pngplay.com/wp-content/uploads/12/Ig-Logo-PNG-Free-File-Download.png"} />
            </div>
            <div className="flex justify-center items-center opacity-75 text-sm">Duis aute irure dolor in reprehenderit Duis aute irure dolor in</div>
            <div className="flex justify-end items-center">
              <img className="w-[50%] h-auto" src={"https://www.pngplay.com/wp-content/uploads/12/Ig-Logo-PNG-Free-File-Download.png"} />
            </div>
            <div className="flex justify-center items-center opacity-75 text-sm">Duis aute irure dolor in reprehenderit Duis aute irure dolor in</div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section>
        <div className="px-24 py-8">
          <h3 className="text-2xl font-semibold mt-1">Additional Information</h3>
          <div className="mt-1 opacity-75 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Wute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section>
        <div className="px-24 py-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-green-950">Interested in this Campaign?</h3>
          <h5 className="text-sm font-semibold mt-2">Apply here to aprticipate in the campaign:</h5>
          <button className="mt-4 text-white text-sm bg-gradient-to-r from-green-500 to-blue-200 font-semibold cursor-pointer py-2 px-8 rounded-full">Apply</button>
        </div>
      </section>
    </>
  );
}

export default App;
