import React from 'react'

interface TextInputProps {
    type?: string;
    label?: string;
    placeholder?: string;
}


const TextInput = ({type, label, placeholder}:TextInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2"> 
        <label htmlFor={label} className="block mb-2 text-sm font-bold text-gray-900">{label}</label>
        <input 
            type={type || "text"} 
            id={label} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F8C86C] focus:border-[#F8C86C] block w-full p-2.5" 
            placeholder={placeholder}
            required 
        />
    </div>
  )
}

export default TextInput