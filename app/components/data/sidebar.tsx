import { Experience, Hello ,About,Skill,Contact} from "../pages";

export const menu = [
    {
        title: "Hello",
        link: '/#home',
        id:"home",
        content: <Hello/> 
    },
    {
        title: "About me",
        link: "/#about",
        id:"about",
        content: <About/>
    },
    {
        title: "Skill",
        link: "/#skill",
        id:"skill",
        content: <Skill/>
    },
    {
        title: "Experience",
        link: "/#experience",
        id:"experience",
        content: <Experience/>
    },
    {
        title: "Contact",
        link: "/#contact",
        id:"contact",
        content: <Contact/>
    }
]