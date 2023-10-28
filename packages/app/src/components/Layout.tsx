import React, { PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export function Layout(props: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="container mx-auto max-w-3xl grow px-4">{props.children}</main>
            <Footer />
        </div>
    )
}
