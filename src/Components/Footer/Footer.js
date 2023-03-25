import classes from './footer.module.css';
import logo from '../../assets/Logo.png';
import emailIcon from '../../assets/Vector.png';

const Footer = () => {
  return (
    <footer className={classes.items}>
      <div className={classes['item item-1']}>
        <img src={logo} alt="logo"/>
        <h2 className={classes.title}>Highest rated hybrid.in-Person<br />and virtual events platform.</h2>
        <div className={classes.email}>
          <img src={emailIcon} alt="email-icon"/>
          <h2>Sab75@gmail.com</h2>
        </div>
      </div>
      <div className={classes['item-2']}>
        <ul>
          <li><a href='###'>Working Remotely</a></li>
          <li><a href='###'>Partner Pogram</a></li>
          <li><a href='###'>Security</a></li>
        </ul>
      </div>
      <div className={classes['item-3']}>
      <ul>
          <li><a href='###'>Categories</a></li>
          <li><a href='###'>Give a gift</a></li>
          <li><a href='###'>Sign up</a></li>
        </ul>
      </div>
      <div className={classes['item-4']}>
      <ul>
          <li><a href='###'>Blog</a></li>
          <li><a href='###'>Press</a></li>
          <li><a href='###'>Privacy</a></li>
        </ul>
      </div>
      <div className={classes['item-5']}>
      <ul>
          <li><a href='###'>IOS App</a></li>
          <li><a href='###'>Android app</a></li>
          <li><a href='###'>Terms</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;