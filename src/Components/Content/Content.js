import classes from "./content.module.css";
import textImage from "../../assets/Group 18433.png";
import student from "../../assets/Group 18402.png";
import student2 from "../../assets/Group 18407.png";
import Button from "../UI/Button";
import Galleryitem from "../GalleryItem/Galleryitem";
import galleryImg from "../../assets/Rectangle 4956.png";
import starts from "../../assets/starts.png";
import sliderIMG from "../../assets/sliderIMG.png";

const Content = () => {
  return (
    <div className={classes.bg}>
      <div className={classes["container__texts"]}>
        <h1>
          We Collaborate With 150+ Leading
          <br />
          Universities And Companies
        </h1>
        <img src={textImage} alt="img_text" />
      </div>
      <div className={classes["student__experiences--items"]}>
        <img src={student} alt="student_img" />
        <div className={classes["student__experiences"]}>
          <h1>
            Build Personalized student
            <br />
            Experiences
          </h1>
          <p>
            Meet The needs of The modern Student and drive outcomes alteration
            in
            <br />
            some form, by injected humour, or randomised words which don't look
            <br />
            even slightly believable. If you are going
          </p>
          <Button />
        </div>
      </div>
      <div className={classes["student__benefits--items"]}>
        <div className={classes["student__benefits"]}>
          <h1>
            Benefits of online
            <br />
            learning
          </h1>
          <p>
            Since it can be accessed easily, There are many
            <br />
            variations of passages of available, but the
            <br />
            majority have suffered.
          </p>
          <Button />
        </div>
        <img src={student2} alt="student_img" />
      </div>
      <div className={classes["gallery__title"]}>
        <h1>
          Our Exprience & Professional
          <br />
          Mentor in edulight.
        </h1>
        <p>
          our Mentore is came up from varous background education and been
          worked,It is a long
          <br />
          established fact that a reader will be distracted by the readable
          content of a page when
          <br />
          looking at its layout. The point of using.
        </p>
      </div>
      <div className={classes["gallery__items"]}>
        <Galleryitem
          image={galleryImg}
          fullname={"ElliJah Parbotu Jemi"}
          job={"#Lustator"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Jonaton Smith Jesi"}
          job={"Photographer"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Mariana carl"}
          job={"Digital Marketing Specialist"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Smiath Xoxo"}
          job={"video Editor"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Stavin Smith"}
          job={"3D Artict"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Joni Works"}
          job={"Sofware Engineer"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Mendice Kinl"}
          job={"Producst Designer"}
          coursesAmount={6}
        />
        <Galleryitem
          image={galleryImg}
          fullname={"Elina Perry"}
          job={"Motoin Design"}
          coursesAmount={6}
        />
      </div>
      <div className={classes["see-all__button"]}>
        <Button />
      </div>
      <div className={classes.slider}>
        <div className={classes["left-area"]}>
          <div className={classes["first-part"]}>
            <h1>
              Our Most Satisfied
              <br /> 
              Customer Says About Us!
            </h1>
            <p>
              Most of Our User give us Feedback regarding It is a long
              established fact
              <br />
              that a reader will be distracted by the readable content
            </p>
          </div>
          <div className={classes["second-part"]}>
            <img src={starts} alt="start_img" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the
              <br />
              majority have suffered alteration in some form, by injected
              humour, or
              <br />
              randomised words which don't look even slightly believable.
            </p>
            <p>Khanish Smith- Olive poper & Associates</p>
          </div>
        </div>
        <img src={sliderIMG} alt="img" />
      </div>
      <div className={classes['join_section']}>
        <h1>Join Now To Get Special Offer.</h1>
        <p>If You Need there’s24/7 email,chat and phone support from a real person.</p>
        <Button />
      </div>
    </div>
  );
};

export default Content;
