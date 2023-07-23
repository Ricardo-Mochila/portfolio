import Image from 'next/image'

export default function ProjectCard({src, title, devType, text, technologies, invert}) {
    return (
        <div className={`flex flex-col mt-[50px] ${invert ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className={`max-w-[80%] md:min-w-[50%] md:max-w-[50%] ${invert ? 'ml-auto' : ''}`}>
                <Image
                    src={src}
                    width={783}
                    height={479}
                    alt={title}
                    className='rounded-xl aspect-[16/9] object-cover object-left-top'
                />
            </div>

            <div className={`relative bg-background-color shadow-xl relative top-[-40px] rounded-xl p-[10px] md:p-[20px] pb-[20px] md:pb-[30px] md:ml-0 md:h-fit md:top-[unset] md:bottom-[-40px] md:mt-auto ${invert ? 'ml-[0px] mr-[40px]' : 'ml-[40px]'} ${invert ? 'md:left-[40px] md:mr-0' : 'md:left-[-40px]'}`}>
                <h4 className='text-secondary-color text-sm md:text-base mb-0 md:font-semibold'>{devType}</h4>
                <h3 className='text-white text-base md:text-xl mb-0 font-semibold md:font-bold tracking-wider'>{title}</h3>
                <p className='text-sm md:text-base text-neutral-400 md:mt-[10px] whitespace-pre-wrap'>{text}</p>
                <div className='absolute right-[10px] bottom-[-10px] flex gap-[10px]'>
                    {technologies.map(t => (
                        <span key={t} className='text-white uppercase font-semibold text-sm md:font-bold'>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}