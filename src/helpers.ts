import execa from 'execa'

export const getLocalIp = async () => {
  // const bashGetLocalIp = 'ipconfig getifaddr en0'
  const { stdout } = await execa('ipconfig', ['getifaddr', 'en0'])
  return stdout
}
