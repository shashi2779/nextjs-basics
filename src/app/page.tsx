import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <>
      <h1>xaxi-Brand</h1>
      <Link href="/about">About</Link>
      
      {/* <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      
    </>
  )
}

export default page