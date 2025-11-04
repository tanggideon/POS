"use client"

import { Button } from "../ui/button"

const SubmitBtn = ({label}: {label:string}) => {
  return (
    <Button type="submit" className="w-full cursor-pointer bg-[#F8C86C] hover:bg-[#ff8f61] ease-in-out duration-300 text-black font-bold">
      {label}
    </Button>
  )
}

export default SubmitBtn