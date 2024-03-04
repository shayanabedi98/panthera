export default function OurValuesItems() {
  const values = [
    {
      title: "Collaboration",
      description:
        "Together, we achieve more. We foster a culture of teamwork and synergy, leveraging diverse perspectives to deliver impactful solutions.",
    },
    {
      title: "Adaptation",
      description:
        "Embracing creativity and forward thinking, we continuously explore new ideas and technologies to drive innovation and stay ahead in the dynamic digital landscape.",
    },
    {
      title: "Customer-Centricity",
      description:
        "Our clients are at the heart of everything we do. We listen, understand, and prioritize their needs, delivering personalized solutions and exceptional service to help them succeed.",
    },
    {
      title: "Excellence",
      description:
        "Committed to excellence, we set high standards and strive for quality in every aspect of our work. Attention to detail and a relentless pursuit of perfection define our approach.",
    },
    {
      title: "Transparency",
      description:
        "Building trust through open and honest communication, we value transparency in all our interactions. Integrity and accountability are the cornerstones of our relationships.",
    },
    {
      title: "Continuous Learning",
      description:
        "With a commitment to lifelong learning, we invest in our personal and professional development. Embracing curiosity and growth, we stay at the forefront of our industry.",
    },
    {
      title: "Passion",
      description:
        "Passion fuels our drive for success. With unwavering enthusiasm and dedication, we approach every project and challenge with energy and excitement.",
    },
    {
      title: "Responsibility",
      description:
        "As stewards of our community and environment, we take responsibility for our actions and their impact. Ethical conduct and sustainability guide our decisions and practices.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 my-12 gap-10">
        {values.map((item,index) => {
            return (
                <div key={index} className="bg-button-color-2 flex flex-col items-center p-6 text-center rounded-xl">
                    <h3 className="font-semibold text-2xl">{item.title}</h3>
                    <p className="mt-6 tracking-wide">{item.description}</p>
                </div>
            )
        })}
    </div>
  );
}
