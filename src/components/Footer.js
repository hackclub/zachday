import React from 'react'
import { Box, Heading, Link, Text } from '@hackclub/design-system'
import { theme } from 'theme'

const Footer = ({ children }) => (
  <Box.footer
    p={[4, 5]}
    bg={theme.colors.black}
    color={theme.colors.smoke}
    align="center"
  >
    <Heading.h3 fontSize={4} align="center" caps mb={2}>
      For Zach 😭💖
    </Heading.h3>
    <Text fontSize={1}>
      From the Hack Club community.
      <br />
      Site by{' '}
      <Link target="_blank" href="https://lachlanjc.me" hoverline>
        @lachlanjc
      </Link>
      {' + co, 2018.'}
    </Text>
  </Box.footer>
)

export default Footer
