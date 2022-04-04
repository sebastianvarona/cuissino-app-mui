import React from 'react';
import DisplayIcon from './DisplayIcon'

export default function CardOne({title, icon, data}) {

	const iconColor = () => {
		if(title === 'Sales'){
			return 'bg-[rgba(76,168,255,0.3)] dark:bg-[rgba(76,168,255,0.2)]';
		}else if(title === 'Revenue'){
			return 'bg-[rgba(100,255,150,0.3)] dark:bg-[rgba(100,255,150,0.2)]';
		}else if(title === 'Cost'){
			return 'bg-[rgba(235,92,104,0.3)] dark:bg-[rgba(235,92,104,0.2)]';
		}
	}

	return (
		<div className="flex-1 shadow-customL dark:shadow-customD rounded-2xl flex items-center p-6 overflow-hidden">
			<div className="flex-1">
				<h5 className="font-semibold text-3xl mb-6">{title}</h5>
				<div className="flex gap-4">
					<span className={`flex rounded-full p-2 items-center ${iconColor()}`}>
						<DisplayIcon icon={icon} />
					</span>
					<h3 className="text-4xl font-semibold">{data}</h3>
				</div>
			</div>

		</div>
	)
}
