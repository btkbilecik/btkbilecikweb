"use client";

export function Logo({
	className = "w-6 h-6 text-blue-500",
}: { className?: string }) {
	return (
		<svg
			width="207"
			height="240"
			viewBox="0 0 207 240"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>BTK</title>
			<path
				d="M11.294 57.8289C-1.9467 31.2368 17.3947 0 47.1008 0H102.5L201.023 186.922C213.729 211.028 196.25 240 169 240V240L102 240L11.294 57.8289Z"
				fill="#6256CA"
			/>
			<g filter="url(#filter0_i_225_34)">
				<path
					d="M102.5 0H157.658C187.422 0 206.761 31.3482 193.405 57.9481L102 240H42V240C14.4582 240 -3.43591 210.993 8.92215 186.379L102.5 0Z"
					fill="#2F2E7C"
				/>
			</g>
			<defs>
				<filter
					id="filter0_i_225_34"
					x="4.93896"
					y="0"
					width="192.771"
					height="244"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_225_34"
					/>
				</filter>
			</defs>
		</svg>
	);
}
export function LogoWithText({
	className = "w-6 h-6 text-blue-500",
}: { className?: string }) {
	return (
		<div className="flex items-center justify-center space-x-1">
			<svg
				width="207"
				height="240"
				viewBox="0 0 207 240"
				fill="none"
				className={className}
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>BTK</title>
				<path
					d="M11.294 57.8289C-1.9467 31.2368 17.3947 0 47.1008 0H102.5L201.023 186.922C213.729 211.028 196.25 240 169 240V240L102 240L11.294 57.8289Z"
					fill="#6256CA"
				/>
				<g filter="url(#filter0_i_225_34)">
					<path
						d="M102.5 0H157.658C187.422 0 206.761 31.3482 193.405 57.9481L102 240H42V240C14.4582 240 -3.43591 210.993 8.92215 186.379L102.5 0Z"
						fill="#2F2E7C"
					/>
				</g>
				<defs>
					<filter
						id="filter0_i_225_34"
						x="4.93896"
						y="0"
						width="192.771"
						height="244"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="shape"
							result="effect1_innerShadow_225_34"
						/>
					</filter>
				</defs>
			</svg>
			<h1>Bilgisayar ve Teknoloji Kulübü</h1>
		</div>
	);
}
