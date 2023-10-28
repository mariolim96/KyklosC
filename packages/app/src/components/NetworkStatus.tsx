'use client'

import React from 'react'
import { useBlockNumber, useNetwork } from 'wagmi'

import { GetNetworkColor } from '../utils/network'
import { LinkComponent } from './LinkComponent'

export function NetworkStatus() {
    const block = useBlockNumber({ watch: true })
    const network = useNetwork()
    const explorerUrl = network.chain?.blockExplorers?.default.url
    const networkName = network.chain?.name ?? 'Ethereum'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const color = GetNetworkColor(networkName)

    return (
        <div className="flex items-center  gap-2 p-4">
            <div className={` badge-info badge`}>{networkName}</div>
            {explorerUrl && (
                <LinkComponent href={explorerUrl}>
                    <p className="text-xs"># {block.data?.toString()}</p>
                </LinkComponent>
            )}
            {!explorerUrl && <p className="text-xs"># {block.data?.toString()}</p>}
        </div>
    )
}

export default NetworkStatus
