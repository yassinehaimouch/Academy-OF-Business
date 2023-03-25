import Button from "../UI/Button";
import classes from "./mainsection.module.css";
import student from "../../assets/./student_image.png";

const MainSection = () => {
  return (
    <section className={classes["main-section"]}>
      <div className={classes["left-side"]}>
        <div>
          <h1 className={classes["main-title"]}>
            Just Academy
            <br />
            OF Business.
          </h1>
          <h3 className={classes["main-description"]}>
            We Provide a complete range of products, printing
            <br />
            and typesetting industry. has been the industry's
            <br />
            standard dummy
          </h3>
        </div>
        <div className={classes["item-1"]}>
          <Button>Get Started</Button>
          <div className={classes["watch-video__section"]}>
            <div className={classes["watch-video__button"]}></div>
            <a
              href="https://www.youtube.com/"
              rel="noreferrer"
              target={"_blank"}
            >
              Watch Video
            </a>
          </div>
        </div>
        <div className={classes["learning__section"]}>
          <h2>20 Million Learners.15 Years.10% Free</h2>
          <div className={classes["learning-search__section"]}>
            <h3>What do You Want To leam today</h3>
            <button className={classes["button"]}>Search</button>
          </div>
        </div>
      </div>
      <div className={classes["right-side"]}>
        <img src={student} alt="student" />
      </div>
    </section>
  );
};

export default MainSection;
