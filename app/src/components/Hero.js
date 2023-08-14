import "../assets/scss/components/Hero.scss";
import { ButtonDemo, ButtonPurchase } from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__title">Iron Sky Studios</div>
      <div className="hero__body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eligendi totam quod ullam laborum unde praesentium labore. Ipsam, beatae
        ipsa.
      </div>
      <div className="hero__cta">
        <ButtonDemo />
        <ButtonPurchase />
      </div>
    </div>
  );
}

export default Hero;
