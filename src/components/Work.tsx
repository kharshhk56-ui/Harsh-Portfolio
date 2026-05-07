import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "YaMarkets AI",
      category: "AI Technology",
      tools: "Premiere Pro, After Effects",
      video: "/My%20Work/YaMarkets/YaMarkets%20AI.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
    {
      title: "Academy App",
      category: "Mobile App",
      tools: "Premiere Pro, Canva",
      video: "/My%20Work/YaMarkets/YaMarkets%20Academy%20App%20Video.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
    {
      title: "Ads Campaign",
      category: "Marketing",
      tools: "Premiere Pro, After Effects",
      video: "/My%20Work/YaMarkets/Yamarkets%20Ads%20Video.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
    {
      title: "Copy Trading",
      category: "Fintech",
      tools: "Premiere Pro, After Effects",
      video: "/My%20Work/YaMarkets/Copy%20Trading%20Yamarkets%20Video.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
    {
      title: "Dubai Expo",
      category: "Event Coverage",
      tools: "Videography, Premiere Pro",
      video: "/My%20Work/YaMarkets/03%20Yamarkets%20Dubai%20Expo%20Video.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
    {
      title: "Market Insights",
      category: "Social Media",
      tools: "Reels, After Effects",
      video: "/My%20Work/YaMarkets/Yamarkets%20Reel%20Market%20Insights.mp4",
      image: "/Images/Adobe%20Premire.jpeg",
    },
  ];

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} video={project.video} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
