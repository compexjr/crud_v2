import { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button className={twMerge("bg-gray-200 rounded-xs border border-gray-300 px-3 py-1.5 flex flex-row justify-center items-center gap-3 text-[14px] active:bg-gray-500", props.className)}>
            {props.children}
        </button>
    )
}