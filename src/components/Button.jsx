const Button = ({
  children,
  type = "submit",
  className = "bg-red-700 px-3",
  ...props
}) => {
  return (
    <button {...props} type={type} className={className + " rounded py-2"}>
      {children}
    </button>
  );
};

export default Button;
