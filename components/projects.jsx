import ProjectCard from "./projectCard"

export default function Projects() {

    const PROJECT_LIST = [
        {
            src: '/projects/nodeSandbox.jpg',
            title: 'Custom CMS',
            devType: 'FullStack Developer',
            text: 'This was the biggest project I have worked on.\nI was part of a 2 developer team that created a full scale custom CMS',
            technologies: ['nodejs', 'express', 'mongoDB'],
            invert: false
        },
        {
            src: '/projects/inovamar.png',
            title: 'Inovamar',
            devType: 'FullStack Developer',
            text: 'The first project lauched with the custom CMS created in NodeJs.\nIt was for an association that is part of one of the  biggest Portuguese companies Jerónimo Martins',
            technologies: ['nodejs', 'express', 'mongoDB'],
            invert: true
        },
        {
            src: '/projects/marshallHeadphones.png',
            title: 'Marshall Headphones',
            devType: 'FrontEnd Developer',
            text: 'I developed a landing page for a special campaign for Marshall Headphones Sweden',
            technologies: ['HTML', 'SASS', 'JS', 'SFCC'],
            invert: false
        },
        {
            src: '/projects/renova.png',
            title: 'Renova',
            devType: 'FullStack Developer',
            text: 'A website for the biggest paper company in Portugal.\nI was part of a 4 developer team, working with Salesforce commerce cloud  ',
            technologies: ['HTML', 'SASS', 'JS', 'SFCC'],
            invert: true
        },
        {
            src: '/projects/rawfood.png',
            title: 'RAWFOOD SHOP',
            devType: 'FullStack Developer',
            text: `A website for a Swedish company that exports natural goods. \nThis time I was part of 5 developer team, working with Salesforce commerce cloud`,
            technologies: ['HTML', 'SASS', 'JS', 'SFCC'],
            invert: false
        }
    ]

    return (
        <section id="projects" className="max-w-[1200px] m-auto p-[20px] md:p-[40px] mt-[50px] md:mt-[80px]">
            <h2 className="font-mono text-secondary-color flex text-md md:text-xl mb-2 relative after:flex after:h-[2px] after:w-[100%] after:bg-secondary-color after:self-center after:ml-[30px] after:opacity-20 after:mt-[5px]">.projects()</h2>

            <div className="flex flex-col gap-[30px] md:gap-[120px]">
                {
                PROJECT_LIST.map(p => (
                    <ProjectCard key={p.title} src={p.src} title={p.title} devType={p.devType} text={p.text} technologies={p.technologies} invert={p.invert}/>
                ))
                }
            </div>
        </section>
    )
}