import React, { PropsWithChildren } from 'react'

import { Web3Provider } from './Web3'
import { ThemeProvider } from './ThemeProvider'

const Providers = ({ children }: PropsWithChildren) => {
    return <Web3Provider><ThemeProvider>{children}</ThemeProvider></Web3Provider>
}

export default Providers
