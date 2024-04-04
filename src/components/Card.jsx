const Card = ({ children }) => {
  return <div className="overflow-hidden h-fit">{children}</div>;
};

const Image = ({ src }) => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`w-full h-80 bg-cover bg-center`}
      ></div>
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="pt-4 pb-2">
      <h4 className="text-lg font-semibold truncate">{children}</h4>
    </div>
  );
};

const Body = ({ children }) => {
  return <div className="pb-2">{children}</div>;
};

Card.Image = Image;
Card.Title = Title;
Card.Body = Body;

export default Card;
