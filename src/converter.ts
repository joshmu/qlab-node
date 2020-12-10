import { qlabCommandList } from './qlabCommandList'

class QlabNode {
  qlabCommandList: string[]
  cmd: { [key: string]: any } = {}

  constructor(qlabCommandList = []) {
    this.qlabCommandList = qlabCommandList
  }

  showCommands() {
    this.qlabCommandList.forEach(cmd => console.log(cmd))
  }

  convert(allCommands: string[]) {
    const cmds: { [key: string]: any } = {}
    let pos = cmds
    let prevPos = pos

    const cmdSegmentList = allCommands.map(cmd => cmd.split(/[\s\/]/g).slice(1))
    cmdSegmentList.forEach(cmdSegments => {
      // base
      pos = cmds

      cmdSegments.forEach(segment => {
        // new
        if (!pos[segment]) pos[segment] = {}
        // save
        prevPos = pos
        // move forward
        pos = pos[segment]
      })
    })

    console.log({ cmds })
    return cmds
  }
}

const qn = new QlabNode()

qn.convert(qlabCommandList)
