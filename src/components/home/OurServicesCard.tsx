type Props = {
    image: string
    title: string
    description: string
}

export default function OurServicesCard({ image, title, description}: Props) {
    return (
        <div className=" flex flex-col justify-around text-start w-[300px] mx-auto bg-button-color-2 px-8 py-12 rounded-2xl">
            <div>{image}</div>
            <p className="font-semibold">{title}</p>
            <p className="font-secondary text-info-color mt-3">{description}</p>
        </div>
    )
}

// [photoshop, premier, figma, canva, html, css, javascript, react, next, mongo, express, node]