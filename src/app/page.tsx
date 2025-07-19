import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BackgroundBeamsWithCollision } from "../components/Hero"
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/Navbar";
import { ThreeDMarquee } from "@/components/HeroSide";
import { GenerateEffect } from "@/components/AboutMe";
import AllSkills from "@/components/Skills";
import { Carousel } from "@/components/Projects";


export default function Home() {
  const images: string[] = [
    "/Hero/frontend-developer.png",
    "/Hero/software-developer.png",
    "/Hero/backend-developer.png",
    "/Hero/web-developer.png",
    "/Hero/mern-stack-developer.png",
    "/Hero/web-developer.png",
    "/Hero/frontend-developer.png",
    "/Hero/software-developer.png",
    "/Hero/web-developer.png",
    "/Hero/software-developer.png",
    "/Hero/mern-stack-developer.png",
    "/Hero/web-developer.png",
    "/Hero/frontend-developer.png",
    "/Hero/software-developer.png",
"/Hero/mern-stack-developer.png",    "/Hero/fullstack-developer.png",
    "/Hero/mern-stack-developer.png",
    "/Hero/web-developer.png",
    "/Hero/frontend-developer.png",
    "/Hero/software-developer.png",
    "/Hero/backend-developer.png",
    "/Hero/frontend-developer.png",
    "/Hero/mern-stack-developer.png",
    "/Hero/web-developer.png",
  ];


  
const slides = [
  {
    title: "Explore the Mountains",
    button: "Learn More",
    src: "/Project/ecommers.png",
href:"https://people-mart-nikita.netlify.app/"
  },
  {
    title: "Beachside Vibes",
    button: "Get Started",
    src: "/Project/peopleCo.png",
    href:"https://people-co-nikita.netlify.app/PeopleDirectory"
  },
  {
    title: "City Adventures",
    button: "Discover",
    src: "/Project/bookmyshow.png",
    href:"https://bootstrap-bookmyshow-clone.netlify.app/moviepage"
  },
  {
    title: "City Adventures",
    button: "Discover",
    src: "/Project/tinDog.png",
    href:"https://tin-dog-website-clone.netlify.app/"
  },
];


  

  return (
    <div className="relative">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "#" },
              { name: "About", link: "about" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <NavbarButton href="#contact">Hire Me</NavbarButton>
        </NavBody>
      </Navbar>
      
      <BackgroundBeamsWithCollision className=" px-4">
        <div className="flex flex-row items-center justify-center z-10">
          <div className="mb-8">
            <TextGenerateEffect words="Software Developer" />
          </div>
          
          <div className="w-full max-w-6xl h-[400px] z-40">
            <ThreeDMarquee images={images} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <GenerateEffect className="px-4 my-56"  words="Hi,
I'm Nikita      
Web Developer"/>
      <AllSkills />
      <Carousel slides={slides} />
    </div>
  );
}