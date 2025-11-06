import { CompanyDetails } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";
import { IconLocation, IconMail, IconPhoneCall, IconTrash } from "@tabler/icons-react";
import React from "react";
import { PosTable } from "../(components)/PosTable";
import { Scroll } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Details = CompanyDetails;

const POS = () => {
  return (
    <div className="flex flex-1 w-full min-h-screen">
      <div className="grid grid-cols-5 grid-rows-5 gap-5 px-10 mt-10 w-full">
        <div className="w-full flex-1 bg-white py-5 rounded-md border-2 px-10 border-amber-500 col-span-3 row-span-4">
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
          <Separator className="my-5 h-1 bg-gray-300 w-full" />
          <div>
            {/* input field with filtering options to search for products by name or code */}
            <input
              type="text"
              autoFocus
              placeholder="Search for products by name or code..."
              className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <PosTable />
            <Separator className="my-5 h-1 bg-gray-300 w-full" />
            <div className="flex justify-between">

                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center">
                  <IconTrash size={16} className="" />
                </button>
              {/* buttons for completing the sale, printing the receipt, and clearing the cart */}
              <div className="flex justify-end gap-5">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Complete Sale
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Print Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 row-span-4 grid grid-cols-2 gap-5 grid-rows-4">
          <div className="bg-white rounded-md"></div>
          <div className="bg-white rounded-md"></div>
          <div className="bg-white row-span-3 col-span-2 rounded-md p-5">
            <span className="font-bold text-lg text-gray-700">Recent Transactions</span>
            <Separator className="my-5 h-1 bg-gray-300 w-full" />
            <div className="flex flex-col gap-3 w-full h-full">
              <TransactionCard transactionID="INV001" status="Completed" amount="$150.00" />
              <TransactionCard transactionID="INV002" status="Pending" amount="$200.00" />
              <TransactionCard transactionID="INV003" status="Completed" amount="$350.00" />
              <TransactionCard transactionID="INV004" status="Unpaid" amount="$400.00" />
              <TransactionCard transactionID="INV005" status="Completed" amount="$500.00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;

function TransactionCard({transactionID, status, amount, items}: {transactionID: string; status: string; amount: string, items?: any}) {
  return (
    <div className="bg-gray-100 p-4 rounded-md flex flex-col">
      <div className="w-full flex flex-row justify-between">
        <span className="font-semibold text-gray-700">{transactionID}</span>
        <div>
          <span className={`font-semibold ${status === "Completed" ? "text-green-600" : "text-red-600"}`}>
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
}