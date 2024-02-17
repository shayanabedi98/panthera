type Props = {
  handleClick: () => void;
  name: string;
};

export default function OurServicesOptions({ handleClick, name }: Props) {
  return (
    <p className="cursor-pointer font-extrabold my-8 hover:text-info-color" onClick={handleClick}>
      {name}
    </p>
  );
}
