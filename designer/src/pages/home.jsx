import React from "react";
import "../styles/home.css";
import couch from "../image/couch.jpeg";
import seats from "../image/seats.jpeg";
import room from "../image/room.jpeg";
import Interior from "../components/interior";

function Home() {
  return (
    <div className="h-fit">
      <div className=" home h-[130vh] grid justify-items-center content-center">
        <div className="text-[#ffffff] text-center">
          <h1 className="text-3xl font-bold">WE PROVIDE EVERYTHING</h1>
          <p className="text-6xl my-5">
            <span className="text-[#ff565b] font-extrabold">INTERIOR</span>{" "}
            DESIGNER
          </p>
          <button className="bg-[#ffffff] text-[#ff565b] w-[200px] h-[40px] rounded-2xl hover:bg-[#ff565b] hover:text-[#ffffff] transition duration-700">
            Discover More
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid gap-5 justify-items-center content-center absolute md:grid-row-2 md:grid-col-4 grid-col-1 grid-row-5 w-[90vw] md:h-[40vh] h-[90vh] top-[100vh] bg-white shadow-xl z-0 ">
          <div className="grid row-start-1 md:col-start-1 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Search Work by Title</h3>
            <input
              type="text"
              className="border-[1px] border-gray-500 outline-none rounded-md"
              placeholder="Type any work title...."
            />
          </div>
          <div className="grid md:row-start-1 md:col-start-2 row-start-2 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Choose Category</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Category</option>
              <option value="">Exterior Design</option>
              <option value="">Interior Design</option>
              <option value="">New Videos</option>
              <option value="">Trend Design</option>
            </select>
          </div>
          <div className="grid md:row-start-1 md:col-start-3 row-start-3 md:w-[17vw] w-[60vw] h-[15vh] ">
            <h3 className="font-extrabold text-lg">Price Range</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Price</option>
              <option value="">$100 - $250</option>
              <option value="">$250 - $500</option>
              <option value="">$500 - $1000</option>
              <option value="">$1000+</option>
            </select>
          </div>
          <div className="grid md:row-start-1 md:col-start-4 row-start-4 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Pick a Plan</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Plan</option>
              <option value="">Standard</option>
              <option value="">Proffessional</option>
              <option value="">Golden</option>
              <option value="">Premium</option>
            </select>
          </div>
          <div className="grid md:row-start-2 md:col-start-1 md:col-span-4 row-start-5  ">
            <button className="bg-[#ff565b] text-white hover:bg-black md:w-[85vw] w-[60vw] h-[7vh] rounded-md md:mt-0 mt-3 transition duration-700">
              Search Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90vw] mt-[250px] font-[900]">
          <h1 className="text-3xl">EXPLORE SOME OF OUR LATEST </h1>
          <div className="text-[#ff565b] flex items-center space-x-5">
            <div className="h-[3px] w-20 bg-[#ff565b]"></div>
            <h1 className="text-3xl">
              INTERIOR DESIGN WORK <span className=" text-black">.</span>
            </h1>
          </div>
          <div className="flex md:mt-10 mt-32 md:flex-row flex-col justify-between">
            <img
              src={couch}
              alt="couch"
              className="md:w-[40vw] w-[90vw] h-screen rounded-md"
            />

            <div className="basis-[45vw]">
              <Interior
                name={"Interior Design"}
                date={"January 22, 2022"}
                workplace={"The Waterfront Cafe and Resturant"}
                location={"Florida, USA"}
                descriptionStart={
                  "Designer HTML5 Template is 100% free to download provided by "
                }
                descriptionEnd={"TemplateMo website."}
              />
              <Interior
                name={"Building & Developing"}
                date={"January 22, 2022"}
                workplace={"Home Land Port Canaveral Suites "}
                location={"Miami Beach, Florida, USA"}
                descriptionStart={
                  "This is based on latest Bootstrap v5.1.3 CSS layout where you can easily edit and use Bootstrap components. "
                }
                descriptionEnd={""}
              />
              <Interior
                name={"Giving Your Brand Power"}
                date={"January 22, 2022"}
                workplace={"Hallandale Beach Motel Design "}
                location={"North City Beach Park"}
                descriptionStart={
                  "Feel free to download & use this template for your websites. Please tell your friends about TemplateMo."
                }
                descriptionEnd={""}
              />
              <Interior
                name={"Boost Up Your Style"}
                date={"January 22, 2022"}
                workplace={"Interior for Marina Beach Resort "}
                location={"Sunny Isles Beach, FL 33160"}
                descriptionStart={
                  "You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info. "
                }
                descriptionEnd={""}
              />
            </div>
          </div>
        </div>
      </div>

      {/* .....................Trending............................ */}
      <div className="flex justify-center w-full font-[900]">
        <div className="w-[90vw] flex justify-between items-center">
          <div className="w-[40vw]">
          <h1 className="text-3xl ">CHECK OUT WHAT'S TRENDING IN</h1>
          <div className="text-[#ff565b] flex items-center space-x-5">
            <div className="h-[3px] w-20 bg-[#ff565b]"></div>
            <h1 className="text-3xl">
              INTERIOR DESIGN WORK <span className=" text-black">.</span>
            </h1>
          </div>
          <p className="text-slate-500 leading-7 my-5">
          Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit, sed do eismuod larehai med at vero eos et suscipit neque rerum molestias accusamus et iusto odio dignissimos ducimus qui blanditis.
          </p>
          <button className="text-white bg-[#ff565b] w-[200px] h-10 rounded-lg">Discover More</button>
          </div>
          <div className="flex items-center">
            <img src={couch} alt="" className="h-[65vh] w-[35vw]" />
            <img src={seats} alt="" className="h-[50vh] w-[20vw]"/>
            <img src={room} alt="" className="h-[25vh] w-[5vw]" />
                      </div>
        </div>
      </div>



      {/* Map */}
      <div className="map h-[90vh] flex justify-center items-center">
                <div className="bg-white h-[70vh] rounded-l-lg px-8 py-6">
                  <h1 className="text-2xl font-[900]">DON'T BE HESITATED</h1>
                   <div className="text-[#ff565b] flex items-center space-x-4 text-2xl font-[900]">
            <div className="h-[3px] w-18 bg-[#ff565b]"></div>
                  <h1>TALK TO US <span className="text-black">NOW!</span></h1>
                  </div>
                  <form>
                    <div className="flex justify-between">
                    <input type="text" placeholder="First Name" className="outline-none border border-slate-300 my-2 py-2"/>  <br />
                    <input type="text" placeholder="Last Name" className="outline-none border border-slate-300 my-2 py-2"/>
                    </div>
                    <div className="flex justify-between">
                    <input type="email" placeholder="Your Email" className="outline-none border border-slate-300 my-2 py-2"/> <br />
                    <input type="text" placeholder="Subject" className="outline-none border border-slate-300 my-2 py-2"/>
                    </div>
                    <textarea className="h-[15vh] w-[30vw] outline-none border border-slate-300 my-2">Message</textarea>
                  </form>
                  <button className="bg-[#ff565c] w-[30vw] py-2 rounded-lg">Send Message</button>
                </div>
                <div className="flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8384001602317!2d7.359613999999999!3d5.129717299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429964fe59a2d9%3A0xed3b01aba6a81287!2sLearnFactory%20Nigeria!5e0!3m2!1sen!2sng!4v1691489735268!5m2!1sen!2sng" 
                width="500" height="438" style={{border: "0px"}} title="map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-r-lg"></iframe>
                </div>
      </div>
    </div>
  
  );
}


export default Home;
