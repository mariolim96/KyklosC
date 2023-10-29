import React, { PropsWithChildren } from 'react'

import { ThemeProvider } from './ThemeProvider'
import { Web3Provider } from './Web3'

function Providers({ children }: PropsWithChildren) {
    return (
        <Web3Provider>
            <ThemeProvider>{children}</ThemeProvider>
        </Web3Provider>
    )
}

export default Providers
