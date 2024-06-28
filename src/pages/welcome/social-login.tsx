import type { NextPage } from 'next'
import Head from 'next/head'
import NewSafeSocial from '@/components/welcome/NewSafeSocial'

const SocialLogin: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Sonic Safe{Wallet} – Welcome'}</title>
      </Head>

      <NewSafeSocial />
    </>
  )
}

export default SocialLogin
