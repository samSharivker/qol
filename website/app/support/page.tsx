"use client";
import Link from "next/link";
import Image from "next/image";
import rtr from "@/public/rtr.png";

export default function Support() {
  return (
    <div className="text-center flex flex-col items-center m-5">
      <div className="max-w-7xl justify-items-center flex lg:flex-row-reverse flex-col-reverse items-center gap-5 bg-slate-100 p-10">
        <div>
          <Image
            className="h-auto lg:max-w-80 rounded-lg"
            src={rtr}
            alt="Rosie the Riveter"
          />
          <p className="text-sm text-left">
            Source: U.S. Department of Defence
          </p>
        </div>
        <div className="shadow-md flex flex-col text-center items-center gap-8 bg-slate-200 p-10 rounded-lg">
          <p className="text-5xl flex-wrap kalam-bold">
            Flip the Script: Pre-diabetes is Our Wake-Up Call to Rethink School
            Curriculum!
          </p>
          <p className="max-w-md leading-loose text-2xl">
            To create an impact and change, we need the support of city
            residents. With your assistance, we can urge New York City schools
            to implement stronger diabetic education in their health curriculums
            to help keep future generations healthy.
          </p>
          <Link href="https://www.change.org/p/flip-the-script-pre-diabetes-is-our-wake-up-call-to-rethink-school-curriculum">
            <button className="kalam-bold bg-red-600 p-3 hover:scale-110 transition ease-in duration-100 transform rounded-lg text-white text-3xl">
              Sign Petition!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
