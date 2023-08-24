import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>

        <div className='max-w-[1200px] mx-auto px-4 py-16'>

            <div>
                <h1 className='py-4'>A Growing Protocol</h1>
                <p className='py-4 text-xl'>
                    The Dectra protocol system empowers developers, liquidity providers,
                    and traders to participate in a financial marketplace that is open
                    and accessible to all.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card icon='icon' heading='Reliable, tamper-proof network'
                text='Use decentrailization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and availabe data/APIs to any smart contract.'/>

                <Card icon='icon' heading='Reliable, tamper-proof network'
                text='Use decentrailization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and availabe data/APIs to any smart contract.'/>

                <Card icon='icon' heading='Reliable, tamper-proof network'
                text='Use decentrailization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and availabe data/APIs to any smart contract.'/>

                <Card icon='icon' heading='Reliable, tamper-proof network'
                text='Use decentrailization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and availabe data/APIs to any smart contract.'/>

            </div>
            

        </div>

    </div>
  )
}

export default About


