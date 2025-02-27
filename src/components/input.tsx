import { twMerge } from "tailwind-merge";

interface InputProps {
    className?: string;
    placeholder?: string;
}

export default function Input(props: InputProps) {
    return (
        <input type="text" name="text" className={twMerge("border border-gray-300 rounded-xs p-1.5 outline-0 w-[100%] text-[14px]", props.className)} placeholder={props.placeholder} />
    )
}