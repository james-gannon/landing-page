import {
  Download,
  Features,
  SectionWrapper,
  SectionWrapperVideo,
} from "./components";
import assets from "./assets/assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Join the Quest"
        description="Test your skills on the largest IRL adventure gaming platform in the world."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="About"
        description="A first-of-its-kind mobile app that blends the 
        fun of outdoor exploration, education and friendly competition 
        with the opportunity to win huge cash prizes along the way.
        "
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="How it Works"
        description="Onboard funds, create a Quest, and search for the treasure. Or, join a Quest near you!.
        "
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapperVideo
        title="Video Demo"
        description="A demonstration of CashQuest's MVP UI, including the capture of
        a randomly dropped treasure chest at a local beach."
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Brought to you by {""} <span className="bold">Cache Kings Ltd.</span>
        </p>
      </div>
    </div>
  );
};

export default App;
