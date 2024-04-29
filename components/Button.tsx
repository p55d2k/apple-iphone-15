interface ButtonProps {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ variant, children, className }: ButtonProps) => {
  return (
    <button
      className={`py-3 px-5 rounded-full ${className} ${
        variant === "primary" ? "bg-blue-500 text-white" : "border-solid border-blue-500 border-[1px] text-blue-500"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
