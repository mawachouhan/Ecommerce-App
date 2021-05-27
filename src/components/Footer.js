import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className=" flex flex-wrap justify-center p-6 bg-amazon_blue w-1128 h-800 text-white ">
        <div className="relative flex flex-col m-2 z-30 p-10 cursor-pointer ">
          <p className="font-extrabold"> Get to Know Us</p>
          <br />

          <p className="hover:underline"> Careers</p>
          <p className="hover:underline"> About</p>
          <p className="hover:underline"> Amazon</p>
          <p className="hover:underline"> Investor</p>
          <p className="hover:underline"> Relations</p>
          <p className="hover:underline"> Amazon Devices</p>
          <p className="hover:underline"> Amazon Tours</p>
        </div>

        <div className="relative flex flex-col m-2 z-30 p-10 cursor-pointer">
          <p className="font-extrabold"> Make Money with Us</p>
          <br />

          <p className="hover:underline"> Sell on Amazon Business </p>
          <p className="hover:underline">Sell apps on Amazon </p>
          <p className="hover:underline"> Become an Affiliate </p>
          <p className="hover:underline"> Advertise Your Products </p>
          <p className="hover:underline"> Host an Amazon Hub </p>
          <p className="hover:underline"> See More Make Money with Us</p>
        </div>

        <div className="relative flex flex-col m-2 z-30 p-10 cursor-pointer">
          <p className="font-extrabold">Amazon Payment Products</p>
          <br />

          <p className="hover:underline"> Amazon Business Card</p>
          <p className="hover:underline"> Shop with Points</p>
          <p className="hover:underline"> Reload Your Balance </p>
          <p className="hover:underline"> Amazon Currency Converter </p>
        </div>

        <div className="relative flex flex-col m-2 z-30 p-10 cursor-pointer ">
          <p className="font-extrabold">Let Us Help You</p>
          <br />
          <p className="hover:underline"> Amazon and COVID-19 </p>
          <p className="hover:underline"> Your Account </p>
          <p className="hover:underline"> Returns & Replacements </p>
          <p className="hover:underline"> Manage Your Content and Devices </p>
          <p className="hover:underline"> Amazon Assistant </p>
          <p className="hover:underline"> Your Orders </p>
          <p className="hover:underline"> Help </p>
        </div>
      </div>
      <div className="flex flex-wrap bg-amazon_blue justify-center ">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className=" flex flex-wrap cursor-pointer align-left "
        />
        <div className="bottom-auto text-white border-gray-400 border-2 -mt-2 mx-8  items-center   bg-amazon_blue text-lg">
          <select className="bg-amazon_blue items-center mx-3 text-center">
            <option Value="Under 16" defaultChecked>
              English
            </option>
            <option Value="16 to 25">Espanol</option>
            <option Value="26 to 40">Arabic</option>
            <option Value="40 to 60">Dutch</option>
          </select>
        </div>
        <button className="bottom-auto text-white px-3 border-gray-400 border-2 -mt-2 mx-8 items-centerbg-amazon_blue text-xs -ml-3">
          {" "}
          $ USD -U.S Dollar
        </button>

        <button className="bottom-auto items-center flex flex-wrap  text-white px-3 border-gray-400 border-2 -mt-2 mx-8 items-centerbg-amazon_blue text-xs -ml-3">
          {" "}
          <img
            width="30px"
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            className="mr-2 items-center"
          />
          United States
        </button>
      </div>
      <div className="bg-amazon_blue text-white ">
        <div className="justify-center text-center flex  bg-amazon_blue">
          <p className="mx-4 my-10 hover:underline cursor-pointer">
            Conditions of Use{" "}
          </p>
          <p className="mx-4 my-10 hover:underline cursor-pointer">
            Privacy Notice
          </p>
          <p className="mx-4 my-10 hover:underline cursor-pointer">
            Interest-Based Ads
          </p>
          <p className="mx-4 my-10  none">© 1996-2021, Amazon.com, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
