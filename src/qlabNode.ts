// import fs from 'fs'

import { qlabCommandList } from './qlabCommandList'
import qc from './qlabCommands'

class QlabNode {
  qlabCommandList: string[]
  cmd: { [key: string]: any } = {}

  constructor(qlabCommandList = []) {
    this.qlabCommandList = qlabCommandList
  }

  showCommands() {
    this.qlabCommandList.forEach(cmd => console.log(cmd))
  }

  convert(qlabCommandList: string[]) {
    const cmds: { [key: string]: any } = {}
    let pos = cmds

    const cmdSegmentList = qlabCommandList.map(cmd => {
      return {
        original: cmd,
        parsed: cmd.split(/[\s\/]/g).slice(1),
      }
    })

    cmdSegmentList.forEach(command => {
      // base
      pos = cmds

      command.parsed.forEach((segment, idx) => {
        // new
        if (!pos[segment]) {
          if (idx === command.parsed.length - 1) {
            pos[segment] = command.original
          } else {
            pos[segment] = {}
            // move forward
            pos = pos[segment]
          }
        }
      })
    })

    // console.log(JSON.stringify(cmds, null, 2))
    return cmds
  }
}

const qn = new QlabNode()

// const output = qn.convert(qlabCommandList)
// fs.writeFileSync('./src/qlabCommands.json', JSON.stringify(output, null, 2))
