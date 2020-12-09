// @ts-ignore
import Osc from 'osc'

type IncomingQlabMessage = {
  oscMsg: QlabResponse
  timeTag: any
  info: object
}

type QlabArg =
  | {
      type: 's'
      value: string
    }
  | {
      type: 'i'
      value: number
    }

enum Mode {
  'timeline' = 3,
  'enter' = 1,
  'next' = 2,
  'random' = 4,
}

type QlabResponse = {
  address: string
  args: QlabArg
}

export class Qlab {
  osc: any
  messageCallback:
    | ((qlabMsg: IncomingQlabMessage) => Promise<void>)
    | null = null
  // * qlabId is not required
  qlabId: string = null!
  cue: number = 1
  fallbackTimer: number | null = null

  constructor(targetIp: string) {
    this.osc = new Osc.UDPPort({
      localAddress: '0.0.0.0',
      localPort: 53001,
      remoteAddress: targetIp,
      remotePort: 53000,
      metadata: true,
    })

    this.osc.on('message', (oscMsg: QlabResponse, timeTag: any, info: any) => {
      this.handleIncomingMessage({ oscMsg, timeTag, info })
    })

    this.osc.open()
  }

  async handleIncomingMessage(qlabMsg: IncomingQlabMessage) {
    // fire callback if there is one
    // * this pattern is for only firing one command and response at a time
    if (this.messageCallback !== null) {
      await this.messageCallback(qlabMsg)
      this.messageCallback = null
    }
  }

  async send({
    address,
    args = [],
  }: {
    address: string
    args?: QlabArg[]
  }): Promise<IncomingQlabMessage> {
    return new Promise((resolve, reject) => {
      // send message
      this.osc.send({
        address: address,
        args,
      })

      // callback
      this.messageCallback = async (qlabMsg: IncomingQlabMessage) => {
        console.log(qlabMsg.oscMsg.address)
        if (this.fallbackTimer) clearTimeout(this.fallbackTimer)
        resolve(qlabMsg)
      }

      // fire resolve as some methods do not return a reply from qlab
      this.fallbackTimer = setTimeout(resolve, 1000)
    })
  }

  // * fullAddress is not required when making requests
  useFullAddress(address: string): string {
    if (!this.qlabId) throw Error('qlabId is not defined')
    return `/workspace/${this.qlabId}${address}`
  }

  argValues(arg: string | number): QlabArg[] {
    let dataType: 's' | 'i' = null!
    if (typeof arg === 'string') dataType = 's'
    if (typeof arg === 'number') dataType = 'i'

    return [
      // @ts-expect-error
      {
        type: dataType,
        value: arg,
      },
    ]
  }

  async getCueList() {
    return this.send({
      address: '/cueLists',
    })
  }

  async createGroup() {
    console.log('create group')
    // /workspace/{id}/new {cue_type}
    return this.send({
      address: '/new',
      args: this.argValues('group'),
    })
  }

  async selectedGroupName(groupName: string) {
    console.log('selected group name')
    // /cue/selected/name {string}
    return this.send({
      address: '/cue/selected/name',
      args: this.argValues(groupName),
    })
  }

  async changeGroupMode(mode: Mode) {
    console.log('change group mode')
    // /cue/{cue_number}/mode {number}
    return this.send({
      address: `/cue/selected/mode`,
      args: this.argValues(mode),
    })
  }
}

;(async () => {
  console.log('START')
  // todo: get local ip dynamically
  const qlab = new Qlab('192.168.0.25')

  // * now we can use async/await
  await qlab.getCueList().then(qlabMsg => {
    console.log(qlabMsg.oscMsg.args)
    console.log('get cue list complete!')
  })

  await qlab.createGroup().then(qlabMsg => {
    console.log('create group complete!')
  })

  // ! some qlab commands do not send back a response!
  // todo: find out why? modifiers don't may be? These 2 don't
  await qlab.selectedGroupName('cheeky boi').then(qlabMsg => {
    if (!qlabMsg) console.log('fallback has fired')
  })
  await qlab.changeGroupMode(Mode.timeline).then(qlabMsg => {
    if (!qlabMsg) console.log('fallback has fired')
  })

  // gracefully exit
  console.log('DONE')
  process.exit(0)
})()

// /cue/{cue_number}/mode {number}

// qlab.send({
//   address: '/workspace/6411216D-F9C3-480D-A6A3-B43A9DFC1E47/new',
//   args: [
//     {
//       type: 's',
//       value: 'group',
//     },
//   ],
// })

// client.send('cue/selected/start', 200, (data: any) => {

// client.send('/oscAddress', 200, () => {
//   console.log('here')
//   client.close()
// })

// /workspace/{100}/new {group}

// /cue/selected/level/0/0 -10

// \\/workspace\\/6411216D-F9C3-480D-A6A3-B43A9DFC1E47\\/cueLists"

//   cue/selected/start

/// workspace/{id}/new group 1

// workspace/6411216D-F9C3-480D-A6A3-B43A9DFC1E47/new group 100

/* STUFF TO EDIT CUES

/cue/{cue_number}/fileTarget {string}

/cue/{cue_number}/duration {number}

/cue/{cue_number}/name {string}

/cue/{cue_number}/notes {string}

/cue/{cue_number}/number {string}

/cue/{cue_number}/continueMode {number}

0 - NO CONTINUE
1 - AUTO CONTINUE
2 - AUTO FOLLOW

/cue/{cue_number}/mode {number}

*/

// Unsupported, non-API.
/*
osc.argumentTypes = {
  i: {
    reader: 'readInt32',
    writer: 'writeInt32',
  },
  h: {
    reader: 'readInt64',
    writer: 'writeInt64',
  },
  f: {
    reader: 'readFloat32',
    writer: 'writeFloat32',
  },
  s: {
    reader: 'readString',
    writer: 'writeString',
  },
  S: {
    reader: 'readString',
    writer: 'writeString',
  },
  b: {
    reader: 'readBlob',
    writer: 'writeBlob',
  },
  t: {
    reader: 'readTimeTag',
    writer: 'writeTimeTag',
  },
  T: {
    reader: 'readTrue',
  },
  F: {
    reader: 'readFalse',
  },
  N: {
    reader: 'readNull',
  },
  I: {
    reader: 'readImpulse',
  },
  d: {
    reader: 'readFloat64',
    writer: 'writeFloat64',
  },
  c: {
    reader: 'readChar32',
    writer: 'writeChar32',
  },
  r: {
    reader: 'readColor',
    writer: 'writeColor',
  },
  m: {
    reader: 'readMIDIBytes',
    writer: 'writeMIDIBytes',
  },
  // [] are special cased within read/writeArguments()
}

*/

/**
 * 
qlab.send({
  address: '/workspace/6411216D-F9C3-480D-A6A3-B43A9DFC1E47/new',
  args: [
    {
      type: 's',
      value: 'group',
    },
  ],
})
 */
