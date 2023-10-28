import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

import { Layout } from '@/components/Layout'

import '../assets/globals.css'

import Providers from '@/context/Providers'

export const metadata: Metadata = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
}

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Layout>{props.children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
