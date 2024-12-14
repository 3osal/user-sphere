import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";


export const SIDEBAR_DATA = [
    {
        id : 0,
        lable : "home",
        icon : <MdOutlineDashboardCustomize />,
        path : '/dashboard'
    },
    {
        id : 1,
        lable : "Users",
        icon : <LuUsers2 />,
        path : '/dashboard/users'
    },
    {
        id : 2,
        lable : "add Users",
        icon : <RiUserAddLine />,
        path : '/dashboard/add-users'
    },
    {
        id : 3,
        lable : "my profile",
        icon : <FaRegUser />,
        path : '/dashboard/profile'
    },
    {
        id : 4,
        lable : "setting",
        icon : <IoSettingsOutline />,
        path : '/dashboard/setting'
    },
    {
        id : 5,
        lable : "help",
        icon : <IoMdHelpCircleOutline />,
        path : '/dashboard/help'
    },
]