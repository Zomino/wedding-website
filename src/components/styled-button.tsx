import * as React from "react"

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.PropsWithChildren {
    className?: string
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={`active:bg-elephant bg-elephant-darker hover:bg-elephant-dark text-elephant-lighter w-fit p-1 ${className}`} {...props}>
            <div className="border border-elephant-lighter py-2 px-5">{children}</div>
        </button>
    )
}

export default StyledButton
