import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useSidebar } from './SidebarContext';


const Navbar = () => {

    const { closeSidebar, isSidebarOpen,setIsSidebarOpen } = useSidebar();


    const [contentHeight, setContentHeight] = useState('100vh');


    const handleSidebarClick = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const updateHeight = () => {
            const bodyHeight = document.body.offsetHeight;
            setContentHeight(`${bodyHeight}px`);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <>
            <div onClick={closeSidebar} className='sticky top-0 z-10 shadow-md' >
                <div className="flex h-[9vh] md:hidden relative bg-primary w-full items-center justify-between" >
                    <NavLink to=''><img src="/logo.png" alt="logo" className="w-[50%]" /></NavLink>
                    <img
                        src="/menu.png"
                        alt="menu"
                        className="w-[5%] mx-5"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                    <div className={`fixed top-0 right-0 w-[70vw]  h-full bg-primary  transition-transform duration-700 ease-in-out transform ${isSidebarOpen ? 'shadow-[-4px_0px_4px_0px_rgba(0,0,0,0.3)]' : 'translate-x-full'}`} style={{ height: contentHeight }} onClick={handleSidebarClick}>
                        <div className="my-5 mx-4">
                            <img
                                src="/close.png"
                                alt=""
                                className="w-[15%]"
                                onClick={() => setIsSidebarOpen(false)}
                            />
                        </div>
                        <ul className="">
                            <li className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/'>Home</NavLink></li>
                            <li className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/notes'>Notes</NavLink></li>
                            <li className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/pastpapers'>Past Papers</NavLink></li>
                            <li className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/syllabus'>Syllabus</NavLink></li>
                            <li className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/aboutus'>About Us</NavLink></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='sticky top-0 z-10' >
            <div className=" hidden   md:flex justify-between items-center h-[9vh] w-full bg-primary shadow-md ">
            <NavLink to=''><img src="/logo.png" alt="Notesflix logo" className=" lg:w-[45%] md:w-[60%] " /></NavLink>
                    <div className="">
                        <ul className="flex flex-col md:flex-row gap-7 text-[1.05rem] ">
                            <li className=" px-3 flex items-center  " ><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/'>Home</NavLink></li>
                            <li className="relative px-3 py-4 flex items-center group"><NavLink className={({ isActive }) => ` group-hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/notes'>Notes</NavLink><img src="/arrow.png" alt="arrow" className='  group-hover:rotate-180 duration-300 ease-in-out '  />
                                <ul className="absolute left-[-2rem] top-full shadow-xl bg-primary rounded-md hidden group-hover:block  ">
                                    <li className="px-10 py-4"><NavLink to='/notes/CSIT' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BSC.CSIT</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/notes/BCA' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BCA</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/notes/BE' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BE</NavLink></li>
                                </ul>
                            </li>
                            <li className=" group relative px-3 flex items-center "><NavLink className={({ isActive }) => ` text-center group-hover:text-slate-600 ${isActive ? "  text-tertiary hover:text-tertiary" : ""}`} to='/pastpapers'>Past Papers</NavLink><img src="/arrow.png" alt="arrow" className=' group-hover:rotate-180 duration-300 ease-in-out '  />
                                <ul className="absolute min-[1286px]:left-[-1rem] shadow-xl left-[-20px] top-full rounded-md group-hover:block  bg-primary hidden">
                                    <li className="px-10 py-4"><NavLink to='/pastpapers/CSIT' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BSC.CSIT</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/pastpapers/BCA' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BCA</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/pastpapers/BE' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BE</NavLink></li>
                                </ul>
                            </li>
                            <li className=" group relative px-3 flex items-center "><NavLink className={({ isActive }) => ` text-center group-hover:text-slate-600 ${isActive ? "  text-tertiary hover:text-tertiary" : ""}`} to='/syllabus'>Syllabus</NavLink><img src="/arrow.png" alt="arrow" className=' group-hover:rotate-180 duration-300 ease-in-out '  />
                                <ul className="absolute min-[1286px]:left-[-1rem] shadow-xl left-[-20px] top-full rounded-md group-hover:block  bg-primary hidden">
                                    <li className="px-10 py-4"><NavLink to='/syllabus/CSIT' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BSC.CSIT</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/syllabus/BCA' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BCA</NavLink></li>
                                    <li className="px-10 py-4"><NavLink to='/syllabus/BE' className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} >BE</NavLink></li>
                                </ul>
                            </li>
                            <li className="px-3 mr-8 flex items-center "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-tertiary hover:text-tertiary" : ""}`} to='/aboutus'>About us</NavLink></li>
                        </ul>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Navbar