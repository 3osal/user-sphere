import NavBar from "../../components/layout/navbar/NavBar"
import Sidebar from "../../components/layout/sidebar/SideBar"


const layoutDashboard = ({children}) => {
  return (
    <div className="flex flex-row">
      <div className="w-auto">
        <Sidebar />
      </div>
    <div className=" min-h-screen bg-bgAlt w-full overflow-hidden ml-[50px] sm:ml-[50px]">
        <NavBar />
        <main className="px-[20px] py-[10px]">
        {children}
        </main>
      </div>
    </div>
  )
}

export default layoutDashboard