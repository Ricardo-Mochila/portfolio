import ProjectCard from "./projectCard"
import CustomButton from "./customButton"

export default function Contacts() {

   

    return (
        <section id="contact" className="max-w-[1200px] m-auto p-[20px] md:p-[40px] mt-[50px] md:mt-[80px]">
            <h2 className="font-mono text-secondary-color flex text-md md:text-xl mb-2 relative after:flex after:h-[2px] after:w-[100%] after:bg-secondary-color after:self-center after:ml-[30px] after:opacity-20 after:mt-[5px]">.contactMe()</h2>

            <div className="flex flex-col my-[80px] gap-[30px] md:gap-[120px]">
                <CustomButton text="Contact Me" href={'mailto:ricardo.mochila@hotmail.com'}/>
            </div>
        </section>
    )
}