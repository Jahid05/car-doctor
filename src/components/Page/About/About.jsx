import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative lg:w-1/2">
            <img
              src={person}
              className="w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className="w-1/2 md:right-5 md:top-52 right-2 top-24 border-4 border-theme-100 absolute rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-12 ms-8 lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-theme-100">
              About Us
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="md:text-lg text-theme-300">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even
              slightly believable.
            </p>
            <p className="md:text-lg text-theme-300">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which dont look even slightly
              believable.{" "}
            </p>
            <button className="btn bg-theme-100 normal-case border-none">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
