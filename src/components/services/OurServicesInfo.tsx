type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  style: React.CSSProperties;
  service1: string;
  service2: string;
  service3: string;
};

export default function OurServicesInfo({
  icon,
  title,
  description,
  style,
  service1,
  service2,
  service3,
}: Props) {
  return (
    <div className="flex-col min-h-[470px]" style={style}>
      <div>
        <div className="text-2xl mb-4 w-9 h-9 flex justify-center items-center text-center bg-[white] rounded-full">{icon}</div>
        <h3 className="font-extrabold">{title}</h3>
        <p className="my-5 text-info-color">{description}</p>
      </div>
      <div>
        <h3 className="font-bold mt-4">ADDITIONAL SERVICES</h3>
        <div className="mt-5">
          <ul>
            <li className="list-disc">{service1}</li>
            <li className="list-disc">{service2}</li>
            <li className="list-disc">{service3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
