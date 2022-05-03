const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div
      className="w-72 h-80 bg-freenowRed-700 flex flex-col items-center  justify-center rounded-lg hover:bg-freenowRed-800 "
      data-testid="cardContainer"
    >
      <h4 className="text-2xl">{title}</h4>
      <h2 className="text-3xl text-center mt-2">{text}</h2>
    </div>
  );
};

export default Card;
