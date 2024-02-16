type Props = {
    image: JSX.Element
    title: string
    description: string
}

export default function OurServicesCard({ image, title, description}: Props) {
    return (
        <div className=" flex flex-col justify-around text-start w-[300px] mx-auto bg-button-color-2 px-8 py-12 rounded-2xl">
            <div className="text-2xl mb-4 w-9 h-9 flex justify-center items-center text-center bg-[white] rounded-full">{image}</div>
            <p className="font-semibold">{title}</p>
            <p className="font-secondary text-info-color mt-3">{description}</p>
        </div>
    )
}