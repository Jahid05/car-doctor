import icon1 from "../../../../assets/icons/Contact/icon1.svg";
import icon2 from "../../../../assets/icons/Contact/icon2.svg";
import icon3 from "../../../../assets/icons/Contact/icon3.svg";

const Contact = () => {
  return (
    <div className="container mx-auto rounded-2xl bg-theme-200">
      <div className="grid md:grid-cols-3 grid-cols-1 my-12">
        <div className="px-8 text-white py-12">
          <img src={icon1} alt="" />
          <div>
            <p className="md:text-xl text-lg">We are open monday-friday</p>
            <h2 className="lg:text-3xl text-xl font-semibold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="px-8 text-white py-12">
          <img src={icon2} alt="" />
          <div>
            <p className="md:text-xl text-lg">Have a question?</p>
            <h2 className="lg:text-3xl text-xl font-semibold">+2546 251 2658</h2>
          </div>
        </div>
        <div className="px-8 text-white py-12">
          <img src={icon3} alt="" />
          <div>
            <p className="md:text-xl text-lg">Need a repair? our address</p>
            <h2 className="lg:text-3xl text-xl font-semibold">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
