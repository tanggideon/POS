import { CompanyDetails } from "@/lib/constants";
import { IconLocation, IconMail, IconPhoneCall } from "@tabler/icons-react";
import React from "react";

const Details = CompanyDetails;

const POS = () => {
  return (
    <div className="flex flex-1 w-full min-h-screen">
      <div className="grid grid-cols-5 grid-rows-5 gap-5 px-10 mt-10 w-full">
        <div className="w-full flex-1 bg-white py-5 rounded-md border-2 border-amber-500 col-span-3 row-span-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="font-bold text-gray-700 text-2xl">{Details.name}</h1>
            <div className="flex items-center gap-5">
              <div className="flex gap-3 items-center justify-center">
                <IconLocation />
                <span className="font-semibold text-sm text-gray-600">
                  {Details.location}
                </span>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <IconMail />
                <span className="font-semibold text-sm text-gray-600">
                  {Details.email}
                </span>
              </div>
               <div className="flex gap-3 items-center justify-center">
                <IconPhoneCall />
                <span className="font-semibold text-sm text-gray-600">
                  {Details.contact}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-500"></div>
      </div>
    </div>
  );
};

export default POS;
