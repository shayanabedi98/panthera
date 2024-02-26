import OurValuesItems from "./OurValuesItems";

export default function OurValues() {
  return (
    <div className="my-[50px] md:my-[150px] xl:my-[250px] px-5 xl:px-16">
      <p className="font-medium text-heading-color text-base md:text-xl mb-6">
        OUR VALUES
      </p>
      <p className="font-semibold text-2xl md:text-5xl mb-6">
        principles that define pantheras
      </p>
      <OurValuesItems />
    </div>
  );
}
