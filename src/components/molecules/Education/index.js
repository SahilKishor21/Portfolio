import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          {/* Lottie Animation */}
          <Player
            autoplay
            loop
            src={readingBook}
            style={{ height: "70%", width: "90%" }}
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Indian Institute of Information Technology, Ranchi
              </h3>
              <p className="text-sm text-neutral font-semibold">2021 - 2025</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I am currently pursuing my Bachelor's Degree in Electronics and Communication Engineering with specialization in Embedded Systems and Internet of Things.
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                St.Joseph High School, Patna
              </h3>
              <p className="text-sm text-neutral font-semibold">2020</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have completed my 12th grade with major subjects as Physics, Chemistry, Mathematics and Computer Science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
