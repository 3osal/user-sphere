
import { SlUserFemale } from "react-icons/sl";
const Card = ({lable, title , numbers , icon}) => {
  return (
    <div className="bg-white p-[15px] border-l-[0px] border-secondary rounded-md hover:border-mainColor hover:border-l-[10px] transition-all">
      <div className="flex justify-between items-center mb-4">
        <span className="text-primary font-bold capitalize text-[14px] ">{lable}</span>
        <span className="text-secondary">{icon}</span>
      </div>
      <h4 className="text-primary font-bold text-[25px]">{numbers}</h4>
      <h5 className="text-secondary">{title}</h5>
    </div>
  )
}

export default Card
