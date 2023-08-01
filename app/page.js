import AboutMe from "../components/aboutMe";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Slider from "../components/slider";

export const metadata = {
    title: 'Ricardo Mochila',
    description: 'Software Engineer - Ricardo Mochila',
}

export default function Page() {
    return (
        <main>
            <AboutMe/>
            {/* <Slider/> */}
            <Projects/>
            <Contacts/>
        </main>
    )
}