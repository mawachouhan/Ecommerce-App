import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/solid";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className=" ml-2 cursor-pointer mr-2 hover:text-color-black">
          <p className="text-white mb-0 font-bold text-{5} mr-2">Deliver To</p>
          <LocationMarkerIcon className="w-8 text-white mr-3 -ml-1" />
          <p className="text-white mx-8 -my-7  hover:underline text-sm mb-2">
            India
          </p>
        </div>

        {/*Search*/}
        <div className="hidden sm:flex cursor-pointer items-center rounded-md flex-grow h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow focus:outline-none px-4 flex-shrink rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*right */}
        <div>
          <img
            width="50px"
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            className="mr-2 items-center ml-4  -mr-6  items-center hover:border-2 justify-center"
          />
        </div>

        <div className="text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="link cursor-pointer"
          >
            <p className="ml-4">
              {session ? `Hello ,${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm ml-4 ">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/*bottom nav*/}
      <div className="flex items-center space-x-3 p-2 pl-6 text-white text-sm bg-amazon_blue-light">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>

      <div className="float-right -mt-8">
        <button className="hidden lg:inline flex  text-white font-bold hover:border-2 flex-wrap mr-3   ">
          {" "}
          Amazon Response to COVID-19
        </button>
      </div>
    </header>
  );
}

export default Header;
