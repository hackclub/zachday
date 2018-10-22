import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link as A,
  Avatar
} from '@hackclub/design-system'
import { theme } from 'theme'
import videos from '../../videos.json'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import Layout from 'components/Layout'
import Footer from 'components/Footer'

const Headline = styled(Heading.h2).attrs({
  color: 'primaryDark',
  fontSize: [5, 6],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

const Videos = styled(Box)`
  > div {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`
const VideoContainer = styled(Flex.withComponent(Container)).attrs({
  mb: [4, 5],
  align: 'center',
  width: 1
})``

const Sheet = styled(Box)`
  display: block;
  border-radius: ${theme.radii[2]};
  width: 100%;
  max-width: 66%;
  max-height: 32rem;
  min-height: 26rem;
  position: relative;
  overflow: hidden;
  box-shadow: ${theme.boxShadows[1]};
  transition: 0.25s ease-out box-shadow;
  &:hover {
    box-shadow: ${theme.boxShadows[2]};
  }
`
const SheetLink = styled(Sheet.withComponent('a'))``
const Player = styled(YouTubePlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

export default () => (
  <Layout>
    <Box.header
      bg={theme.colors.brandPink}
      color={theme.colors.white}
      py={[5, 6]}
    >
      <Container width={1} px={3}>
        <Heading.h1 fontSize={[7, 8, 128]} mb={3}>
          Happy 21
          <sup>st</sup> birthday,{' '}
          <A href="https://zachlatta.com" hoverline>
            Zach
          </A>
          .
        </Heading.h1>
        <Text fontSize={[4, 5, 6]}>
          Hack Club has changed our lives—
          <br />
          we appreciate you every day. Thank you.
        </Text>
      </Container>
    </Box.header>
    <Box.section
      bg={theme.colors.steel}
      color={theme.colors.white}
      width={1}
      pt={[5, 6]}
      pb={4}
      px={3}
    >
      <Headline align="center" mb={[4, 5]}>
        From the Hack Club community.
      </Headline>
      <Videos>
        {videos.map(({ name, avatar, video, image }) => (
          <VideoContainer key={video}>
            {video && (
              <Sheet style={{ paddingBottom: '50%' }}>
                <Player url={video} width="100%" height="100%" controls />
              </Sheet>
            )}
            {image && (
              <SheetLink
                href={image}
                target="_blank"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover'
                }}
              />
            )}
            <Flex align="center" justify="center" wrap mx={[2, 4]}>
              <Avatar src={avatar} size={96} mx={3} />
              <Heading.h3 fontSize={3} mt={3} caps children={name} />
            </Flex>
          </VideoContainer>
        ))}
      </Videos>
    </Box.section>
    <Footer />
  </Layout>
)
