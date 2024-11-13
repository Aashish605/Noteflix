import 'boxicons'
import { useSidebar } from '../Components/SidebarContext'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    const {closeSidebar} = useSidebar()

    return (
        <>
        <div onClick={closeSidebar} className="w-full flex flex-col items-center justify-between  bg-primary">
            <img src="/logo.png" alt="logo" className="w-[30%] h-[35%] sm:w-[20%] lg:w-[15%] "  />
            <p className='flex items-center font-semibold text-sm'>Created with  <box-icon size="sm" color="red" type="solid" animation="tada" name="heart"></box-icon> by Aashish and Arjun  </p>
            <p className='text-sm font-semibold '>Copyright © 2024 - All right reserved</p>
            <div className='flex my-8 gap-4 '>
            <NavLink to='maintenance'><box-icon name='facebook-circle' type='logo' animation="tada-hover" ></box-icon></NavLink>
            <NavLink to='maintenance'><box-icon name='gmail' type='logo' animation="tada-hover" ></box-icon></NavLink>
            <NavLink to='maintenance'><box-icon name='telegram' type='logo' animation="tada-hover" ></box-icon></NavLink>
            </div>
        </div>
        </>
    )
}

export default Footer