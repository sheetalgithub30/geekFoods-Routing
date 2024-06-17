import './Footer.css'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Footer(){
  return(
    <footer>
        <div id="logo">
          <LunchDiningIcon style={{fontSize:"3rem", margin:"0.7rem"}}/>
          <h3><i>logoipsum</i></h3>
        </div>
        <div id="text">

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
        </div>
        <ul>
            <li>About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
        </ul>
            <ul id="icons">
            <li><FacebookRoundedIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><GitHubIcon/></li>
                <li><LanguageIcon/></li>
            </ul>
    </footer>
  );
}
export default Footer;