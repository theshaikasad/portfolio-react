import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div id="PROJECTS" className="bg-neutral-900">
      <div className="flex h-40 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-40 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
    <div className=" text-white text-center text-7xl font-bold flex justify-center items-center">
          {/* Asad */}
          <br></br>
          Projects
        </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>   
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a href={card.repo}>
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/group-portrait-of-adorable-puppies-royalty-free-image-1687451786.jpg",
    title: "DOG BREED CLASSIFICATION",
    id: 1,
    repo: "https://github.com/theshaikasad/DogBreedClassification",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:1358/1*wEAtpMCNxjcW_9VZyGafdg.png",
    title: "AGE CALCULATOR APP WITH PYTHON",
    id: 2,
    repo: "https://github.com/theshaikasad/TkinterApp",
  },
  {
    url: "https://miro.medium.com/v2/0*BdetXYemwXwOqNTs.jpg",
    title: "IMAGE CLASSIFICATION",
    id: 3,
    repo: "https://github.com/theshaikasad/image-classification"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzTzUXPu57cI7p76jngD-b9Iamo3fI6dSs5Zn8C9txQ&s",
    title: "SIMPLE WEB PAGE",
    id: 4,
    repo: "https://github.com/theshaikasad/static-web-page",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJ1oK0KuICj5RAZyl1L35zT-v_5h1VnH4xshbqKsThQ&s",
    title: "Generate Faces",
    id: 5,
    repo: "https://github.com/theshaikasad/DCGANs"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxFIRtrNY12sDhR16uxKP0Ko00yd6VIfUOZlTNVVRVQ&s",
    title: "FIND WHICH CELEBRITY U LOOK LIKE",
    id: 6,
    repo: "https://github.com/theshaikasad/facial-app"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xP5_piNdj_xwS_qe9X9oCfGmTuuYBSWSrK_97wJvrg&s",
    title: "Movie Script generator",
    id: 7,
    repo: "https://github.com/theshaikasad/Gneratemoviescripts"
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    title: "React",
    id: 8,
  },
];