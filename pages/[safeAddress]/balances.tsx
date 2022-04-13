import Head from 'next/head'
import type { NextPage } from 'next'

import { selectSafeInfo } from 'store/safeInfoSlice'
import SafeHeader from 'components/common/SafeHeader'
import useSafeAddress from 'services/useSafeAddress'
import { useAppSelector } from 'store'
import { selectChainById } from 'store/chainsSlice'

const Balances: NextPage = () => {
  const { chainId } = useSafeAddress()
  const safeInfo = useAppSelector(selectSafeInfo)
  const chainConfig = useAppSelector((state) => selectChainById(state, chainId))

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SafeHeader />

      <main>
        <h1>Hello Safe on {chainConfig?.chainName}</h1>
        <pre>{JSON.stringify(safeInfo, null, 2)}</pre>
      </main>
    </div>
  )
}

export default Balances
