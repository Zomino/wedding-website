import { Link } from "gatsby"
import React from "react"

import Copyright from "./copyright"

interface LayoutProps {
    pageTitle: string
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children, pageTitle }) => {
    return (
        <div className="pt-10">
            <header className="font-raleway tracking-wider">
                <Link className="text-3xl md:text-4xl" to="/">Angela & Zou</Link>
                <h1 className="mt-5 md:text-xl">{pageTitle}</h1>
            </header>
            <main className="flex flex-col font-lato max-w-xs min-h-screen mt-5 mx-auto p-5 md:max-w-lg">{children}</main>
            <footer className="font-lato mt-20">
                <Copyright />
            </footer>
        </div>
    )
}

export default Layout
