
import FooterLeft from '../../assets/img/LogoFooterLeft.png';
import FooterRight from '../../assets/img/logoFooterRight.png';

function Footer(){
    return (
      <footer className="container-footer">
      <div className="f-container">
        <img className="Left" src={FooterRight} alt="logoFooter" />
        <p>sem trocadalhos do carilho :)</p>
        <img className="Right" src={FooterLeft} alt="logoFooter" />
      </div>
    </footer>
    );
  }
  
  export default Footer;