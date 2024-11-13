import { useSidebar } from "../Components/SidebarContext";
import { NavLink,useNavigate } from "react-router-dom";
import { useState} from "react";

const Home = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState(" ")
    const { closeSidebar } = useSidebar();
    const handlevalue = (e) => {
        const data = e.target.value;
        setvalue(data);
    };
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            console.log('ok');
            navigate(`search/${value}`)
        }
    }
    
    return (
        <>
            <div onClick={closeSidebar} className="h-full  ">
                <div className=" w-full  flex flex-col items-center  md:flex-row  bg-primary      ">
                    <div className="md:w-1/2 flex flex-col mt-[10rem] mx-10 md:my-[10rem]  ">
                        <h1 className="text-5xl">Welcome to <span className="text-tertiary" >Noteflix</span></h1>
                        <div className="my-2">An online learning platform made for students by the students. </div>
                        <div onKeyDown={handleSearch} className="flex  bg-white rounded-md md:w-[30vw] w-[65vw] py-2 my-4">
                            <input type="text"  onChange={handlevalue} className="md:w-[25vw] w-[50vw] mx-2 outline-none " placeholder="Search here" />
                            <NavLink  to={`search/${value}`}><box-icon  name='search-alt-2'></box-icon></NavLink>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center ">
                        <img src="/peoples.png" alt="" className="scale-x-[-1] z-[0] " />
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl my-10 text-center">Find Your Notes</h1>
                <div className="w-[70vw] flex flex-wrap  gap-8 my-20  mx-auto justify-center ">
                    <NavLink className="" to='/notes/CSIT' ><div className="bg-primary cursor-pointer group  w-[200px] h-[25vh] shadow-md  rounded-md grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BSC.CSIT</span>
                        <div className="absolute group-hover:z-0  w-[102%] h-[103%] -z-10   rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                    <NavLink to="/notes/BCA"><div className="bg-primary cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BCA</span>
                        <div className="absolute group-hover:z-0  w-[102%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                    <NavLink to="/notes/BE"><div className="bg-primary cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BE</span>
                        <div className="absolute  group-hover:z-0 w-[102%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                </div>
                <div className="w-[95vw] border-2 my-4 mx-auto border-slate-800"></div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-4xl my-10 ">About Us</h1>
                    <p className="w-[70vw] mx-auto  text-center" >Greetings! We are delighted to have you visit Notesflix, a helpful educational resource for students. Our website is dedicated to providing students with the tools and resources they need to succeed in their studies. We strive to make our materials easy to understand and relevant to students, offering a range of resources such as notes, pdf files, presentations, assignments, and notices. Our goal is to support students in overcoming any challenges they may face as they pursue their education . Thank you for choosing us as your go-to source for learning and support.</p>
                    <NavLink to='aboutus'><button className="px-4 py-6 w-fit my-8 bg-tertiary rounded-md text-white ">Learn More</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home