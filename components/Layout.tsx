import Head from "next/head"
import React from "react"

// import { NavbarComponent } from "./Navbar"
// import { FooterComponent } from "./Footer"

export const Layout = ({
    title,
    navbar,
    footer,
    children
}: {
    title?: string,
    navbar?: boolean,
    footer?: boolean,
    children: React.ReactNode
}) => {
    return (
        <div>
            <Head>
                <title>{
                    title ? `${title} | Next.js + TypeScript + TailwindCSS + Eslint + Prettier` : "Next.js + TypeScript + TailwindCSS + Eslint + Prettier"
                }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main className="flex flex-col flex-1 w-full min-h-screen h-full bg-black">
                {/* Add your navbar here */}
                {/* Ex.: { navbar ? <NavbarComponent /> : null } */}

                {children}

                {/* Add your footer here */}
                {/* Ex.: { footer ? <FooterComponent /> : null } */}
            </main>
        </div>
    )
}