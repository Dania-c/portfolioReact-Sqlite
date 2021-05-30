import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import "./SocialPanel.css"

function SocialPanel() {
  const linksUrl =
    { "linkdin": null, "facebook": "https://www.facebook.com", "twitter": "https://www.twitter.com", "insta": 'https://www.google.com' }


  let showLinkdIn = linksUrl.linkdin !== null;
  let showfacebook = linksUrl.facebook !== null;
  let showTwitter = linksUrl.twitter !== null;
  let showInsta = linksUrl.insta !== null;

  console.log("linksUrl.linkdin is :" + linksUrl.linkdin + " and linksUrl.facebook: " + linksUrl.facebook)

  return (
    <div className="socialPanel">
      {/* {showTwitter && <a href="https://www.google.com" target="/blank"><TwitterIcon className="socialPanel__icon" /></a>} */}
      {showTwitter && <a href={linksUrl.twitter} target="_blank"><TwitterIcon className="socialPanel__icon" /></a>}
      {showfacebook && <a href={linksUrl.facebook} target="_blank"><FacebookIcon className="socialPanel__icon" /></a>}
      {showInsta && <a href={linksUrl.insta} target="_blank"><InstagramIcon className="socialPanel__icon" /></a>}
      {showLinkdIn && <a href={linksUrl.linkdin} target="_blank"><LinkedInIcon className="socialPanel__icon" /></a>}
      <CallIcon className="socialPanel__icon" />


    </div>
  );
}

export default SocialPanel;