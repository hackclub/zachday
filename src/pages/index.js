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
import Action from 'components/Action'
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
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            <Flex align="center" justify="center" wrap mx={[2, 4]}>
              <Avatar src={avatar} size={96} mx={3} />
              <Heading.h3 fontSize={3} mt={3} caps children={name} />
            </Flex>
          </VideoContainer>
        ))}
        <VideoContainer>
          <Sheet
            bg={theme.colors.snow}
            color={theme.colors.slate}
            p={[3, 4]}
            align="left"
          >
            <Text fontSize={2}>
              Zach,
              <br />
              <br />
              Happy Birthday!! You have inspired us old farts to help in your
              mission. Though the kids we reach through 4-H are few, we are
              making an impact—one child at a time. We owe our inspiration to
              your efforts and the community that you helped to create.
              <br />
              <br />
              I’ve created a small photo album as a kind of year in review of
              what we have been doing. Each kid and parent who attends our club
              meetings hears your story and we work on enrolling all of them in
              the mission that we share.
              <br />
              <br />
              Though we haven’t started our meetings yet this year, I look
              forward to continuing this work for the future!
              <br />
              <br />
              Happy Birthday again and best wishes for the years to come!!
              <br />
              <br />
              -Cayce and Roland.
            </Text>
          </Sheet>
          <Box mx={[2, 4]}>
            <Flex align="center" justify="center" wrap>
              <Avatar src="/contributions/cayce-avatar.jpg" size={96} mx={3} />
              <Heading.h3 fontSize={3} mt={3} caps children="Cayce Beames" />
            </Flex>
            <Action
              is="outline"
              href="https://photos.app.goo.gl/eU1hzZq1XsU4xGcu8"
              target="_blank"
              bg={theme.colors.primary}
              mt={4}
              chevronRight
              children="See the album"
            />
          </Box>
        </VideoContainer>
        <VideoContainer>
          <Sheet
            bg={theme.colors.smoke}
            color={theme.colors.slate}
            p={[3, 4]}
            align="left"
            style={{ minHeight: 'auto' }}
          >
            <Text fontSize={3}>
              Oh me oh my, I sure do love nuts. And I’m so happy it’s National
              Nut Day. They’re so nutritious and great, I eat them all the time.
              I saved my favorite ones for winter though by putting them in the
              hollow under the old willow tree. I sure hope nobody finds them
              there, cause I’d be really sad if someone took my favorite nuts.
            </Text>
          </Sheet>
          <Flex align="center" justify="center" wrap mx={[2, 4]}>
            <Avatar src="/contributions/squirrel.jpg" size={96} mx={3} />
            <Heading.h3 fontSize={3} mt={3} caps children="#shipit squirrel" />
          </Flex>
        </VideoContainer>
      </Videos>
    </Box.section>
    <Footer />
  </Layout>
)
