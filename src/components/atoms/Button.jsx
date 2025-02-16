
export const Button = ({ text, onClick }) => {
  return (
    <button className="bg-orange-300 hover:bg-orange-400 px-3 py-1 rounded transition-colors" onClick={onClick}>
      <span className="text-black  font-bold">{text}</span>
    </button>
  );
};
