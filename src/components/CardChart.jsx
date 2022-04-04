import React from 'react'

export default function CardChart({title, children}) {
	return (
		<div className="w-full shadow-customL dark:shadow-customD p-6 h-full rounded-2xl">
			<h3 className="font-semibold text-3xl mb-2">{title}</h3>
			{children}
		</div>
	)
}
