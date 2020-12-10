export default {
  alwaysReply: {
    '{number}': '/alwaysReply {number}',
  },
  auditionWindow: {
    '{number}': '/auditionWindow {number}',
  },
  toggleAuditionWindow: '/toggleAuditionWindow',
  fontNames: '/fontNames',
  fontFamiliesAndStyles: '/fontFamiliesAndStyles',
  liveFadePreview: {
    '{number}': '/liveFadePreview {number}',
  },
  toggleLiveFadePreview: '/toggleLiveFadePreview',
  overrides: {
    artNetEnabled: {
      '{number}': '/overrides/artNetEnabled {number}',
    },
  },
  toggleArtNet: '/overrides/toggleArtNet',
  midiInputEnabled: {
    '{number}': '/overrides/midiInputEnabled {number}',
  },
  toggleMidiInput: '/overrides/toggleMidiInput',
  midiOutputEnabled: {
    '{number}': '/overrides/midiOutputEnabled {number}',
  },
  toggleMidiOutput: '/overrides/toggleMidiOutput',
  mscInputEnabled: {
    '{number}': '/overrides/mscInputEnabled {number}',
  },
  toggleMscInput: '/overrides/toggleMscInput',
  mscOutputEnabled: {
    '{number}': '/overrides/mscOutputEnabled {number}',
  },
  toggleMscOutput: '/overrides/toggleMscOutput',
  sysexInputEnabled: {
    '{number}': '/overrides/sysexInputEnabled {number}',
  },
  toggleSysexInput: '/overrides/toggleSysexInput',
  sysexOutputEnabled: {
    '{number}': '/overrides/sysexOutputEnabled {number}',
  },
  toggleSysexOutput: '/overrides/toggleSysexOutput',
  oscInputEnabled: {
    '{number}': '/overrides/oscInputEnabled {number}',
  },
  toggleOscInput: '/overrides/toggleOscInput',
  oscOutputEnabled: {
    '{number}': '/overrides/oscOutputEnabled {number}',
  },
  toggleOscOutput: '/overrides/toggleOscOutput',
  timecodeInputEnabled: {
    '{number}': '/overrides/timecodeInputEnabled {number}',
  },
  toggleTimecodeInput: '/overrides/toggleTimecodeInput',
  timecodeOutputEnabled: {
    '{number}': '/overrides/timecodeOutputEnabled {number}',
  },
  toggleTimecodeOutput: '/overrides/toggleTimecodeOutput',
  overrideWindow: {
    '{number}': '/overrideWindow {number}',
  },
  toggleOverrideWindow: '/toggleOverrideWindow',
  replyFormat: {
    '{format_string}': '/replyFormat {format_string}',
  },
  timecodeWindow: {
    '{number}': '/timecodeWindow {number}',
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
  shallow: '/cueLists/shallow',
  uniqueIDs: '/cueLists/uniqueIDs',
  dashboard: {
    clear: '/dashboard/clear',
  },
  updateLatestCue: '/dashboard/updateLatestCue',
  updateOriginatingCues: '/dashboard/updateOriginatingCues',
  updateSelectedCues: '/dashboard/updateSelectedCues',
  newCueWithAll: '/dashboard/newCueWithAll',
  newCueWithChanges: '/dashboard/newCueWithChanges',
  recordAllToLatest: '/dashboard/recordAllToLatest',
  recordAllToSelected: '/dashboard/recordAllToSelected',
  revert: '/dashboard/revert',
  redo: '/dashboard/redo',
  mode: {
    '{string}': '/dashboard/mode {string}',
  },
  nextMode: '/dashboard/nextMode',
  setLight: {
    '{string}': {
      '{setting}': {
        '{time}': '/dashboard/setLight {string} {setting} {time}',
      },
    },
  },
  undo: '/dashboard/undo',
  delete: {
    '{cue_number}': '/delete/{cue_number}',
  },
  delete_id: {
    '{cue_id}': '/delete_id/{cue_id}',
  },
  active: '/delete/active',
  selected: '/delete/selected',
  fullScreen: {
    '{number}': '/fullScreen {number}',
  },
  toggleFullScreen: '/toggleFullScreen',
  go: {
    '{cue_number}': '/go {cue_number}',
  },
  '{cue_number}': '/go/{cue_number}',
  lightDashboard: {
    '{number}': '/lightDashboard {number}',
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
  outputChannelNames: '/settings/audio/outputChannelNames',
  mic: {
    outputChannelNames: '/settings/mic/outputChannelNames',
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
        '{number}':
          '/settings/video/surfaces/{surfaceID}/{screenIndex}/enableGrid {number}',
      },
    },
  },
  '{screenIndex}': {
    enableGuides: {
      '{number}':
        '/settings/video/surfaces/{surfaceID}/{screenIndex}/enableGuides {number}',
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
    '{cue_number}': {
      actionElapsed: '/cue/{cue_number}/actionElapsed',
    },
  },
  percentActionElapsed: '/cue/{cue_number}/percentActionElapsed',
  allowsEditingDuration: '/cue/{cue_number}/allowsEditingDuration',
  armed: {
    '{number}': '/cue/{cue_number}/armed {number}',
  },
  autoLoad: {
    '{number}': '/cue/{cue_number}/autoLoad {number}',
  },
  cartPosition: '/cue/{cue_number}/cartPosition',
  '{number}': {
    children: {
      shallow: '/cue/{number}/children/shallow',
    },
  },
  children: {
    uniqueIDs: '/cue/{number}/children/uniqueIDs',
  },
  colorName: {
    '{string}': '/cue/{cue_number}/colorName {string}',
  },
  continueMode: {
    '{number}': '/cue/{cue_number}/continueMode {number}',
  },
  cueTargetId: {
    '{string}': '/cue/{cue_number}/cueTargetId {string}',
  },
  cueTargetNumber: {
    '{string}': '/cue/{cue_number}/cueTargetNumber {string}',
  },
  currentCueTarget: '/cue/{cue_number}/currentCueTarget',
  tempCueTargetNumber: {
    '{string}': '/cue/{cue_number}/tempCueTargetNumber {string}',
  },
  tempCueTargetId: '/cue/{cue_number}/tempCueTargetId',
  currentDuration: '/cue/{cue_number}/currentDuration',
  tempDuration: {
    '{number}': '/cue/{cue_number}/tempDuration {number}',
  },
  currentFileTime: '/cue/{cue_number}/currentFileTime',
  defaultName: '/cue/{cue_number}/defaultName',
  displayName: '/cue/{cue_number}/displayName',
  listName: '/cue/{cue_number}/listName',
  duckLevel: {
    '{number}': '/cue/{cue_number}/duckLevel {number}',
  },
  duckOthers: {
    '{number}': '/cue/{cue_number}/duckOthers {number}',
  },
  duckTime: {
    '{number}': '/cue/{cue_number}/duckTime {number}',
  },
  duration: {
    '{number}': '/cue/{cue_number}/duration {number}',
  },
  fadeAndStopOthers: {
    '{number}': '/cue/{cue_number}/fadeAndStopOthers {number}',
  },
  fadeAndStopOthersTime: {
    '{number}': '/cue/{cue_number}/fadeAndStopOthersTime {number}',
  },
  fileTarget: {
    '{string}': '/cue/{cue_number}/fileTarget {string}',
  },
  flagged: {
    '{number}': '/cue/{cue_number}/flagged {number}',
  },
  hasCueTargets: '/cue/{cue_number}/hasCueTargets',
  hasFileTargets: '/cue/{cue_number}/hasFileTargets',
  isActionRunning: '/cue/{cue_number}/isActionRunning',
  isBroken: '/cue/{cue_number}/isBroken',
  isLoaded: '/cue/{cue_number}/isLoaded',
  isOverridden: '/cue/{cue_number}/isOverridden',
  isPanicking: '/cue/{cue_number}/isPanicking',
  isPaused: '/cue/{cue_number}/isPaused',
  isRunning: '/cue/{cue_number}/isRunning',
  isTailingOut: '/cue/{cue_number}/isTailingOut',
  load: '/cue/{cue_number}/load',
  loadAt: {
    '{number}': '/cue/{cue_number}/loadAt {number}',
  },
  loadActionAt: {
    '{number}': '/cue/{cue_number}/loadActionAt {number}',
  },
  loadAndSetPlayhead: '/cue/{cue_number}/loadAndSetPlayhead',
  maxTimeInCueSequence: '/cue/{cue_number}/maxTimeInCueSequence',
  name: {
    '{string}': '/cue/{cue_number}/name {string}',
  },
  notes: {
    '{string}': '/cue/{cue_number}/notes {string}',
  },
  number: {
    '{string}': '/cue/{cue_number}/number {string}',
  },
  hardPause: '/cue/{cue_number}/hardPause',
  togglePause: '/cue/{cue_number}/togglePause',
  parent: '/cue/{cue_number}/parent',
  preview: '/cue/{cue_number}/preview',
  preWait: {
    '{number}': '/cue/{cue_number}/preWait {number}',
  },
  preWaitElapsed: '/cue/{cue_number}/preWaitElapsed',
  percentPreWaitElapsed: '/cue/{cue_number}/percentPreWaitElapsed',
  postWait: {
    '{number}': '/cue/{cue_number}/postWait {number}',
  },
  postWaitElapsed: '/cue/{cue_number}/postWaitElapsed',
  percentPostWaitElapsed: '/cue/{cue_number}/percentPostWaitElapsed',
  secondTriggerAction: {
    '{number}': '/cue/{cue_number}/secondTriggerAction {number}',
  },
  secondTriggerOnRelease: {
    '{number}': '/cue/{cue_number}/secondTriggerOnRelease {number}',
  },
  soloCueInTime: {
    '{number}': '/cue/{cue_number}/soloCueInTime {number}',
  },
  start: '/cue/{cue_number}/start',
  startAndAutoloadNext: '/cue/{cue_number}/startAndAutoloadNext',
  type: '/cue/{cue_number}/type',
  uniqueID: '/cue/{cue_number}/uniqueID',
  valuesForKeys: {
    '{json_string}': '/cue/{cue_number}/valuesForKeys {json_string}',
  },
  valuesForKeysWithArguments: {
    '{json_string}':
      '/cue/{cue_number}/valuesForKeysWithArguments {json_string}',
  },
  cartColumns: '/cue/{cue_number}/cartColumns',
  cartRows: '/cue/{cue_number}/cartRows',
  moveCartCue: {
    '{child}': {
      '{row}': {
        '{column}': '/cue/{cue_number}/moveCartCue/{child} {row} {column}',
      },
    },
  },
  '{string}': '/cue/{cue_number}/playhead {string}',
  doFade: {
    '{number}': '/cue/{cue_number}/doFade {number}',
  },
  doPitchShift: {
    '{number}': '/cue/{cue_number}/doPitchShift {number}',
  },
  endTime: {
    '{number}': '/cue/{cue_number}/endTime {number}',
  },
  gang: {
    '{inChannel}': {
      '{outChannel}': {
        '{gang}': '/cue/{cue_number}/gang {inChannel} {outChannel} {gang}',
      },
    },
  },
  '{inChannel}': {
    '{outChannel}': {
      '{gang}': '/cue/{cue_number}/gang/{inChannel}/{outChannel} {gang}',
    },
  },
  infiniteLoop: {
    '{number}': '/cue/{cue_number}/infiniteLoop {number}',
  },
  level: {
    '{inChannel}': {
      '{outChannel}': {
        '{decibel}':
          '/cue/{cue_number}/level {inChannel} {outChannel} {decibel}',
      },
    },
  },
  '{outChannel}': {
    '{decibel}': '/cue/{cue_number}/level/{inChannel}/{outChannel} {decibel}',
  },
  levels: '/cue/{cue_number}/levels',
  liveAverageLevel: {
    '{outputChannel}': {
      '{low}': {
        '{high}':
          '/cue/{cue_number}/liveAverageLevel/{outputChannel} {low} {high}',
      },
    },
  },
  lockFadeToCue: {
    '{number}': '/cue/{cue_number}/lockFadeToCue {number}',
  },
  numChannelsIn: '/cue/{cue_number}/numChannelsIn',
  patch: {
    '{number}': '/cue/{cue_number}/patch {number}',
  },
  patchList: '/cue/{cue_number}/patchList',
  playCount: {
    '{number}': '/cue/{cue_number}/playCount {number}',
  },
  rate: {
    '{number}': '/cue/{cue_number}/rate {number}',
  },
  liveRate: {
    '{number}': '/cue/{cue_number}/liveRate {number}',
  },
  setDefaultLevels: '/cue/{cue_number}/setDefaultLevels',
  setSilentLevels: '/cue/{cue_number}/setSilentLevels',
  sliceMarkers: '/cue/{cue_number}/sliceMarkers',
  sliceMarker: {
    '{index}': '/cue/{cue_number}/sliceMarker {index}',
  },
  '{index}': '/cue/{cue_number}/sliceMarker/{index}',
  time: '/cue/{cue_number}/sliceMarker/{index}/time',
  addSliceMarker: {
    '{time}': {
      '{play_count}': '/cue/{cue_number}/addSliceMarker {time} {play_count}',
    },
  },
  deleteSliceMarker: {
    '{index}': '/cue/{cue_number}/deleteSliceMarker {index}',
  },
  deleteSliceMarkers: '/cue/{cue_number}/deleteSliceMarkers',
  '{time}': {
    '{play_count}': '/cue/{cue_number}/sliceMarker {index} {time} {play_count}',
  },
  '{play_count}': '/cue/{cue_number}/sliceMarker/{index} {time} {play_count}',
  '+': {
    '{delta}': '/cue/{cue_number}/sliceMarker/{index}/time/+ {delta}',
  },
  '-': {
    '{delta}': '/cue/{cue_number}/sliceMarker/{index}/time/- {delta}',
  },
  '{delta}': '/cue/{cue_number}/sliceMarkers/time/+ {delta}',
  lastSlicePlayCount: {
    '{play_count}': '/cue/{cue_number}/lastSlicePlayCount {play_count}',
  },
  lastSliceInfiniteLoop: {
    '{number}': '/cue/{cue_number}/lastSliceInfiniteLoop {number}',
  },
  sliderLevel: {
    '{channel}': {
      '{decibel}': '/cue/{cue_number}/sliderLevel {channel} {decibel}',
    },
  },
  '{channel}': {
    '{decibel}': '/cue/{cue_number}/sliderLevel/{channel} {decibel}',
  },
  sliderLevels: '/cue/{cue_number}/sliderLevels',
  startTime: {
    '{number}': '/cue/{cue_number}/startTime {number}',
  },
  channelOffset: '/cue/{cue_number}/channelOffset',
  channels: {
    '{number}': '/cue/{cue_number}/channels {number}',
  },
  cueSize: '/cue/{cue_number}/cueSize',
  doEffect: {
    '{number}': '/cue/{cue_number}/doEffect {number}',
  },
  effectIndex: {
    '{number}': '/cue/{cue_number}/effectIndex {number}',
  },
  effectSet: {
    '{parameter}': {
      '{value}': '/cue/{cue_number}/effectSet {parameter} {value}',
    },
  },
  liveEffectSet: {
    '{parameter}': {
      '{value}': '/cue/{cue_number}/liveEffectSet {parameter} {value}',
    },
  },
  fullSurface: {
    '{number}': '/cue/{cue_number}/fullSurface {number}',
  },
  '{gang}': '/cue/{cue_number}/gang {inChannel} {outChannel} {gang}',
  holdLastFrame: {
    '{number}': '/cue/{cue_number}/holdLastFrame {number}',
  },
  layer: {
    '{number}': '/cue/{cue_number}/layer {number}',
  },
  '{decibel}': '/cue/{cue_number}/level {inChannel} {outChannel} {decibel}',
  '{outputChannel}': {
    '{low}': {
      '{high}':
        '/cue/{cue_number}/liveAverageLevel/{outputChannel} {low} {high}',
    },
  },
  opacity: {
    '{number}': '/cue/{cue_number}/opacity {number}',
  },
  originX: {
    '{number}': '/cue/{cue_number}/originX {number}',
  },
  originY: {
    '{number}': '/cue/{cue_number}/originY {number}',
  },
  '{x}': {
    '{y}': '/cue/{cue_number}/origin {x} {y}',
  },
  preserveAspectRatio: {
    '{number}': '/cue/{cue_number}/preserveAspectRatio {number}',
  },
  quaternion: {
    '{number': {
      number: {
        number: {
          'number}':
            '/cue/{cue_number}/quaternion {number number number number}',
        },
      },
    },
  },
  resetRotation: '/cue/{cue_number}/resetRotation',
  rotateX: {
    '{number}': '/cue/{cue_number}/rotateX {number}',
  },
  rotateY: {
    '{number}': '/cue/{cue_number}/rotateY {number}',
  },
  rotateZ: {
    '{number}': '/cue/{cue_number}/rotateZ {number}',
  },
  liveRotation: {
    Xaxis: {
      '{number}': '/cue/{cue_number}/liveRotation/Xaxis {number}',
    },
  },
  Yaxis: {
    '{number}': '/cue/{cue_number}/liveRotation/Yaxis {number}',
  },
  Zaxis: {
    '{number}': '/cue/{cue_number}/liveRotation/Zaxis {number}',
  },
  x: {
    '{number}': '/cue/{cue_number}/liveRotation/x {number}',
  },
  y: {
    '{number}': '/cue/{cue_number}/liveRotation/y {number}',
  },
  z: {
    '{number}': '/cue/{cue_number}/liveRotation/z {number}',
  },
  scaleX: {
    '{number}': '/cue/{cue_number}/scaleX {number}',
  },
  liveScaleX: {
    '{number}': '/cue/{cue_number}/liveScaleX {number}',
  },
  scaleY: {
    '{number}': '/cue/{cue_number}/scaleY {number}',
  },
  liveScaleY: {
    '{number}': '/cue/{cue_number}/liveScaleY {number}',
  },
  scale: {
    '{x}': {
      '{y}': '/cue/{cue_number}/scale {x} {y}',
    },
  },
  liveScale: {
    '{x}': {
      '{y}': '/cue/{cue_number}/liveScale {x} {y}',
    },
  },
  '{cue_number}sliceMarkers': '/cue/{cue_number}sliceMarkers',
  surfaceID: {
    '{number}': '/cue/{cue_number}/surfaceID {number}',
  },
  surfaceList: '/cue/{cue_number}/surfaceList',
  surfaceName: {
    '{string}': '/cue/{cue_number}/surfaceName {string}',
  },
  surfaceSize: '/cue/{cue_number}/surfaceSize',
  translationX: {
    '{number}': '/cue/{cue_number}/translationX {number}',
  },
  liveTranslationX: {
    '{number}': '/cue/{cue_number}/liveTranslationX {number}',
  },
  translationY: {
    '{number}': '/cue/{cue_number}/translationY {number}',
  },
  liveTranslationY: {
    '{number}': '/cue/{cue_number}/liveTranslationY {number}',
  },
  translation: {
    '{x}': {
      '{y}': '/cue/{cue_number}/translation {x} {y}',
    },
  },
  liveTranslation: {
    '{x}': {
      '{y}': '/cue/{cue_number}/liveTranslation {x} {y}',
    },
  },
  cameraPatch: '/cue/{cue_number}/cameraPatch',
  fixedWidth: {
    '{number}': '/cue/{cue_number}/fixedWidth {number}',
  },
  text: {
    '{string}': '/cue/{cue_number}/text {string}',
  },
  liveText: {
    '{string}': '/cue/{cue_number}/liveText {string}',
  },
  format: {
    '{json_string}': '/cue/{cue_number}/text/format {json_string}',
  },
  alignment: {
    '{alignment}': '/cue/{cue_number}/text/format/alignment {alignment}',
  },
  fontFamily: '/cue/{cue_number}/text/format/fontFamily',
  fontStyle: '/cue/{cue_number}/text/format/fontStyle',
  fontFamilyAndStyle: {
    '{family}': {
      '{style}':
        '/cue/{cue_number}/text/format/fontFamilyAndStyle {family} {style}',
    },
  },
  fontName: {
    '{name}': '/cue/{cue_number}/text/format/fontName {name}',
  },
  fontSize: {
    '{number}': '/cue/{cue_number}/text/format/fontSize {number}',
  },
  lineSpacing: {
    '{number}': '/cue/{cue_number}/text/format/lineSpacing {number}',
  },
  color: {
    '{red}': {
      '{green}': {
        '{blue}': {
          '{alpha}':
            '/cue/{cue_number}/text/format/color {red} {green} {blue} {alpha}',
        },
      },
    },
  },
  backgroundColor: {
    '{red}': {
      '{green}': {
        '{blue}': {
          '{alpha}':
            '/cue/{cue_number}/text/format/backgroundColor {red} {green} {blue} {alpha}',
        },
      },
    },
  },
  strikethroughColor: {
    '{red}': {
      '{green}': {
        '{blue}': {
          '{alpha}':
            '/cue/{cue_number}/text/format/strikethroughColor {red} {green} {blue} {alpha}',
        },
      },
    },
  },
  underlineColor: {
    '{red}': {
      '{green}': {
        '{blue}': {
          '{alpha}':
            '/cue/{cue_number}/text/format/underlineColor {red} {green} {blue} {alpha}',
        },
      },
    },
  },
  strikethroughStyle: {
    '{style}': '/cue/{cue_number}/text/format/strikethroughStyle {style}',
  },
  underlineStyle: {
    '{style}': '/cue/{cue_number}/text/format/underlineStyle {style}',
  },
  outputSize: '/cue/{cue_number}/text/outputSize',
  alwaysCollate: {
    '{number}': '/cue/{cue_number}/alwaysCollate {number}',
  },
  collateAndStart: '/cue/{cue_number}/collateAndStart',
  lightCommandText: {
    '{string}': '/cue/{cue_number}/lightCommandText {string}',
  },
  prune: '/cue/{cue_number}/prune',
  pruneCommands: '/cue/{cue_number}/pruneCommands',
  removeLightCommandsMatching: {
    '{string}': '/cue/{cue_number}/removeLightCommandsMatching {string}',
  },
  replaceLightCommand: {
    '{old_command}': {
      '{new_command}':
        '/cue/{cue_number}/replaceLightCommand {old_command} {new_command}',
    },
  },
  safeSort: '/cue/{cue_number}/safeSort',
  safeSortCommands: '/cue/{cue_number}/safeSortCommands',
  '{setting}': '/cue/{cue_number}/setLight {string} {setting}',
  updateLightCommand: {
    '{string}': {
      '{number}': '/cue/{cue_number}/updateLightCommand {string} {number}',
    },
  },
  doOpacity: {
    '{number}': '/cue/{cue_number}/doOpacity {number}',
  },
  doRate: {
    '{number}': '/cue/{cue_number}/doRate {number}',
  },
  doRotation: {
    '{number}': '/cue/{cue_number}/doRotation {number}',
  },
  doScale: {
    '{number}': '/cue/{cue_number}/doScale {number}',
  },
  doTranslation: {
    '{number}': '/cue/{cue_number}/doTranslation {number}',
  },
  inChannel: {
    outChannel: {
      '{gang}': '/cue/{cue_number}/gang inChannel outChannel {gang}',
    },
  },
  outChannel: {
    '{gang}': '/cue/{cue_number}/gang/inChannel/outChannel {gang}',
  },
  geoMode: {
    '{number}': '/cue/{cue_number}/geoMode {number}',
  },
  '{number': {
    number: {
      number: {
        'number}': '/cue/{cue_number}/quaternion {number number number number}',
      },
    },
  },
  rotation: {
    '{number}': '/cue/{cue_number}/rotation {number}',
  },
  rotationType: {
    '{number}': '/cue/{cue_number}/rotationType {number}',
  },
  '{y}': '/cue/{cue_number}/scale {x} {y}',
  setLevelsFromTarget: '/cue/{cue_number}/setLevelsFromTarget',
  setGeometryFromTarget: '/cue/{cue_number}/setGeometryFromTarget',
  stopTargetWhenDone: {
    '{number}': '/cue/{cue_number}/stopTargetWhenDone {number}',
  },
  willFade: {
    '{row}': {
      '{column}': {
        '{number}': '/cue/{cue_number}/willFade {row} {column} {number}',
      },
    },
  },
  customString: {
    '{string}': '/cue/{cue_number}/customString {string}',
  },
  messageType: {
    '{number}': '/cue/{cue_number}/messageType {number}',
  },
  qlabCommand: {
    '{number}': '/cue/{cue_number}/qlabCommand {number}',
  },
  qlabCueNumber: {
    '{string}': '/cue/{cue_number}/qlabCueNumber {string}',
  },
  qlabCueParameters: {
    '{string}': '/cue/{cue_number}/qlabCueParameters {string}',
  },
  rawString: {
    '{string}': '/cue/{cue_number}/rawString {string}',
  },
  udpString: {
    '{string}': '/cue/{cue_number}/udpString {string}',
  },
  byte1: {
    '{number}': '/cue/{cue_number}/byte1 {number}',
  },
  byte2: {
    '{number}': '/cue/{cue_number}/byte2 {number}',
  },
  byteCombo: {
    '{number}': '/cue/{cue_number}/byteCombo {number}',
  },
  channel: {
    '{number}': '/cue/{cue_number}/channel {number}',
  },
  command: {
    '{number}': '/cue/{cue_number}/command {number}',
  },
  commandFormat: {
    '{number}': '/cue/{cue_number}/commandFormat {number}',
  },
  controlNumber: {
    '{number}': '/cue/{cue_number}/controlNumber {number}',
  },
  controlValue: {
    '{number}': '/cue/{cue_number}/controlValue {number}',
  },
  deviceID: {
    '{number}': '/cue/{cue_number}/deviceID {number}',
  },
  endValue: {
    '{number}': '/cue/{cue_number}/endValue {number}',
  },
  hours: {
    '{number}': '/cue/{cue_number}/hours {number}',
  },
  minutes: {
    '{number}': '/cue/{cue_number}/minutes {number}',
  },
  seconds: {
    '{number}': '/cue/{cue_number}/seconds {number}',
  },
  frames: {
    '{number}': '/cue/{cue_number}/frames {number}',
  },
  subframes: {
    '{number}': '/cue/{cue_number}/subframes {number}',
  },
  macro: {
    '{number}': '/cue/{cue_number}/macro {number}',
  },
  qList: {
    '{string}': '/cue/{cue_number}/qList {string}',
  },
  qNumber: {
    '{string}': '/cue/{cue_number}/qNumber {string}',
  },
  qPath: {
    '{string}': '/cue/{cue_number}/qPath {string}',
  },
  status: {
    '{number}': '/cue/{cue_number}/status {number}',
  },
  timecodeFormat: {
    '{number}': '/cue/{cue_number}/timecodeFormat {number}',
  },
  timecodeString: {
    '{string}': '/cue/{cue_number}/timecodeString {string}',
  },
  startNextCueWhenSliceEnds: {
    '{number}': '/cue/{cue_number}/startNextCueWhenSliceEnds {number}',
  },
  stopTargetWhenSliceEnds: {
    '{number}': '/cue/{cue_number}/stopTargetWhenSliceEnds {number}',
  },
  compileSource: '/cue/{cue_number}/compileSource',
  scriptSource: '/cue/{cue_number}/scriptSource',
}
