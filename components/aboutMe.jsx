import Image from 'next/image'

export default function AboutMe() {
    return (
        <section id='aboutMe' className='relative flex flex-row max-w-[1240px] mt-[50px] md:m-auto p-[20px] md:p-[40px] items-center'>
            <div className='flex flex-col flex-1 max-w-[700px] justify-center z-10 mr-[40%] absolute top-0 left-[20px] max-w-[60%] md:relative md:top-0 md:right-0 md:mr-0 h-[100%]'>
                <h1 className='text-white text-xl md:text-4xl mb-4 font-mono'>.name(<b className='text-secondary-color'>Ricardo Mochila</b>);</h1>
                <h2 className='font-mono text-secondary-color text-md md:text-xl mb-2'>FullStack Developer</h2>
                <p className='text-neutral-400 text-sm md:text-md'>
                As an enthusiastic Fullstack Developer with a keen interest in Design, I am driven by my passion for technology and the ever-evolving digital landscape.
                Continuously seeking to broaden my skills and knowledge, I am committed to constant improvement and staying abreast of the latest advancements in the field.
                </p>
            </div>
            <div className='flex-1 max-w-[60%] ml-auto min-w-[250px]'>
                <Image
                    src="/photo.png"
                    width={495}
                    height={790}
                    alt="Ricardo Mochila"
                />
            </div>
        </section>
    )
}