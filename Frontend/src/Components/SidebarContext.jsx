/* eslint-disable react/prop-types */
import  { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = (e) => {
        if (isSidebarOpen && !e.target.closest('.sidebar')) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <SidebarContext.Provider value={{ closeSidebar, isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);