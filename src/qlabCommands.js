export default {
  alwaysReply: {
    '{boolean}': '/alwaysReply {boolean}',
  },
  auditionWindow: {
    '{true|false}': '/auditionWindow {true|false}',
  },
  toggleAuditionWindow: '/toggleAuditionWindow',
  fontNames: '/fontNames',
  fontFamiliesAndStyles: '/fontFamiliesAndStyles',
  liveFadePreview: {
    '{true|false}': '/liveFadePreview {true|false}',
  },
  toggleLiveFadePreview: '/toggleLiveFadePreview',
  overrides: {
    midiInputEnabled: {
      '{true|false}': '/overrides/midiInputEnabled {true|false}',
    },
  },
  toggleMidiInput: '/overrides/toggleMidiInput',
  midiOutputEnabled: {
    '{true|false}': '/overrides/midiOutputEnabled {true|false}',
  },
  toggleMidiOutput: '/overrides/toggleMidiOutput',
  mscInputEnabled: {
    '{true|false}': '/overrides/mscInputEnabled {true|false}',
  },
  toggleMscInput: '/overrides/toggleMscInput',
  mscOutputEnabled: {
    '{true|false}': '/overrides/mscOutputEnabled {true|false}',
  },
  toggleMscOutput: '/overrides/toggleMscOutput',
  sysexInputEnabled: {
    '{true|false}': '/overrides/sysexInputEnabled {true|false}',
  },
  toggleSysexInput: '/overrides/toggleSysexInput',
  sysexOutputEnabled: {
    '{true|false}': '/overrides/sysexOutputEnabled {true|false}',
  },
  toggleSysexOutput: '/overrides/toggleSysexOutput',
  oscInputEnabled: {
    '{true|false}': '/overrides/oscInputEnabled {true|false}',
  },
  toggleOscInput: '/overrides/toggleOscInput',
  oscOutputEnabled: {
    '{true|false}': '/overrides/oscOutputEnabled {true|false}',
  },
  toggleOscOutput: '/overrides/toggleOscOutput',
  timecodeInputEnabled: {
    '{true|false}': '/overrides/timecodeInputEnabled {true|false}',
  },
  toggleTimecodeInput: '/overrides/toggleTimecodeInput',
  timecodeOutputEnabled: {
    '{true|false}': '/overrides/timecodeOutputEnabled {true|false}',
  },
  toggleTimecodeOutput: '/overrides/toggleTimecodeOutput',
  overrideWindow: {
    '{true|false}': '/overrideWindow {true|false}',
  },
  toggleOverrideWindow: '/toggleOverrideWindow',
  replyFormat: {
    '{format_string}': '/replyFormat {format_string}',
  },
  timecodeWindow: {
    '{true|false}': '/timecodeWindow {true|false}',
  },
  toggleTimecodeWindow: '/toggleTimecodeWindow',
  version: '/version',
  workingDirectory: {
    '{path}': '/workingDirectory {path}',
  },
  workspaces: '/workspaces',
  basePath: '/basePath',
  connect: {
    '{passcode_string}': '/connect {passcode_string}',
  },
  disconnect: '/disconnect',
  doubleGoWindowRemaining: '/doubleGoWindowRemaining',
  cueLists: '/cueLists',
  selectedCues: '/selectedCues',
  runningCues: '/runningCues',
  runningOrPausedCues: '/runningOrPausedCues',
  dashboard: {
    newCueWithChanges: '/dashboard/newCueWithChanges',
  },
  newCueWithAll: '/dashboard/newCueWithAll',
  revert: '/dashboard/revert',
  updateLatestCue: '/dashboard/updateLatestCue',
  updateOriginatingCues: '/dashboard/updateOriginatingCues',
  setLight: {
    '{string}': {
      '{number}': '/dashboard/setLight {string} {number}',
    },
  },
  delete: {
    '{cue_number}': '/delete/{cue_number}',
  },
  delete_id: {
    '{cue_id}': '/delete_id/{cue_id}',
  },
  selected: '/delete/selected',
  fullScreen: {
    '{number}': '/fullScreen {number}',
  },
  toggleFullScreen: '/toggleFullScreen',
  go: '/go',
  lightDashboard: {
    '{true|false}': '/lightDashboard {true|false}',
  },
  toggleLightDashboard: '/toggleLightDashboard',
  move: {
    '{cue_id}': {
      '{new_index}': {
        '{new_parent_cue_id}': '/move/{cue_id} {new_index} {new_parent_cue_id}',
      },
    },
  },
  new: {
    '{cue_type}': '/new {cue_type}',
  },
  panic: '/panic',
  panicInTime: {
    '{number}': '/panicInTime {number}',
  },
  pause: '/pause',
  playhead: {
    '{cue_number}': '/playhead/{cue_number}',
  },
  playheadId: {
    '{cue_id}': '/playheadId/{cue_id}',
  },
  playbackPosition: {
    '{cue_number}': '/playbackPosition/{cue_number}',
  },
  playbackPositionId: {
    '{cue_id}': '/playbackPositionId/{cue_id}',
  },
  next: '/playhead/next',
  previous: '/playhead/previous',
  nextSequence: '/playhead/nextSequence',
  previousSequence: '/playhead/previousSequence',
  renumber: {
    '{startNumber}': {
      '{incrementNumber}': '/renumber {startNumber} {incrementNumber}',
    },
  },
  reset: '/reset',
  resume: '/resume',
  save: '/save',
  select: {
    '{cue_number}': '/select/{cue_number}',
  },
  select_id: {
    '{id}': '/select_id/{id}',
  },
  selectionIsPlayhead: {
    '{number}': '/selectionIsPlayhead {number}',
  },
  toggleSelectionIsPlayhead: '/toggleSelectionIsPlayhead',
  showMode: {
    '{number}': '/showMode {number}',
  },
  toggleEditShowMode: '/toggleEditShowMode',
  stop: '/stop',
  hardStop: '/hardStop',
  thump: '/thump',
  undo: '/undo',
  redo: '/redo',
  updates: {
    '{number}': '/updates {number}',
  },
  settings: {
    audio: {
      maxVolume: '/settings/audio/maxVolume',
    },
  },
  audio: {
    minVolume: '/settings/audio/minVolume',
  },
  general: {
    minGoTime: {
      '{number}': '/settings/general/minGoTime {number}',
    },
  },
  video: {
    surfaces: '/settings/video/surfaces',
  },
  surfaces: {
    '{surfaceID}': '/settings/video/surfaces/{surfaceID}',
  },
  '{surfaceID}': {
    '{screenIndex}': {
      enableGrid: {
        '{true|false}':
          '/settings/video/surfaces/{surfaceID}/{screenIndex}/enableGrid {true|false}',
      },
    },
  },
  '{screenIndex}': {
    enableGuides: {
      '{true|false}':
        '/settings/video/surfaces/{surfaceID}/{screenIndex}/enableGuides {true|false}',
    },
  },
  origin: {
    '{location}':
      '/settings/video/surfaces/{surfaceID}/{screenIndex}/origin {location}',
  },
  controlPoint: {
    '{row_index}': {
      '{column_index}': {
        '{location}':
          '/settings/video/surfaces/{surfaceID}/{screenIndex}/controlPoint {row_index} {column_index} {location}',
      },
    },
  },
  resetControlPoints:
    '/settings/video/surfaces/{surfaceID}/{screenIndex}/resetControlPoints',
  cue: {
    '{cue_identifier}': {
      actionElapsed: '/cue/{cue_identifier}/actionElapsed',
    },
  },
  '{cue_identifier}': {
    percentActionElapsed: '/cue/{cue_identifier}/percentActionElapsed',
  },
  allowsEditingDuration: '/cue/{cue_identifier}/allowsEditingDuration',
  armed: {
    '{number}': '/cue/{cue_identifier}/armed {number}',
  },
  autoLoad: {
    '{number}': '/cue/{cue_identifier}/autoLoad {number}',
  },
  cartPosition: '/cue/{cue_identifier}/cartPosition',
  colorName: {
    '{string}': '/cue/{cue_identifier}/colorName {string}',
  },
  continueMode: {
    '{number}': '/cue/{cue_identifier}/continueMode {number}',
  },
  cueTargetId: {
    '{string}': '/cue/{cue_identifier}/cueTargetId {string}',
  },
  cueTargetNumber: {
    '{string}': '/cue/{cue_identifier}/cueTargetNumber {string}',
  },
  currentCueTarget: {
    '{string}': '/cue/{cue_identifier}/currentCueTarget {string}',
  },
  tempCueTarget: {
    '{string}': '/cue/{cue_identifier}/tempCueTarget {string}',
  },
  tempCueTargetId: '/cue/{cue_identifier}/tempCueTargetId',
  currentDuration: {
    '{number}': '/cue/{cue_identifier}/currentDuration {number}',
  },
  tempDuration: {
    '{number}': '/cue/{cue_identifier}/tempDuration {number}',
  },
  currentFileTime: '/cue/{cue_identifier}/currentFileTime',
  defaultName: '/cue/{cue_identifier}/defaultName',
  displayName: '/cue/{cue_identifier}/displayName',
  listName: '/cue/{cue_identifier}/listName',
  duckLevel: {
    '{number}': '/cue/{cue_identifier}/duckLevel {number}',
  },
  duckOthers: {
    '{number}': '/cue/{cue_identifier}/duckOthers {number}',
  },
  duckTime: {
    '{number}': '/cue/{cue_identifier}/duckTime {number}',
  },
  duration: {
    '{number}': '/cue/{cue_identifier}/duration {number}',
  },
  fadeAndStopOthers: {
    '{number}': '/cue/{cue_identifier}/fadeAndStopOthers {number}',
  },
  fadeAndStopOthersTime: {
    '{number}': '/cue/{cue_identifier}/fadeAndStopOthersTime {number}',
  },
  fileTarget: {
    '{string}': '/cue/{cue_identifier}/fileTarget {string}',
  },
  flagged: {
    '{number}': '/cue/{cue_identifier}/flagged {number}',
  },
  hasCueTargets: '/cue/{cue_identifier}/hasCueTargets',
  hasFileTargets: '/cue/{cue_identifier}/hasFileTargets',
  isActionRunning: '/cue/{cue_identifier}/isActionRunning',
  isBroken: '/cue/{cue_identifier}/isBroken',
  isLoaded: '/cue/{cue_identifier}/isLoaded',
  isOverridden: '/cue/{cue_identifier}/isOverridden',
  isPanicking: '/cue/{cue_identifier}/isPanicking',
  isPaused: '/cue/{cue_identifier}/isPaused',
  isRunning: '/cue/{cue_identifier}/isRunning',
  isTailingOut: '/cue/{cue_identifier}/isTailingOut',
  load: '/cue/{cue_identifier}/load',
  loadAt: {
    '{number}': '/cue/{cue_identifier}/loadAt {number}',
  },
  loadActionAt: {
    '{number}': '/cue/{cue_identifier}/loadActionAt {number}',
  },
  loadAndSetPlayhead: '/cue/{cue_identifier}/loadAndSetPlayhead',
  maxTimeInCueSequence: '/cue/{cue_identifier}/maxTimeInCueSequence',
  name: {
    '{string}': '/cue/{cue_identifier}/name {string}',
  },
  notes: {
    '{string}': '/cue/{cue_identifier}/notes {string}',
  },
  number: {
    '{string}': '/cue/{cue_identifier}/number {string}',
  },
  '{number}': '/cue/{cue_identifier}/panicInTime {number}',
  hardPause: '/cue/{cue_identifier}/hardPause',
  togglePause: '/cue/{cue_identifier}/togglePause',
  parent: '/cue/{cue_identifier}/parent',
  preview: '/cue/{cue_identifier}/preview',
  preWait: {
    '{number}': '/cue/{cue_identifier}/preWait {number}',
  },
  preWaitElapsed: '/cue/{cue_identifier}/preWaitElapsed',
  percentPreWaitElapsed: '/cue/{cue_identifier}/percentPreWaitElapsed',
  postWait: {
    '{number}': '/cue/{cue_identifier}/postWait {number}',
  },
  postWaitElapsed: '/cue/{cue_identifier}/postWaitElapsed',
  percentPostWaitElapsed: '/cue/{cue_identifier}/percentPostWaitElapsed',
  soloCueInTime: {
    '{number}': '/cue/{cue_identifier}/soloCueInTime {number}',
  },
  start: '/cue/{cue_identifier}/start',
  startAndAutoloadNext: '/cue/{cue_identifier}/startAndAutoloadNext',
  type: '/cue/{cue_identifier}/type',
  uniqueID: '/cue/{cue_identifier}/uniqueID',
  valuesForKeys: {
    '{json_string}': '/cue/{cue_identifier}/valuesForKeys {json_string}',
  },
  valuesForKeysWithArguments: {
    '{json_string}':
      '/cue/{cue_identifier}/valuesForKeysWithArguments {json_string}',
  },
  cartColumns: '/cue/{cue_identifier}/cartColumns',
  cartRows: '/cue/{cue_identifier}/cartRows',
  children: '/cue/{cue_identifier}/children',
  mode: {
    '{number}': '/cue/{cue_identifier}/mode {number}',
  },
  moveCartCue: {
    '{child}': {
      '{row}': {
        '{column}': '/cue/{cue_identifier}/moveCartCue/{child} {row} {column}',
      },
    },
  },
  '{string}': '/cue/{cue_identifier}/playhead {string}',
  playheadNumber: {
    '{string}': '/cue/{cue_identifier}/playheadNumber {string}',
  },
  playheadIdNumber: {
    '{string}': '/cue/{cue_identifier}/playheadIdNumber {string}',
  },
  doFade: {
    '{number}': '/cue/{cue_identifier}/doFade {number}',
  },
  doPitchShift: {
    '{number}': '/cue/{cue_identifier}/doPitchShift {number}',
  },
  endTime: {
    '{number}': '/cue/{cue_identifier}/endTime {number}',
  },
  gang: {
    '{inChannel}': {
      '{outChannel}': {
        '{gang}': '/cue/{cue_identifier}/gang {inChannel} {outChannel} {gang}',
      },
    },
  },
  '{inChannel}': {
    '{outChannel}': {
      '{gang}': '/cue/{cue_identifier}/gang/{inChannel}/{outChannel} {gang}',
    },
  },
  infiniteLoop: {
    '{number}': '/cue/{cue_identifier}/infiniteLoop {number}',
  },
  level: {
    '{inChannel}': {
      '{outChannel}': {
        '{decibel}':
          '/cue/{cue_identifier}/level {inChannel} {outChannel} {decibel}',
      },
    },
  },
  '{outChannel}': {
    '{decibel}':
      '/cue/{cue_identifier}/level/{inChannel}/{outChannel} {decibel}',
  },
  levels: '/cue/{cue_identifier}/levels',
  liveAverageLevel: {
    '{outputChannel}': {
      '{low}': {
        '{high}':
          '/cue/{cue_identifier}/liveAverageLevel/{outputChannel} {low} {high}',
      },
    },
  },
  lockFadeToCue: {
    '{number}': '/cue/{cue_identifier}/lockFadeToCue {number}',
  },
  numChannelsIn: '/cue/{cue_identifier}/numChannelsIn',
  patch: {
    '{number}': '/cue/{cue_identifier}/patch {number}',
  },
  patchList: '/cue/{cue_identifier}/patchList',
  playCount: {
    '{number}': '/cue/{cue_identifier}/playCount {number}',
  },
  rate: {
    '{number}': '/cue/{cue_identifier}/rate {number}',
  },
  liveRate: {
    '{number}': '/cue/{cue_identifier}/liveRate {number}',
  },
  sliceMarkers: '/cue/{cue_identifier}/sliceMarkers',
  sliceMarker: {
    '{index}': '/cue/{cue_identifier}/sliceMarker {index}',
  },
  '{index}': '/cue/{cue_identifier}/sliceMarker/{index}',
  time: '/cue/{cue_identifier}/sliceMarker/{index}/time',
  addSliceMarker: {
    '{time}': {
      '{play_count}':
        '/cue/{cue_identifier}/addSliceMarker {time} {play_count}',
    },
  },
  deleteSliceMarker: {
    '{index}': '/cue/{cue_identifier}/deleteSliceMarker {index}',
  },
  deleteSliceMarkers: '/cue/{cue_identifier}/deleteSliceMarkers',
  '{time}': {
    '{play_count}':
      '/cue/{cue_identifier}/sliceMarker {index} {time} {play_count}',
  },
  '{play_count}':
    '/cue/{cue_identifier}/sliceMarker/{index} {time} {play_count}',
  '+': {
    '{delta}': '/cue/{cue_identifier}/sliceMarker/{index}/time/+ {delta}',
  },
  '-': {
    '{delta}': '/cue/{cue_identifier}/sliceMarker/{index}/time/- {delta}',
  },
  '{delta}': '/cue/{cue_identifier}/sliceMarkers/time/+ {delta}',
  lastSlicePlayCount: {
    '{play_count}': '/cue/{cue_identifier}/lastSlicePlayCount {play_count}',
  },
  lastSliceInfiniteLoop: {
    '{number}': '/cue/{cue_identifier}/lastSliceInfiniteLoop {number}',
  },
  sliderLevel: {
    '{channel}': {
      '{decibel}': '/cue/{cue_identifier}/sliderLevel {channel} {decibel}',
    },
  },
  '{channel}': {
    '{decibel}': '/cue/{cue_identifier}/sliderLevel/{channel} {decibel}',
  },
  sliderLevels: '/cue/{cue_identifier}/sliderLevels',
  startTime: {
    '{number}': '/cue/{cue_identifier}/startTime {number}',
  },
  channelOffset: '/cue/{cue_identifier}/channelOffset',
  channels: {
    '{number}': '/cue/{cue_identifier}/channels {number}',
  },
  cueSize: '/cue/{cue_identifier}/cueSize',
  doEffect: {
    '{number}': '/cue/{cue_identifier}/doEffect {number}',
  },
  effect: {
    '{number}': '/cue/{cue_identifier}/effect {number}',
  },
  effectSet: {
    '{keyString}': {
      '{value}': '/cue/{cue_identifier}/effectSet {keyString} {value}',
    },
  },
  videoEffectSet: {
    '{keyString}': {
      '{value}': '/cue/{cue_identifier}/videoEffectSet {keyString} {value}',
    },
  },
  liveEffectSet: {
    '{keyString}': {
      '{value}': '/cue/{cue_identifier}/liveEffectSet {keyString} {value}',
    },
  },
  liveVideoEffectSet: {
    '{keyString}': {
      '{value}': '/cue/{cue_identifier}/liveVideoEffectSet {keyString} {value}',
    },
  },
  fullSurface: {
    '{number}': '/cue/{cue_identifier}/fullSurface {number}',
  },
  '{gang}': '/cue/{cue_identifier}/gang {inChannel} {outChannel} {gang}',
  holdLastFrame: {
    '{number}': '/cue/{cue_identifier}/holdLastFrame {number}',
  },
  layer: {
    '{number}': '/cue/{cue_identifier}/layer {number}',
  },
  '{decibel}': '/cue/{cue_identifier}/level {inChannel} {outChannel} {decibel}',
  '{outputChannel}': {
    '{low}': {
      '{high}':
        '/cue/{cue_identifier}/liveAverageLevel/{outputChannel} {low} {high}',
    },
  },
  opacity: {
    '{number}': '/cue/{cue_identifier}/opacity {number}',
  },
  originX: {
    '{number}': '/cue/{cue_identifier}/originX {number}',
  },
  originY: {
    '{number}': '/cue/{cue_identifier}/originY {number}',
  },
  preserveAspectRatio: {
    '{number}': '/cue/{cue_identifier}/preserveAspectRatio {number}',
  },
  quaternion: {
    '{number': {
      number: {
        number: {
          'number}':
            '/cue/{cue_identifier}/quaternion {number number number number}',
        },
      },
    },
  },
  resetRotation: '/cue/{cue_identifier}/resetRotation',
  rotateX: {
    '{number}': '/cue/{cue_identifier}/rotateX {number}',
  },
  rotateY: {
    '{number}': '/cue/{cue_identifier}/rotateY {number}',
  },
  rotateZ: {
    '{number}': '/cue/{cue_identifier}/rotateZ {number}',
  },
  scaleX: {
    '{number}': '/cue/{cue_identifier}/scaleX {number}',
  },
  liveScaleX: {
    '{number}': '/cue/{cue_identifier}/liveScaleX {number}',
  },
  scaleY: {
    '{number}': '/cue/{cue_identifier}/scaleY {number}',
  },
  liveScaleY: {
    '{number}': '/cue/{cue_identifier}/liveScaleY {number}',
  },
  surfaceID: {
    '{number}': '/cue/{cue_identifier}/surfaceID {number}',
  },
  surfaceList: '/cue/{cue_identifier}/surfaceList',
  surfaceName: {
    '{string}': '/cue/{cue_identifier}/surfaceName {string}',
  },
  surfaceSize: '/cue/{cue_identifier}/surfaceSize',
  translationX: {
    '{number}': '/cue/{cue_identifier}/translationX {number}',
  },
  liveTranslationX: {
    '{number}': '/cue/{cue_identifier}/liveTranslationX {number}',
  },
  translationY: {
    '{number}': '/cue/{cue_identifier}/translationY {number}',
  },
  liveTranslationY: {
    '{number}': '/cue/{cue_identifier}/liveTranslationY {number}',
  },
  cameraPatch: '/cue/{cue_identifier}/cameraPatch',
  fixedWidth: {
    '{number}': '/cue/{cue_identifier}/fixedWidth {number}',
  },
  text: {
    '{string}': '/cue/{cue_identifier}/text {string}',
  },
  liveText: {
    '{string}': '/cue/{cue_identifier}/liveText {string}',
  },
  format: {
    '{json_string}': '/cue/{cue_identifier}/text/format {json_string}',
  },
  alignment: {
    '{alignment}': '/cue/{cue_identifier}/text/format/alignment {alignment}',
  },
  fontFamily: '/cue/{cue_identifier}/text/format/fontFamily',
  fontStyle: '/cue/{cue_identifier}/text/format/fontStyle',
  fontFamilyAndStyle: {
    '{family}': {
      '{style}':
        '/cue/{cue_identifier}/text/format/fontFamilyAndStyle {family} {style}',
    },
  },
  fontName: {
    '{name}': '/cue/{cue_identifier}/text/format/fontName {name}',
  },
  fontSize: {
    '{number}': '/cue/{cue_identifier}/text/format/fontSize {number}',
  },
  lineSpacing: {
    '{number}': '/cue/{cue_identifier}/text/format/lineSpacing {number}',
  },
  color: {
    '{red}': {
      '{green}': {
        '{blue}': {
          '{alpha}':
            '/cue/{cue_identifier}/text/format/color {red} {green} {blue} {alpha}',
        },
      },
    },
  },
  alwaysCollate: {
    '{number}': '/cue/{cue_identifier}/alwaysCollate {number}',
  },
  collateAndStart: '/cue/{cue_identifier}/collateAndStart',
  flatten: '/cue/{cue_identifier}/flatten',
  flattenCommands: '/cue/{cue_identifier}/flattenCommands',
  lightCommandsForDisplay: '/cue/{cue_identifier}/lightCommandsForDisplay',
  lightCommandText: {
    '{string}': '/cue/{cue_identifier}/lightCommandText {string}',
  },
  prune: '/cue/{cue_identifier}/prune',
  pruneCommands: '/cue/{cue_identifier}/pruneCommands',
  removeLightCommandsMatching: {
    '{string}': '/cue/{cue_identifier}/removeLightCommandsMatching {string}',
  },
  safeSort: '/cue/{cue_identifier}/safeSort',
  safeSortCommands: '/cue/{cue_identifier}/safeSortCommands',
  updateLightCommand: {
    '{string}': {
      '{number}': '/cue/{cue_identifier}/updateLightCommand {string} {number}',
    },
  },
  doOpacity: {
    '{number}': '/cue/{cue_identifier}/doOpacity {number}',
  },
  doRate: {
    '{number}': '/cue/{cue_identifier}/doRate {number}',
  },
  doRotation: {
    '{number}': '/cue/{cue_identifier}/doRotation {number}',
  },
  doScale: {
    '{number}': '/cue/{cue_identifier}/doScale {number}',
  },
  doTranslation: {
    '{number}': '/cue/{cue_identifier}/doTranslation {number}',
  },
  inChannel: {
    outChannel: {
      '{gang}': '/cue/{cue_identifier}/gang inChannel outChannel {gang}',
    },
  },
  outChannel: {
    '{gang}': '/cue/{cue_identifier}/gang/inChannel/outChannel {gang}',
  },
  geoMode: {
    '{number}': '/cue/{cue_identifier}/geoMode {number}',
  },
  '{number': {
    number: {
      number: {
        'number}':
          '/cue/{cue_identifier}/quaternion {number number number number}',
      },
    },
  },
  stopTargetWhenDone: {
    '{number}': '/cue/{cue_identifier}/stopTargetWhenDone {number}',
  },
  willFade: {
    '{row}': {
      '{column}': {
        '{number}': '/cue/{cue_identifier}/willFade {row} {column} {number}',
      },
    },
  },
  customString: {
    '{string}': '/cue/{cue_identifier}/customString {string}',
  },
  messageType: {
    '{number}': '/cue/{cue_identifier}/messageType {number}',
  },
  qlabCommand: {
    '{number}': '/cue/{cue_identifier}/qlabCommand {number}',
  },
  qlabCueNumber: {
    '{string}': '/cue/{cue_identifier}/qlabCueNumber {string}',
  },
  qlabCueParameters: {
    '{string}': '/cue/{cue_identifier}/qlabCueParameters {string}',
  },
  rawString: {
    '{string}': '/cue/{cue_identifier}/rawString {string}',
  },
  udpString: {
    '{string}': '/cue/{cue_identifier}/udpString {string}',
  },
  byte1: {
    '{number}': '/cue/{cue_identifier}/byte1 {number}',
  },
  byte2: {
    '{number}': '/cue/{cue_identifier}/byte2 {number}',
  },
  byteCombo: {
    '{number}': '/cue/{cue_identifier}/byteCombo {number}',
  },
  channel: {
    '{number}': '/cue/{cue_identifier}/channel {number}',
  },
  command: {
    '{number}': '/cue/{cue_identifier}/command {number}',
  },
  commandFormat: {
    '{number}': '/cue/{cue_identifier}/commandFormat {number}',
  },
  controlNumber: {
    '{number}': '/cue/{cue_identifier}/controlNumber {number}',
  },
  controlValue: {
    '{number}': '/cue/{cue_identifier}/controlValue {number}',
  },
  deviceID: {
    '{number}': '/cue/{cue_identifier}/deviceID {number}',
  },
  endValue: {
    '{number}': '/cue/{cue_identifier}/endValue {number}',
  },
  hours: {
    '{number}': '/cue/{cue_identifier}/hours {number}',
  },
  minutes: {
    '{number}': '/cue/{cue_identifier}/minutes {number}',
  },
  seconds: {
    '{number}': '/cue/{cue_identifier}/seconds {number}',
  },
  frames: {
    '{number}': '/cue/{cue_identifier}/frames {number}',
  },
  subframes: {
    '{number}': '/cue/{cue_identifier}/subframes {number}',
  },
  macro: {
    '{number}': '/cue/{cue_identifier}/macro {number}',
  },
  qList: {
    '{string}': '/cue/{cue_identifier}/qList {string}',
  },
  qNumber: {
    '{string}': '/cue/{cue_identifier}/qNumber {string}',
  },
  qPath: {
    '{string}': '/cue/{cue_identifier}/qPath {string}',
  },
  status: {
    '{number}': '/cue/{cue_identifier}/status {number}',
  },
  timecodeFormat: {
    '{number}': '/cue/{cue_identifier}/timecodeFormat {number}',
  },
  timecodeString: {
    '{string}': '/cue/{cue_identifier}/timecodeString {string}',
  },
  startNextCueWhenSliceEnds: {
    '{number}': '/cue/{cue_identifier}/startNextCueWhenSliceEnds {number}',
  },
  stopTargetWhenSliceEnds: {
    '{number}': '/cue/{cue_identifier}/stopTargetWhenSliceEnds {number}',
  },
  compileSource: '/cue/{cue_identifier}/compileSource',
  scriptSource: '/cue/{cue_identifier}/scriptSource',
}
