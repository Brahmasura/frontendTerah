import style from "./App.module.scss";
import first from "./assets/image-daniel.jpg";
import second from "./assets/image-jonathan.jpg";
import third from "./assets/image-kira.jpg";
import fourth from "./assets/image-jeanette.jpg";
import fifth from "./assets/image-patrick.jpg";

import Card from "./component/card/Card";

const cardArray = [
  {
    image: first,
    name: "Daniel Clifford",
    title:
      "I recieved a job offer mid-course, and the subjects i learned were current, if not more so, in the company i joined. I honestly feel i got every penny's worth",
    description:
      "I was an EMT for many years before i joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling- time of my life. Since completing the course, I've successfully switched careers, working as a Softwae Engineer at a Vr startup.",
    color: "#7541C8",
    paraColor:"white"
  },
  {
    image: second,
    name: "Jonathan Walters",
    title: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments i've made in myself.",
    color: "#48556A",
    paraColor:"white"
  },
  {
    image: third,
    name: "Kira Whittle",
    title: "Such a life-changin experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can heop me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and i never had to wait long for assistance. The agile team porject, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helpem me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    color: "violet",
    paraColor:"black"
  },
  {
    image: fourth,
    name: "Jeanette Harmon",
    title: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wornderful experience! I now have a job i really enjoy, and make a good living while doing something i love.",
    color: "violet",
    paraColor:"black"
  },
  {
    image: fifth,
    name: "Patrick Abrams",
    title:
      "Awesome teaching support from TAss who did the bootcamp themseves. Getting guidance from them and learning from their experiene was easy.",
    description:
      "The staff seem genuinely concerned about my progress which i find really refreshing. The Program gave me the confidence necessary to be able to go out in the world and presend myself as a capable junior developer. The statndard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    color: "#19212E",
    paraColor:"white"
  },
];

function App() {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.container}>
          <div className={style.first}>
            <Card
              image={cardArray[0].image}
              name={cardArray[0].name}
              title={cardArray[0].title}
              description={cardArray[0].description}
              color={cardArray[0].color}
            />
          </div>
          <div className={style.second}>
            {" "}
            <Card
              image={cardArray[1].image}
              name={cardArray[1].name}
              title={cardArray[1].title}
              description={cardArray[1].description}
              color={cardArray[1].color}
            />
          </div>
          <div className={style.third}>
            {" "}
            <Card
              image={cardArray[2].image}
              name={cardArray[2].name}
              title={cardArray[2].title}
              description={cardArray[2].description}
              color={cardArray[2].color}
            />
          </div>
          <div className={style.fourth}>
            {" "}
            <Card
              image={cardArray[3].image}
              name={cardArray[3].name}
              title={cardArray[3].title}
              description={cardArray[3].description}
              color={cardArray[3].color}
            />
          </div>
          <div className={style.fifth}>
            {" "}
            <Card
              image={cardArray[4].image}
              name={cardArray[4].name}
              title={cardArray[4].title}
              description={cardArray[4].description}
              color={cardArray[4].color}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
