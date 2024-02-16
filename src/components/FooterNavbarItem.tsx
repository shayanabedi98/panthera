import Link from "next/link";

type Props = {
    href: string
    children: string
}

export default function FooterNavbarItem({ href, children}: Props) {
    return (
        <Link className="text-info-color font-thin" href={href}>{children}</Link>
    )
}