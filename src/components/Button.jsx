const Button = ({
  type = "button",
  onClick = () => {},
  disabled = false,
  label,
  loading,
  loadingMessage,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className="mt-4 bg-primary text-white px-4 py-3 rounded-md"
    >
      {loading ? loadingMessage : label}
    </button>
  );
};

export default Button;
