import { MetaMainPage } from 'application/presentation/meta/MetaContent'
import Link from 'next/link'
import React from 'react'

export default function MainPage() {
  return (
    <>
      <MetaMainPage />
      <div>
        <Link href="/links">links</Link>
      </div>
    </>
  )
}
