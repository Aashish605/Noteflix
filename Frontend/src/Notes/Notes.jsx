import { NavLink } from "react-router-dom";
const Notes = () => {
  return (
    <>
      <div className="bg-secondary text-white h-fit">
        <h1 className="text-3xl md:text-4xl w-[80vw] mx-auto py-16 text-center">A complete Syllabus based notes of BSC.CSIT,BCA and BE</h1>
        <div className="w-[70vw] flex flex-wrap text-black gap-8 py-20  mx-auto justify-center ">
          <NavLink className="" to='/notes/CSIT' ><div className="bg-primary cursor-pointer group  w-[200px] h-[25vh] shadow-md  rounded-md grow flex items-center justify-center text-2xl relative">
            <span className='group-hover:z-10'>BSC.CSIT</span>
            <div className="absolute group-hover:z-0  w-[102%] h-[103%] -z-10   rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
          </div></NavLink>
          <NavLink to='/notes/BCA'><div className="bg-primary cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
            <span className='group-hover:z-10'>BCA</span>
            <div className="absolute group-hover:z-0  w-[102%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
          </div></NavLink>
          <NavLink to='/notes/BE'><div className="bg-primary cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
            <span className='group-hover:z-10'>BE</span>
            <div className="absolute  group-hover:z-0 w-[102%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
          </div></NavLink>
        </div>
      </div>
    </>
  )
}

export default Notes