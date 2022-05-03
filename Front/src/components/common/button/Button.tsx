const Button = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return (
    <button className="bg-freenowRed-700 rounded-md w-48 h-12 text-white" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
