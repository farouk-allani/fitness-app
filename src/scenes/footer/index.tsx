import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At our gym, we believe in the power of fitness to transform lives.
            We offer a wide range of equipment and classes to suit every fitness
            level and goal, whether you're just starting out or are a seasoned
            athlete. Our certified trainers are dedicated to helping you achieve
            your best self through personalized training and nutrition plans.
          </p>
          <p>© Farouk'Gym All Rights Reserved 2023.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a className="my-5 hover:text-primary-300" href="https://faroukallani.tn">farouk allani Portfolio</a> <br />
          <a className="my-5 hover:text-primary-300" href="https://lostandfound.faroukallani.tn/">Lost and Found App</a> <br />
          <a className="my-5 hover:text-primary-300" href="https://olc.faroukallani.tn/">Open Learning Community Platform</a> <br />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tunisia, Tunis 5000, Street Abc</p>
          <p>+216 23 550 577</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
