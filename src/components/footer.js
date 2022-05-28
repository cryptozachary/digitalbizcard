import TwitterLogo from "../images/twitter.png"
import InstagramLogo from "../images/instagram.png"
import GitHubLogo from "../images/github.png"

export default function Footer() {
    return (
        <div className="social-icon-container">
            <img src={TwitterLogo} alt="twitter"></img>
            <img src={InstagramLogo} alt="instagram"></img>
            <img src={GitHubLogo} alt="github"></img>
        </div>
    )
}