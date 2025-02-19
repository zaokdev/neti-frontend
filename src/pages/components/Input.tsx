import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ type, id, name, className, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={
        "w-full px-4 py-2 mt-2 bg-zinc-800 rounded-lg outline-none " + className
      }
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
