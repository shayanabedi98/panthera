"use client";

import { useState } from "react";
import OurServicesInfo from "./OurServicesInfo";
import { IoCodeSharp } from "react-icons/io5";
import OurServicesOptions from "./OurServicesOptions";
import { GoPencil } from "react-icons/go";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

type Options = {
  seo: boolean;
  graphicDesign: boolean;
  contentCreation: boolean;
  webDesign: boolean;
  webDevelopment: boolean;
  socialMedia: boolean;
};

export default function OurServices() {
  const [options, setOptions] = useState<Options>({
    seo: true,
    graphicDesign: false,
    contentCreation: false,
    webDesign: false,
    webDevelopment: false,
    socialMedia: false,
  });

  function handleClick(name: string) {
    setOptions({
      seo: name == "seo",
      graphicDesign: name == "graphicDesign",
      contentCreation: name == "contentCreation",
      webDesign: name == "webDesign",
      webDevelopment: name == "webDevelopment",
      socialMedia: name == "socialMedia",
    });
  }

  return (
    <div className="mt-[100px] md:mt-[250px] lg:mt-[450px] mx-auto max-w-[1200px] flex flex-col md:flex-row px-2 justify-center items-center">
      <div className="flex flex-wrap md:flex-col gap-2 md:gap-10 mb-3">
        <h2 className="w-full font-medium text-heading-color text-base md:text-xl mb-3">
          OUR SERVICES
        </h2>
        <OurServicesOptions handleClick={() => handleClick("seo")} name="SEO" />
        <OurServicesOptions
          handleClick={() => handleClick("socialMedia")}
          name="SOCIAL MEDIA MANAGEMENT"
        />
        <OurServicesOptions
          handleClick={() => handleClick("graphicDesign")}
          name="GRAPHIC DESIGN"
        />
        <OurServicesOptions
          handleClick={() => handleClick("contentCreation")}
          name="CONTENT CREATION"
        />
        <OurServicesOptions
          handleClick={() => handleClick("webDesign")}
          name="WEB DESIGN"
        />
        <OurServicesOptions
          handleClick={() => handleClick("webDevelopment")}
          name="WEB DEVELOPMENT"
        />
      </div>
      <div className="bg-button-color-2 p-10 rounded-2xl w-full">
        <OurServicesInfo
          icon={<FaChartLine style={{ fill: "#23225e" }} />}
          title="SEO (SEARCH ENGINE OPTIMIZATION)"
          description="Maximize your online presence with our SEO service. We enhance your website's search rankings through optimized content and improved user experience, driving more traffic and conversions. Elevate your digital footprint effortlessly with us."
          style={{ display: options.seo ? "flex" : "none" }}
          service1="Keyword Research: Identifying relevant keywords for client websites to target in their content and optimization efforts."
          service2="On-Page Optimization: Optimizing website content, meta tags, headings, and internal linking structure to improve search engine rankings."
          service3="Technical SEO: Conducting website audits, fixing crawl errors, improving site speed, and implementing structure data markup."
        />
        <OurServicesInfo
          icon={<GoPencil style={{ fill: "#23225e" }} />}
          title="GRAPHIC DESIGN"
          description="Elevate your visuals with our Graphic Design service, mastering Photoshop, Canva, and Illustrator. We craft stunning graphics and illustrations that captivate your audience. With our blend of creativity and technical skill, your brand will shine in the digital landscape. Let's create visuals that stand out and speak to your audience."
          style={{ display: options.graphicDesign ? "flex" : "none" }}
          service1="Logo Design: Creating unique and memorable logos that represent clients' brands effectively."
          service2="Branding Collateral: Designing business cards, letterheads, and other branded materials to maintain consistency across all touchpoints."
          service3="Marketing Materials: Designing brochures, flyers, posters, and other promotional materials to support clients' marketing campaigns."
        />
        <OurServicesInfo
          icon={<MdInsertPhoto style={{ fill: "#23225e" }} />}
          title="CONTENT CREATION"
          description="Elevate your content with our service, harnessing Premiere Pro for professional video edits, Canva for stunning graphics, and optimizing for platforms like Instagram and TikTok. We craft compelling content tailored to engage your audience across these dynamic platforms, ensuring your brand not only stands out but thrives in the digital space. Let's transform your online presence with content that captures attention and sparks interaction."
          style={{ display: options.contentCreation ? "flex" : "none" }}
          service1="Social Media Graphics: Developing eye-catching graphics for social media posts, cover images, and advertisements."
          service2="Designing unique graphics, images, and videos optimized for each social media platform to increase engagement and drive traffic."
          service3="Email Newsletters: Writing engaging content for email newsletters to nuture leads, promote products/services, and drive conversions."
        />
        <OurServicesInfo
          icon={<MdOutlineWeb style={{ fill: "#23225e" }} />}
          title="WEB DESIGN"
          description="Elevate your online presence with our Web Design service, blending the power of Photoshop for exquisite graphics and Figma for seamless, interactive designs. We specialize in creating visually stunning and user-friendly websites that ensure an engaging user experience. Our expertise in these leading design tools enables us to bring your digital vision to life with precision and creativity. Let's build a website that not only looks great but also effectively communicates your brand's message."
          style={{ display: options.webDesign ? "flex" : "none" }}
          service1="Custom Website Design: Designing visually appealing and user-friendly websites tailored to clients' brand identities and target audience."
          service2="Responsive Design: Ensuring websites are optimized for various devices and screen sizes to provide a seamless user experience."
          service3="User Interface (UI) Design: Creating intuitive interfaces that guide users through the website and encourage interaction and conversions."
        />
        <OurServicesInfo
          icon={<IoCodeSharp style={{ fill: "#23225e" }} />}
          title="WEB DEVELOPMENT"
          description="Leverage our Web Development service with expert full-stack developers skilled in Node.js, Express, MongoDB, SQL, React, Next.js, and SASS/CSS. We deliver scalable, custom web solutions that enhance user experience and meet your unique business needs. Transform your web presence with our comprehensive tech expertise."
          style={{ display: options.webDevelopment ? "flex" : "none" }}
          service1="Front-End Development: Building the client-facing aspects of websites using HTML, CSS, Tailwind, React, and many more to ensure a visually appealing and interactive user experience."
          service2="Back-End Development: Developing server-side functionality and database management systems using languages like Express.js, Node.js, MongoDB, and more to power dynamic website features."
          service3="Website Maintenance and Support: Providing ongoing maintenance and support services to ensure clients' websites are secure, up-to-date, and running smoothly."
        />

        <OurServicesInfo
          icon={<IoCodeSharp style={{ fill: "#23225e" }} />}
          title="SOCIAL MEDIA MANAGEMENT"
          description="Social media management is the process of creating, scheduling, analyzing, and engaging with content posted on social media platforms. Our services help businesses maintain a strong online presence, connect with their audience, and grow their brand, ensuring consistency in voice and messaging across all channels. Would you like more detail or a specific aspect highlighted?"
          style={{ display: options.socialMedia ? "flex" : "none" }}
          service1="Social Media Strategy Development: Creating comprehensive social media strategies aligned with clients' business goals, target audience, and industry trends."
          service2="Social Listening and Engagement: Monitoring social media channels for mentions, comments, and messages, and promptly responding to inquiries, feedback, and mentions to maintain a positive brand image and foster customer relations."
          service3="Performance Analysis and Optimization: Tracking key performance metrics (e.g., engagement rate, reach, clicks) for each social media post and campaign, analyzing the data to identify trends and insights, and optimizing future content strategies accordingly."
        />
      </div>
    </div>
  );
}
