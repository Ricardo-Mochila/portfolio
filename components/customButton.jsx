'use client'

import { motion } from "framer-motion";

export default function CustomButton({text, href}) {

    return (
        <motion.a 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 700, damping: 10 }}
            className="w-fit px-[30px] py-[15px] text-sm md:text-md md:px-[40px] md:py-[20px] m-auto text-primary-color bg-secondary-color rounded-2xl uppercase"
            href={href}
        >
            <span className="font-semibold">{text}</span>
        </motion.a>
    )
}