import Link from "next/link";

type Props = {
    href: string
    content: string
}

export default function FooterNavbarItem({ href, content}: Props) {
    return (
        <Link className="text-info-color font-thin" href={href}>{content}</Link>
    )
}