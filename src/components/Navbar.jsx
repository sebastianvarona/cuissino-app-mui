import React, {useState} from 'react';

export default function () {

	const Theme = () => {
		if(document.documentElement.classList.contains('dark')){
			return <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>;
		}else{
			return <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>;
		}
	}
	const [theme, setTheme] = useState(true);

	const toggleTheme = () => {
		setTheme(!theme);
		if(!theme){
			document.documentElement.classList.toggle('dark')
		}
	}

	return (
		<nav className="bg-[255,255,255,0.7] dark:bg-[rgba(21,28,35,0.7)] fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded h-24 flex">
			<div className="flex flex-wrap justify-end items-center w-full mx-10 self-center">
				<div className="flex items-center md:order-2 gap-6">

					{/* light/ dark mode */}
					<button onClick={toggleTheme} class="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition" type="button">
						<Theme />
					</button>

					{/* lang dropdown */}
					<button id="dropdownLang" data-dropdown-toggle="dropdown" class="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400  rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition" type="button">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
					</button>

					{/* lang dropdown menu*/}
					<div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
							<ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLang">
								<li>
									<a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-base">Español</a>
								</li>
								<li>
									<a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-base">English</a>
								</li>
							</ul>
					</div>


					{/* user dropdown */}
					<button type="button" className="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400  rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="userDropdown">
						<span className="sr-only">Open user menu</span>
						<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
					</button>
					{/* user dropdown menu */}
					<div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="userDropdown">
						<div className="py-3 px-4">
							<span className="block text-gray-900 dark:text-white">Bonnie Green</span>
							<span className="block font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
						</div>
						<ul className="py-1" aria-labelledby="dropdown">
							<li>
								<a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
							</li>
							<li>
								<a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
							</li>
							<li>
								<a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
							</li>
							<li>
								<a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
							</li>
						</ul>
					</div>
					<button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</button>
				</div>
			</div>
		</nav>
	);
}
