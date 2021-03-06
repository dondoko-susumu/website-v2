import React from "react"

import { rhythm } from "../utils/typography"
import Link from "./localizedLink"

const Header = ({ title }) => {
  const header = (
    <h1
      style={{
        marginBottom: rhythm(0.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <header>{header}</header>
  )
}

export default Header
