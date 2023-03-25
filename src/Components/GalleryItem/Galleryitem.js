import classes from "./galleryitem.module.css";

const Galleryitem = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} alt="item__image"/>
      <h1 className={classes.title}>{props.fullname}</h1>
      <h2 className={classes.job}>{props.job}</h2>
      <div className={classes.playcourses}>
        <div className={classes["cercle-icon"]}></div>
        <h2>{props.coursesAmount} courses</h2>
      </div>
    </div>
  )
}

export default Galleryitem;