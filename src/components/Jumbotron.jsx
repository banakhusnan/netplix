const Jumbotron = ({ children }) => {
  return (
    <div className="w-full h-[35rem] bg-cover bg-center bg-[url('../public/bg-netflix.jpg')]">
      <div className="w-full h-full bg-gradient-to-b from-black from-10% via-transparent to-black to-90% flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default Jumbotron;
