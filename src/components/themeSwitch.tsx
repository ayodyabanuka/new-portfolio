'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FiSun, FiMoon } from "react-icons/fi"
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const ThemeSwitch = () => {
       const [mounted, setMounted] = useState(false)
       const { setTheme, resolvedTheme } = useTheme()
       useEffect(() => setMounted(true), [])

       if (!mounted) return (
              <Image
                     src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                     width={36}
                     height={36}
                     sizes="36x36"
                     alt="Loading Light/Dark Toggle"
                     priority={false}
                     title="Loading Light/Dark Toggle"
              />
       )

       if (resolvedTheme === 'dark') {
              return <motion.div whileTap={{ scale: 0.95 }} onClick={() => setTheme('light')} className="py-3 cursor-pointer text-gray-400 px-5 flex items-center gap-4 rounded-full border m-4 select-none bg-[#2E3947] hover:border-gray-400 transition-all duration-100">
                     <IoMoon className="text-gray-400" />Dim
              </motion.div>


       }

       if (resolvedTheme === 'light') {
              return <motion.div whileTap={{ scale: 0.95 }} onClick={() => setTheme('dark')} className="py-3 cursor-pointer px-5 flex items-center gap-4 rounded-full border m-4 select-none hover:bg-gray-200 transition-all duration-100">
                     <IoMoonOutline />Dim
              </motion.div>

       }
}

export default ThemeSwitch