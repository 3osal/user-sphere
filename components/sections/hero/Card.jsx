const Card = ({ icon, title, description }) => {
  return (
    <div className="px-[30px] py-[20px] rounded-md flex flex-col justify-center items-center text-center border border-bgColor/10 transition-all hover:translate-y-[-4px] hover:border-bgColor ">
      <span className="text-primary text-[40px]">{icon}</span>
      <h1 className="text-primary text-[15px] font-bold capitalize md:text-[30px]">
        {title}
      </h1>
      <p className="text-secondary text-[15px] capitalize">{description}</p>
    </div>
  );
};

export default Card;
