import Card from "../Card/Card";

import Tsivto from "../../assets/tsivtso.png";
import Antoni from "../../assets/antoni.png";

const About = (props) => {
  return (
    <div className={`flex flex-row mb-[146px] mt-[126px]`}>
      <div className={`w-[650px] h-[321px]`}>
        <h1 className={`text-[48px] font-extrabold`}>About IAWS</h1>
        <p className={`text-left font-light w-[532px] h-[83px] mt-[39px]`}>
          Welcome to the International Association of Women Surgeons! Founded in
          Georgia by the Head of Plastic Surgery at American Hospital{" "}
          <b> Salome Svanadze</b> and plastic surgeon and Aptos Medical &
          Scientific Advisor
          <b> Mariam Tsivtsivadze</b>.
        </p>
        <p className={`text-left font-light w-[532px] h-[83px] mt-[32px]`}>
          Our organization brings together women surgeons from Europe and around
          the globe. With a commitment to fostering a unique partnership network
          of support and mutual assistance, we are dedicated to advancing the
          role of women in the field of surgery.
        </p>
        <button className={`mt-[39px] font-bold flex items-center gap-[10px]`}>
          More about us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              d="M17.731 6.26422C18.0239 5.97132 18.0239 5.49645 17.731 5.20356L12.958 0.430586C12.6651 0.137692 12.1903 0.137692 11.8974 0.430586C11.6045 0.723479 11.6045 1.19835 11.8974 1.49125L16.14 5.73389L11.8974 9.97653C11.6045 10.2694 11.6045 10.7443 11.8974 11.0372C12.1903 11.3301 12.6651 11.3301 12.958 11.0372L17.731 6.26422ZM0 6.48389H17.2007V4.98389H0V6.48389Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className={`flex gap-[32px]`}>
        <Card
          image={Antoni}
          title={`Salome Svanadze`}
          description={`Head of Plastic Surgery
          Co-Founder`}
        />
        <div className={`mt-[86px]`}>
          <Card
            image={Tsivto}
            title={`Mariam Tsivtsivadze`}
            description={`Medical & Scientific Advisor
          Co-Founder`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
