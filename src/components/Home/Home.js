import React, { Fragment } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Section from "../theFront/Section";
import SectionAlternate from "../theFront/SectionAlternate";
import './home.css'
import Frame1 from "../img/Frame 21.webp"
import Frame2 from "../img/Frame 23.webp"
import Frame3 from "../img/my collection.webp"
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  purple: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
    <div className="firstsection">
        <div className="font">  Make your own artwork and song at the same time
            via easy, hands-on experiments.
        </div>
        <div className="Thenshare">  Then share your collection on the Marketplace. <br></br>
Now is the time for you to become a well-rounded artist <br></br>with our newest technology Pixori.  
        </div>
        <div className="Rectangle-492"> LET’S Start</div>
    </div>
    <div className="MakeandMint">Make and Mint  <br></br>
Your Digital Artwork  <br></br>as sn NFT</div>
    <div>
    <div className="withpixori">with Pixori, you can create a one-of-a-kind collectible <br></br>
and have ownership to it</div>
        <img src={Frame1} className="grid" />
       
    </div>
    <div className="Rectangle-1022">
    <div className="enjoynft">Enjoy Your NFT Collections <br></br>
Your Digital Artwork  <br></br>as sn NFT</div>
    <div className="withenjoy">with Pixori, you can enjoy a unique experience while appreciating <br></br>
the artwork and music in the form of an NFT collection</div>
        <img src={Frame2} className="grid2" />

    </div>

    <div className="Share">Share Your Creativities <br></br>
in the New Community  </div>

    <div className="withdisplay">with Pixori, you can display your digital assets or collectibles <br></br>
and finally immerse yourself in the NFT community</div>
        <img src={Frame3} className="grid3" />


    {/* <Footer /> */}
</Fragment>
  );
};

export default Home;
