import Link from "next/link";

export default function WorkWithUs() {
  return (
    <div className="mt-[50px] md:mt-[150px] xl:mt-[250px] px-5 xl:px-16 flex flex-col items-start">
      <div className="flex flex-col place-self-start">
        <p className="font-medium text-heading-color text-base md:text-xl mb-6">
          WORK WITH US
        </p>
        <p className="font-semibold text-2xl md:text-5xl mb-6">
          what makes us different
        </p>
      </div>
      <div className="grid grid-cols-1 place-items-start xl:grid-cols-1">
        <div className="my-6 xl:grid grid-cols-2 xl:w-[100%] gap-16">
          <p className="leading-7 mb-6 tracking-wide">
            In the digital landscape where competition is fierce and every
            detail counts, our startup stands apart through a holistic and
            innovative approach to digital marketing. Our expertise spans across
            key areas including SEO, graphic design, content creation, web
            design, and web development, enabling us to offer comprehensive
            solutions that meet the multifaceted needs of our clients.
          </p>
          <p className="leading-7 tracking-wide">
            What sets us apart is not just the breadth of our services, but the
            depth of our expertise and the cutting-edge technologies we employ.
            From Adobe Photoshop, Illustrator, and Premiere Pro for unmatched
            graphic design and visual content, to Figma and Canva for intuitive
            design workflows, we ensure your brand stands out visually.
          </p>
        </div>
        <div className="my-6 xl:grid grid-cols-2 xl:w-[100%] gap-16">
          <p className="leading-7 mb-6 tracking-wide">
            On the technical front, our proficiency in front-end and back-end
            development technologies like HTML, CSS, SASS, TailwindCSS,
            JavaScript, TypeScript, jQuery, React, Next.js, and the MERN stack
            (MongoDB, Express.js, React, and Node.js) ensures robust and
            scalable web solutions. Our strategic use of Google and Facebook Ads
            maximizes your digital presence and ROI, while our skills in
            Wordpress offer flexibility and ease of use for content management.
          </p>
          <p className="leading-7 tracking-wide">
            Choosing us means partnering with a team that not only leverages the
            latest technologies but also possesses a deep understanding of
            digital marketing dynamics to drive your business forward. Let us
            help you navigate the digital domain with our innovative strategies
            and technical prowess, setting your brand on the path to success.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Link className="" href="/services">
          <button className="mb-12 mt-6 bg-button-color-1 font-medium text-lg w-[120px] md:w-[200px] h-[40px] md:h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">
            view services
          </button>
        </Link>
      </div>
    </div>
  );
}
