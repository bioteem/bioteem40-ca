import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"

// makes all fetch() in this subtree default to no-store
export const fetchCache = "default-no-store"

// belt-and-suspenders: no ISR; always fresh
export const revalidate = 0

// optional: if anything still sneaks through static
// export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
