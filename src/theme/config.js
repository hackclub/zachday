import { theme } from '@hackclub/design-system'

export const grays = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff'
}

const primary = '#00aaff'

export const brand = {
  primary,
  brandBlue: primary,
  brandPink: '#ff00aa',
  brandRed: '#ff002b',
  brandYellow: '#ffaa00',
  brandGreen: '#00ffaa',
  muted: grays.grey
}

export const colors = {
  ...grays,
  ...brand
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = '"GT Eesti"'
const disp = '"GT Super"'

theme.font = `${sans},${baseFamily}`
theme.fontDisplay = `${disp},${baseFamily}`

export default theme
