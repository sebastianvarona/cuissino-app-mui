import React, { useState } from 'react'

export default function Sidebar() {
    
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
        const mainContent = document.querySelector('#main-content')
        mainContent.classList.toggle('md:w-[calc(100%-16rem)]')
        mainContent.classList.toggle('lg:w-[calc(100%-18rem)]')
    }
		const Hamburguer = () => {
			if (!toggle) {
				return <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>;
			}else{
				return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
			}
		}

    return (
        
        <div className={`p-3 pt-0 fixed top-0 left-0 h-screen z-20 border-r dark:border-gray-800 border-dashed ${toggle? "" : "md:w-64 lg:w-72 md:px-6"}`}>

            {/* BRAND */}
            <div className={`flex items-center  cursor-default relative h-24 z-20 mb-16 ${toggle? "justify-center" : ""}`}>
                <img src="./icon2.svg" alt="cuisiino" className='h-9 cursor-pointer' />
                <span className={`cuisiino-text hidden ${toggle? "" : "md:block"} text-3xl font-medium mr-1`}>Cuisiino</span>
            </div>

            {/* HAMBURGUER */}
            <div className={`hidden absolute h-20 md:flex items-center top-2 ${toggle? "left-20" : "left-20 md:left-64 lg:left-72"}`}>
                <button onClick={handleClick} className="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition ml-8">
									<Hamburguer />
								</button>
            </div>

            {/* DASHBOARD */}
            <span className={`text-sm font-bold text-gray-400 py-8 hidden ${toggle? "" : "md:block"}`}>DASHBOARD</span>
            <ul className={`w-full text-gray-500 dark:text-gray-400 text-lg pt-2 flex flex-col gap-8`}>
								<li className="sidebar-item active cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
										<span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
										</span>
										<span className={`hidden ${toggle? "" : "md:block"}`}>Home</span>
								</li>
								<li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
										<span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
										{/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> */}
										</span>
										<span className={`hidden ${toggle? "" : "md:block"}`}>Analitics</span>
								</li>
                <li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
                    <span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
										</span>
                    <span className={`hidden ${toggle? "" : "md:block"}`}>Sales</span>
                </li>
                <li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
                    <span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
										</span>
                    <span className={`hidden ${toggle? "" : "md:block"}`}>Inventory</span>
                </li>
                <li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
                    <span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
										</span>
                    <span className={`hidden ${toggle? "" : "md:block"}`}>Staff</span>
                </li>
                <li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center transition hover:text-primary">
                    <span class={`material-icons-round text-2xl flex items-center ${toggle? "" : "md:mr-2"}`}>
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
										</span>
                    <span className={`hidden ${toggle? "" : "md:block"}`}>Settings</span>
                </li>
            </ul>
            

        </div>

    )
}
