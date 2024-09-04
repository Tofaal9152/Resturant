import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <section className="py-6 w-full bg-[#F8F9FA]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center flex flex-col md:flex-row items-center justify-between">
        <p className="mt-5 text-xs text-[#9873CF]">
          © {new Date().getFullYear()} ToLizza Pharmacy. All rights reserved.
        </p>

        <div className="flex items-center space-x-5 text-[#9873CF] md:mt-0 mt-1">
          <p>Our Facebook Page</p>
          <a
            href="https://www.facebook.com/uddhar.bd?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9873CF]"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
