import React from 'react';
import DisplayIcon from './DisplayIcon';

export default function CardAction({title, icon}) {
	const iconColor = () => {
		if(title === 'Add order'){
			return 'bg-[rgba(100,255,150,0.3)] dark:bg-[rgba(100,255,150,0.2)] hover:bg-[rgba(100,255,150,0.5)] dark:hover:bg-[rgba(100,255,150,0.4)]';
		}else if(title === 'Remove order'){
			return 'bg-[rgba(253,104,62,0.3)] dark:bg-[rgba(253,104,62,0.2)] hover:bg-[rgba(253,104,62,0.5)] dark:hover:bg-[rgba(253,104,62,0.4)]';
		}else if(title === 'Add cost'){
			return 'bg-[rgba(235,92,104,0.3)] dark:bg-[rgba(235,92,104,0.2)] hover:bg-[rgba(235,92,104,0.5)] dark:hover:bg-[rgba(235,92,104,0.4)]';
		}else if(title === 'Remove cost'){
			return 'bg-[rgba(76,168,255,0.3)] dark:bg-[rgba(76,168,255,0.2)] hover:bg-[rgba(76,168,255,0.5)] dark:hover:bg-[rgba(76,168,255,0.4)]';
		}
	}

	return (
		<div className={`cursor-pointer flex-1 shadow-customL dark:shadow-customD rounded-2xl flex max-h-16 min-w-min justify-center items-center p-2 overflow-hidden transition pr-6 ${iconColor()}`}>
			<span className={`flex rounded-full p-2 items-center`}>
				<DisplayIcon icon={icon} />
			</span>
			<h3 className="text-lg font-semibold">{title}</h3>
		</div>
	)
}
