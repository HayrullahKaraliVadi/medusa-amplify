import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
// import { ApolloWrapper } from "./apollo-wrapper"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
    <body>
    {/*<ApolloWrapper>*/}
    {/*  <main className="relative">{props.children}</main>*/}
    {/*</ApolloWrapper>*/}
    <main className="relative">{props.children}</main>
    </body>
    </html>
  )
}
