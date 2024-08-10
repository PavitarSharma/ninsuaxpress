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
      className="bg-primary text-white px-4 py-3 rounded-md hover:drop-shadow-lg hover:shadow hover:bg-primary/90"
    >
      {loading ? loadingMessage : label}
    </button>
  );
};

export default Button;
