import * as React from "react";

import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const radius = 100; // change this to increase the rdaius of the hover effect
		const [visible, setVisible] = React.useState(false);

		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		function handleMouseMove({ currentTarget, clientX, clientY }: any) {
			const { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
		return (
			<motion.div
				style={{
					background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="p-[2px] rounded-lg transition duration-300 group/input"
			>
				<input
					type={type}
					className={cn(
						`flex h-10 w-full border-none text-primary shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
						className,
					)}
					ref={ref}
					{...props}
				/>
			</motion.div>
		);
	},
);
AnimatedInput.displayName = "AnimatedInput";

export { Input, AnimatedInput };
