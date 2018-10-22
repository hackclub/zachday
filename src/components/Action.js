import React from 'react'
import { LargeButton, OutlineButton } from '@hackclub/design-system'
import Link from 'gatsby-link'

const Action = ({ is = 'link', ...props }) => {
  const Component = {
    a: LargeButton,
    link: LargeButton.withComponent(Link),
    outline: OutlineButton,
    outlink: OutlineButton.withComponent(Link)
  }[is]
  return <Component fontSize={[2, 3]} {...props} />
}

export default Action
