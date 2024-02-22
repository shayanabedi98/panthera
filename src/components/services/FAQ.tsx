"use client";

export default function FAQ() {
  const questions = [
    {
      title:
        "How Does Our Startup's Approach to Digital Marketing Differ From Others?",
      content:
        "Our startup distinguishes itself through a holistic and innovative approach, focusing not just on single aspects of digital marketing but offering comprehensive solutions. We blend deep expertise in SEO, graphic design, content creation, web design, and development with cutting-edge technologies like Adobe Creative Suite, Figma, Canva, and advanced web development tools. This enables us to deliver uniquely effective strategies that enhance every facet of our clients' digital presence.",
    },
    {
      title:
        "What Kind of Graphic Design and Visual Content Services Do We Offer?",
      content:
        "We offer unmatched graphic design and visual content services utilizing industry-leading tools such as Adobe Photoshop, Illustrator, and Premiere Pro. Our expertise enables us to create visually compelling designs and multimedia content that captures your brand's essence and engages your target audience effectively.",
    },
    {
      title: "What is Our Web Development Process?",
      content:
        "Our web design and development process is anchored in a deep understanding of front-end and back-end technologies, including HTML, CSS, SASS, TailwindCSS, JavaScript, TypeScript, jQuery, React, Next.js, the MERN stack, and WordPress. We focus on creating robust, scalable, and aesthetically pleasing web solutions that are tailored to meet our clients' specific needs, ensuring a seamless user experience that drives engagement and conversions.",
    },
    {
      title: "How Do We Maximize ROI Through Google and Facebook Ads?",
      content:
        "By leveraging strategic use of Google and Facebook Ads, we maximize your digital presence and ROI. Our approach involves detailed audience analysis, creative ad design, and continuous optimization based on performance data. This ensures that your campaigns reach the right audience, engage them effectively, and drive meaningful results.",
    },
    {
      title: "What Makes Our Content Management Solutions Stand Out?",
      content:
        "Our proficiency in WordPress and other content management systems offers our clients flexibility, ease of use, and scalability. We focus on creating customized solutions that empower our clients to manage their content efficiently while maintaining high standards of security and performance. Our approach ensures that your digital content strategy aligns with your overall marketing goals, enhancing your online visibility and engagement.",
    },
  ];

  function handleClick(event: any) {
    event.target.nextElementSibling.hidden =
      !event.target.nextElementSibling.hidden;
  }

  return (
    <div className="rounded-2xl bg-button-color-2 mt-[400px] mb-[250px] mx-auto w-[1200px] py-20 min-h-[600px]">
      <h1 className="w-[88%] mx-auto mb-8 font-semibold text-5xl">
        frequently asked questions
      </h1>
      {questions.map((q, index) => {
        return (
          <div
            key={index}
            className="w-[88%] mx-auto border-b-[1px] border-solid border-[rgba(255,255,255,0.3)] py-6"
          >
            <button
              className="font-bold hover:text-button-color-3 transition duration-200 ease-in-out"
              onClick={handleClick}
            >
              {q.title}
            </button>
            <p className="mt-4 text-info-color" hidden>
              {q.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
