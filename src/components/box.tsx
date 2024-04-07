import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Box = ({
       children, className
}: { children: ReactNode, className?: string }) => {

       return (
              <div className={cn("bg-white dark:bg-[#1B2530] w-fit p-5  rounded-2xl shadow-md", className)}>
                     {children}
              </div>
       )
}

export default Box