const Input = ({
  type = "text",
  name,
  id,
  className = "",
  placeholder = "Type in here...",
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      name={name}
      id={id}
      className={
        "border rounded px-2 focus:ring-0 focus:outline-none focus:bg-transparent " +
        className
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
