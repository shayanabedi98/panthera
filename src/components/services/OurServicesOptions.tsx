type Props = {
  handleClick: () => void;
  name: string;
};

export default function OurServicesOptions({ handleClick, name }: Props) {
  return (
    <p className="cursor-pointer font-bold text-sm bg-button-color-3 md:bg-[#030037] px-2 py-1 rounded-sm my-1 hover:text-info-color" onClick={handleClick}>
      {name}
    </p>
  );
}
