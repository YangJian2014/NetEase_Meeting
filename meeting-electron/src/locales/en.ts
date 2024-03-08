const [meeting, host, coHost, attendee] = [
  'meeting',
  'HOST',
  'CO-HOST',
  'Participants',
]

export default {
  meeting: 'Meeting',
  host,
  coHost,
  attendee,
  appName: 'NetEase Meeting', // 顶部UI展示
  joinMeeting: `Join`,
  leaveMeeting: `Leave`,
  quitMeeting: `End`,
  finish: 'End',
  leave: 'Leave',
  hostExitTips: `Are you sure you want to end ${meeting}？`,
  leaveTips: `Are you sure you want to leave ${meeting}？`,
  changePresenterTips: `Transfer the host role?`,
  networkUnavailableCloseFail: `Network error, failed to end ${meeting}`,
  cancel: 'Cancel',
  ok: 'OK',
  beauty: `Beauty`,
  beautyLevel: `Level`,
  joiningTips: `Joining ${meeting}...`,
  close: `Close`,
  open: `Open`,
  networkUnavailable: `Network connection failed, try again later！`,
  networkUnavailableCheck: `Network connection failed, check your network connectivity！`,
  memberListTitle: `${attendee}`, // 会议成员列表标题
  joinMeetingFail: `Failed to join ${meeting}`,
  reJoinMeetingFail: `Failed to rejoin ${meeting}`,
  youBecomeTheHost: `You are assigned ${host}`,
  youBecomeTheCoHost: `You are assigned ${coHost}`,
  youBesetTheCoHost: `You are assigned ${coHost} `,
  becomeTheCoHost: `You are assigned ${coHost}`,
  looseTheCoHost: `You are unassigned ${coHost}`,
  getVideoFocus: 'You are assigned active speaker',
  looseVideoFocus: 'You are unassigned active speaker',
  muteAudioAll: 'Mute All',
  muteAudioAllDialogTips: 'Mute all participants',
  muteAllAudioTip: `Allow ${attendee} to unmute`,
  muteAllAudioSuccess: 'You have muted all participants',
  meetingHostMuteAllAudio: `${host} muted all participants`,
  muteAllAudioFail: 'Failed to mute all',
  unMuteAudioAll: 'Unmute All',
  unMuteAllAudioSuccess: 'All participants are unmuted',
  unMuteAllAudioFail: 'Failed to unmute all participants',
  leaveByHost: `${host} removed your from the meeting`,
  leaveBySelf: `You have logged in on another device`,
  muteVideoAll: 'All cameras off',
  muteVideoAllDialogTips:
    'All and new participants will have videos turned off',
  muteAllVideoTip: `Allow ${attendee} to turn on videos`,
  muteAllVideoSuccess: 'You have turned off videos of all participants',
  meetingHostMuteAllVideo: `${host} turned off all videos`,
  muteAllVideoFail: 'Failed to turn off all videos',
  unMuteVideoAll: 'Turn on all videos',
  unMuteAllVideoSuccess: 'All videos are turned on',
  unMuteAllVideoFail: 'Failed to turn on all videos',
  muteVideoAndAudio: 'Audio and video off',
  unmuteVideoAndAudio: 'Audio and video on',
  hostAgreeVideoHandsUp: `${host} has turned on your video`,
  muteAudio: 'Mute',
  unMuteAudio: 'Unmute',
  muteVideo: 'Stop Video',
  unMuteVideo: 'Start Video',
  unScreenShare: 'Stop Share',
  pauseScreenShare: 'Sharing is paused. Please move the window to the top.',
  shareComputerAudio: 'Share computer audio',
  hostStopShare: `${host} stopped your sharing`,
  focusVideo: 'Assign active speaker',
  unFocusVideo: 'Unassign active speaker',
  handOverHost: `Transfer ${host}`,
  handSetCoHost: `Assign ${coHost}`,
  handUnSetCoHost: `Unassign ${coHost}`,
  handOverHostTips: `Transfer ${host}`,
  removeMember: 'Remove',
  removeMemberTips: 'Remove member',
  yes: 'Yes',
  no: 'No',
  cannotRemoveSelf: 'You cannot remove yourself',
  muteAudioFail: 'Failed to mute',
  unMuteAudioFail: 'Failed to unmute',
  muteVideoFail: 'Failed to stop video',
  unMuteVideoFail: 'Failed to open video',
  focusVideoFail: 'Failed to assign active speaker',
  unFocusVideoFail: 'Failed to unassign active speaker',
  putMemberHandsDownFail: 'Failed to lower hand',
  handOverHostFail: `Failed to transfer ${host}`,
  removeMemberSuccess: 'Member removed',
  removeMemberFail: 'Failed to remove the member',
  save: 'Save',
  done: 'Complete',
  notify: 'Notification',
  hostKickedYou: `You are removed by ${host} or switched to another device, you have left ${meeting}`,
  sure: 'OK',
  // forbiddenByHostVideo: `${host} stopped your video`,
  openCamera: 'Turn on camera',
  hostOpenCameraTips: `${host} requests to turn on your camera. Turn on the camera?`,
  openMicro: 'Unmute your audio',
  hostOpenMicroTips: `${host} requests to unmute your microphone. Unmute the microphone?`,
  meetingHostMuteVideo: 'Your video is turned off',
  meetingHostMuteAudio: 'You are muted',
  screenShare: 'ShareScreen',
  screenShareTips: 'All content on your screen is being captured.',
  shareOverLimit: 'Someone is sharing screen. You cannot share your screen',
  screenShareStartFail: 'Failed to start screen sharing',
  hasWhiteBoardShare:
    'Screen cannot be shared while whiteboard is being shared',
  hasScreenShareShare:
    'Whiteboard cannot be shared while screen is being shared',
  screenShareStopFail: 'Failed to stop screen sharing',
  whiteBoard: 'Whiteboard',
  closeWhiteBoard: 'Stop Whiteboard',
  whiteBoardShareStopFail: 'Failed to stop whiteboard',
  whiteBoardShareStartFail: 'Failed to start whiteboard',
  functionalityLimitedByTheNumberOfPeople:
    'The maximum number of concurrent users of this feature has been reached',
  noScreenSharePermission: 'You do not have permission to share screen',
  screenShareLocalTips: 'Share Screen',
  screenShareSuffix: ' screen',
  screenShareInteractionTip: 'Pinch with 2 fingers to adjust zoom',
  whiteBoardInteractionTip: 'You are granted the whiteboard permission',
  undoWhiteBoardInteractionTip: 'You are revoked the whiteboard permission',
  speakingPrefix: 'Speaking: ',
  screenShareModeForbiddenOp:
    'Turning on or off video during screen sharing is not allowed',
  me: 'Me',
  audioStateError:
    'The device is being used by another application. Try again later',
  lockMeeting: `Lock ${meeting}`,
  lockMeetingByHost: `Meeting locked, ${attendee} is unable to join ${meeting}`,
  lockMeetingByHostFail: `Meeting failed to be locked`,
  unLockMeetingByHost: `Meeting is unlocked, ${attendee} is able to join ${meeting}`,
  unLockMeetingByHostFail: `Meeting failed to be unlocked`,
  coHostLimit: `${coHost} limit reached`,
  // send: 'Send',
  // inputMessageHint: 'Enter...',
  // newMessage: 'New message',
  // chatRoomMessageSendFail: 'Failed to send the message',
  // cannotSendBlankLetter: 'Space characters are not supported',
  chat: 'Chat',
  more: 'More',
  // searchMember: 'Search',
  // enterChatRoomFail: 'Failed to join the chat room!',
  meetingPassword: `Password`,
  inputMeetingPassword: `Enter ${meeting} password`,
  wrongPassword: 'Incorrect password',
  headsetState: 'You are using headset',
  meetingId: `Meeting ID`,
  meetingNumber: `Meeting Number`,
  shortMeetingId: `Meeting short code`,
  copy: 'Copy invitation',
  copyLink: 'Copy',
  meetingUrl: 'Meeting URL',
  copySuccess: 'Copied',
  defaultMeetingInfoTitle: `Invite your to join the meeting`,
  meetingInfoDesc: `Meeting is being encrypted and protected`,
  muteAllAudioHandsUpTips: `${host} has muted all participants. You can raise your hand`,
  muteAllVideoHandsUpTips: `${host} has turned off all videos. You can raise your hand`,
  handsUpApply: 'Raise hand',
  cancelHandsUp: 'Cancel',
  handsUpDown: 'Lower hand',
  inHandsUp: 'Raising hand',
  handsUpFail: 'Raising hand failed',
  handsUpSuccessAlready: `You are raising hand, waiting for ${host} response`,
  handsUpSuccess: `You are raising hand, waiting for ${host} response`,
  cancelHandsUpFail: 'Failed to lower hand',
  hostRejectAudioHandsUp: `${host} rejected your request`,
  hostAgreeAudioHandsUp: `${host} unmuted your audio. You can speak now`,
  audioAlreadyOpen: 'You are unmuted, No hand up is required',
  whiteBoardInteract: 'Grant the whiteboard permission',
  whiteBoardInteractFail: 'Failed to grant the whiteboard permission',
  undoWhiteBoardInteract: 'Revoke the whiteboard permission',
  undoWhiteBoardInteractFail: 'Failed to revoke the whiteboard permission',
  sip: 'SIP Call',
  sipTip: 'SIP',
  live: 'Live',
  liveUrl: 'Live URL',
  liveLink: 'Live link',
  enableLivePassword: 'Set password',
  enableChat: 'Enable Chat',
  enableChatTip:
    'Messaging in the meeting room and live stream is transparent if enabled',
  liveView:
    'Live View(You will appear in the list if your camera is turned on)',
  livePreview: 'Preview',
  liveViewPageBackgroundImage: 'View page background image',
  liveCoverPicture: 'Live cover image',
  liveCoverPictureTip: '16:9 , no more than 5 M',
  liveSelectTip: 'Select Live from the left',
  livePasswordTip: 'Enter a 6-digit password',
  liveStatusChange: 'Live status has changed',
  liveUpdateSetting: 'Update',
  pleaseClick: 'Click',
  refreshLiveLayout: 'Refresh layout',
  onlyEmployeesAllow: 'Only staff members can join',
  onlyEmployeesAllowTip:
    'Non-staff Participants are unable to view the live if enabled',
  living: 'Streaming',
  meetingLive: `Meeting Live`,
  meetingLiveTitle: 'Title',
  meetingLiveUrl: 'Live URL',
  pleaseInputLivePassword: 'Enter live code',
  pleaseInputLivePasswordHint: 'Enter a 6-digit code',
  liveInteraction: 'Interaction',
  liveInteractionTips: `If enabled, messaging in ${meeting} and live stream is visible`,
  liveViewSetting: 'View Settings',
  liveViewSettingChange: '主播发生变更',
  liveViewPreviewTips: 'Live streaming preview',
  liveViewPreviewDesc: 'Select a view layout',
  liveStart: 'Start',
  liveUpdate: 'Update',
  liveStop: 'Stop',
  liveGalleryView: 'Gallery View',
  liveFocusView: 'Focus View',
  shareView: 'Screen sharing view',
  liveChooseView: 'Select',
  liveChooseCountTips: `Select ${attendee} as HOST, up to 4 hosts are allowed`,
  liveStartFail: 'Failed to start live streaming, try again later',
  liveStartSuccess: 'Live streaming started',
  livePickerCount: 'Selected',
  livePickerCountPrefix: 'people',
  liveUpdateFail: 'Live update failed, try again later',
  liveUpdateSuccess: 'Live update succeeded',
  liveNeedMemberHint: 'Please select members again',
  liveStopFail: 'Stopping live streaming failed, try again later',
  liveStopSuccess: 'Live streaming stopped',
  livePassword: 'Live code',
  liveSubjectTip: 'Live stream subject cannot be empty',
  liveTitlePlaceholder: 'Enter a title',
  memberNotInMeeting: `Participant has not joined ${meeting}`,
  cannotSubscribeSelfAudio: 'You cannot subscribe to your own audio',
  partMemberNotInMeeting: `Some participants have not joined ${meeting}`,
  commonTitle: 'Tip',
  inviteBtn: 'Invitation',
  sipBtn: 'SIP',
  inviteSubject: 'Title',
  inviteTime: 'Time',
  openCameraFailByHost:
    'Your video is turned off. You cannot enable your video',
  noRename: 'Rename',
  addSipMember: 'Add Participants', // 改名按钮
  pleaseInputRename: 'Enter a new name',
  placeholderSipMember: 'SIP Number',
  placeholderSipAddr: 'SIP Address',
  reNameSuccessToast: 'Nickname edited',
  reNameFailureToast: 'Nickname edited failure',
  closeCommonTips: 'Close',
  closeWhiteShareTips: ' shared whiteboard？',
  closeScreenShareTips: ' shared screen？',
  galleryBtn: 'Layout',
  layout: 'Layout',
  galleryLayout: 'Gallery mode',
  speakerLayout: 'Speaker mode',
  galleryLayoutGrid: 'Grid',
  speakerLayoutTop: 'Top list',
  speakerLayoutRight: 'Right list',
  memberListBtnForHost: 'Participants',
  memberListBtnForNormal: 'Participants',
  moreBtn: 'More',
  hostEndMeetingToast: 'Host ended the meeting',
  UNKNOWN: 'Unknown error',
  LOGIN_STATE_ERROR: 'Account error',
  CLOSE_BY_BACKEND: 'Room destroyed',
  ALL_MEMBERS_OUT: 'All participants leave the room',
  END_OF_LIFE: 'Room expired',
  CLOSE_BY_MEMBER: 'Room closed',
  KICK_OUT: `${host} removed you from the meeting`,
  SYNC_DATA_ERROR: 'Sync data error',
  LEAVE_BY_SELF: 'You left the room',
  kICK_BY_SELF: 'You have logged in on another device',
  OTHER: 'Other',
  hostCloseWhiteShareToast: 'Host has closed your white board',
  enterMeetingToast: 'Join the meeting',
  cancelHandUpTips: 'Are you sure you want to lower hand?',
  cancelHandUpSuccess: ' Hand lowered',
  meetingRecording: 'Recording',
  securityInfo: 'The meeting is being encrypted and protected',
  speaking: 'Speaking',
  notJoinedMeeting: 'Participant has not joined the meeting',
  disconnected: 'Disconnected, trying to reconnect…',
  unmute: 'Unmute',
  searchName: 'Enter a name',
  lowerHand: 'Lower hand',
  speaker: 'Speaker',
  testSpeaker: 'Test speaker',
  outputLevel: 'Output level',
  outputVolume: 'Output volume',
  microphone: 'Microphone',
  testMicrophone: 'Test microphone',
  selectSpeaker: 'Select speaker',
  selectMicrophone: 'Select microphone',
  selectVideoSource: 'Select video source',
  camera: 'Camera',
  general: 'General',
  settings: 'Settings',
  internalOnly: 'Internal Use Only',
  meetingExist: 'channel already exists',
  joinTheExistMeeting:
    'This channel already exists, please confirm whether to join directly?',
  notSupportScreenShareChange:
    'Switching views is not currently supported when sharing the screen',
  notSupportWhiteboardShareChange:
    'Switching views is not supported when sharing a whiteboard',
  notSupportOperateLayout:
    'Screen sharing is in progress, layout cannot be manipulated',
  screenShareLimit: "Can't share screen",
  cancelScreenShare: 'Disable screen sharing',
  screenShareFailed: 'Screen sharing failed',
  paramsError: 'parameter missing',
  leaveFailed: 'Failed to leave meeting',
  endFailed: 'Failed to close meeting',
  setSIPFailed: "Can't set as host",
  requestFailed: 'Request failed',
  screenShareNotAllow: 'Somebady is already sharing',
  closeMemberWhiteboard: 'Close shared whiteboard: ',
  closeMemberScreenShare: 'close screen sharing: ',
  changeFailed: 'handover failed',
  removeFailed: 'removal failed',
  closeWhiteFailed: 'failed to close whiteboard',
  currentMicDevice: 'current Mic Device',
  currentSpeakerDevice: 'current speaker device',
  currentCameraDevice: 'current video device',
  operateFailed: 'operation failed',
  setVideoFailed: 'Failed to set video',
  video: 'Video',
  shortId: `Short ID`, // 会议短号
  networkStateGood: 'Network connection is good',
  networkStateGeneral: 'Network connection is fair',
  networkStatePoor: 'Network connection is poor',
  latency: 'Latency',
  packetLossRate: 'Packet loss rate',
  answeringPhone: 'Answering the phone now',
  chatRoomTitle: 'message',
  disconnectAudio: 'Disconnect audio',
  connectAudio: 'Connect audio',
  disconnectAudioFailed: 'Disconnect audio failed',
  connectAudioFailed: 'Connect audio failed',
  connectAudioShort: 'Connect audio',
  audioSetting: 'Audio Settings',
  videoSetting: 'Video Settings',
  beautySetting: 'Beauty and virtual background Settings',
  imageMsg: '[Image]',
  fileMsg: '[File]',
  internal: 'Internal',
  openVideoDisable: 'Your video is turned off',
  endMeetingTip: 'Remaining',
  min: 'minutes',
  networkAbnormalityAndCheck:
    'Network error, please check your network connection and rejoin the meeting.',
  networkAbnormality: 'Network abnormality',
  networkDisconnected:
    'Network disconnected, please check your network status or try to rejoin.',
  rejoin: 'Rejoining',
  audioMuteOpenTips:
    'Unable to use the microphone. It has been detected that you are speaking. If you wish to speak, please click the "Unmute" button and then speak again.',
  networkError: 'Network Error',
  startCloudRecord: 'Cloud recording',
  stopCloudRecord: 'Stop recording',
  recording: 'Recording',
  isStartCloudRecord: 'Are you sure you want to start a cloud recording?',
  startRecordTip:
    'After the recording starts, all attendees will be informed and the meeting audio, video and shared screen view will be recorded to the cloud',
  startRecordTipNoNotify:
    'After the recording starts, the meeting audio, video and shared screen view will be recorded to the cloud',
  beingMeetingRecorded: 'This meeting is being recorded',
  startRecordTipByMember:
    'The host has started a cloud recording and the meeting creator will receive the cloud recording file.You can contact the creator for the cloud recording file.',
  agreeInRecordMeeting: 'By staying in the meeting,you agree to the recording.',
  gotIt: 'Got it',
  startingRecording: 'Starting recording',
  endCloudRecording: 'End Cloud Recording',
  syncRecordFileAfterMeetingEnd:
    "Go to 'Historical Meeting - Meeting Details' to check recorded files after meeting.",
  cloudRecordingHasEnded: 'Cloud recording has ended',
  viewingLinkAfterMeetingEnd:
    'You can contact the meeting creator after the meeting to obtain a viewing link',
  meetingDetails: 'Meeting Details',
  startTime: 'Start Time',
  creator: 'Creator',
  cloudRecordingLink: 'Cloud recording link',
  generatingCloudRecordingFile: 'Generating cloud recording file',
  stopRecordFailed: '停止录制失败',
  startRecordFailed: '开启录制失败',
  messageRecalled: 'Message recalled',
  microphonePermission: 'Grant microphone Permission',
  microphonePermissionTips:
    'Due to the security control of macOS system, You must grant the system microphone permission before enabling the microphone',
  microphonePermissionTipsStep:
    'Enable the access permission in System Settings > Privacy & Security',
  cameraPermission: 'Camera permission',
  cameraPermissionTips:
    'Due to the security control of macOS system, You must grant the system camera permission before enabling the camera',
  cameraPermissionTipsStep:
    'Enable the access permission in System Settings > Privacy & Security',
  openSystemPreferences: 'System Preferences',
  meetingTime1Tips: 'The meeting will close in 1 minutes',
  meetingTime5Tips: 'The meeting will close in 5 minutes',
  meetingTime10Tips: 'The meeting will close in 10 minutes',
  alreadyInMeeting: 'Already in the meeting',
  debug: 'debug',
  admit: 'Admit',
  attendees: 'Attendees',
  notJoined: 'Not joined',
  inMeeting: 'In meeting',
  confirmLeave: 'Are you sure you want to leave this meeting?',
  waitingForHost: 'Please wait. The host will let you into the meeting soon',
  closeAutomatically: 'Click OK and the page closes automatically',
  removedFromMeeting: 'Removed from the meeting',
  removeFromMeetingByHost: 'The host has removed you from the meeting',
  meetingWatermark: 'Meeting Watermark',
  waitingRoom: 'Waiting Room',
  meetingManagement: 'Meeting Management',
  security: 'Security',
  securitySettings: 'Security settings',
  waitingMemberCount1: '',
  waitingMemberCount2: 'attendee(s) waiting',
  notRemindMeAgain: "Don't Remind Me Again",
  viewMessage: 'View Message',
  closeWaitingRoomTip:
    'After the waiting room closes, new members will join the meeting directly',
  closeWaitingRoom: 'Close the waiting room',
  enabledWaitingRoom: 'You have enabled waiting room',
  disabledWaitingRoom: 'You have disabled waiting room',
  enabledWatermark: 'You have enabled watermark',
  disabledWatermark: 'You have disabled watermark',
  sendTo: 'Send to',
  closeRightRow: 'Close',
  closeWaitingRoomCheck:
    'Allow all members of the waiting room to enter the meeting',
  waiting: 'Waiting',
  days: 'Day(s)',
  hours: 'Hour(s)',
  minutes: 'Minute(s)',
  meetingWillBeginSoon: 'Please wait. The meeting will begin soon',
  meetingEnded: 'Meeting ended',
  chatMessage: 'Chat Message',
  joining: 'Joining',
  notAllowJoin: 'Do not allow users to join this meeting again',
  removeWaitingRoomMember: 'Remove waiting members',
  moveToWaitingRoom: 'Remove to waiting room',

  networkReconnectSuccess: 'Network reconnection successful',
  networkExceptionAndCheck: 'Network exception.Check the network Settings.',
  noMediaPermission: 'No camera/microphone permission',
  getMediaPermission:
    'Please open camera/microphone permission in browser settings and refresh the page',
  'errorCodes.10001':
    '10001 The browser is not supported. Please use HTTPS environment or localhost environment',
  'errorCodes.10119': '10119 Server authentication failed',
  'errorCodes.10229': '10229 Failed to turn off microphone',
  'errorCodes.10231': '10231 Failed to turn off camera',
  'errorCodes.10212': '10212 No camera/microphone permission',
  meetingNickname: 'Nickname',
  imageSizeLimit5: 'Image size cannot exceed 20MB',
  openCameraInMeeting: 'Camera On',
  openMicInMeeting: 'Microphone On',
  showMeetingTime: 'Show Meeting Duration',
  showCurrentSpeaker: 'Show Current Speaker',
  alwaysDisplayToolbar: 'Always display toolbar',
  setWhiteboardTransparency: 'Set the whiteboard to transparent',
  alwaysDisplayToolbarTip:
    'After opening, always keep the toolbar below permanent during meetings',
  setWhiteboardTransparencyTip:
    'When setting the whiteboard to transparent, the video  will be directly annotated',
  mirrorVideo: 'Mirror my video',
  HDMode: 'HD Mode',
  HDModeTip: 'Pull HD video when the network and other circumstances allow',
  stopTest: 'Stop',
  inputVolume: 'Input Volume',
  autoAdjustMicVolume: 'Automatically adjust microphone volume',
  pressSpaceBarToMute:
    'Press the spacebar to temporarily turn on the microphone during mute time',
  InputLevel: 'Input Level',
  audio: 'Audio',
  downloadPath: 'Chat room file saving path',
  chosePath: 'Select',
  language: 'Language',
  file: 'File',

  // 会前
  appTitle: 'NetEase Meeting',
  immediateMeeting: 'Start',
  scheduleMeeting: 'Schedule',
  scheduleMeetingSuccess: 'Scheduled successfully',
  scheduleMeetingFail: 'Scheduled unsuccessfully',
  editScheduleMeetingSuccess: 'Edit successfully',
  editScheduleMeetingFail: 'Edit unsuccessfully',
  cancelScheduleMeetingSuccess: 'Cancel successfully',
  cancelScheduleMeetingFail: 'Cancel unsuccessfully',
  tokenExpired: 'Login status has expired. Please log in again',
  updateUserNicknameSuccess: 'Modified successfully',
  updateUserNicknameFail: 'Modified unsuccessfully',
  emptyScheduleMeeting: 'No meetings',
  Sunday: 'Sun. ',
  Monday: 'Mon.',
  Tuesday: 'Tues.',
  Wednesday: 'Wed.',
  Thursday: 'Thur.',
  Friday: 'Fri.',
  Saturday: 'Sat.',
  month: '',
  historyMeeting: 'Meeting history',
  currentVersion: 'Version',
  personalMeetingNum: 'Personal Meeting ID',
  personalShortMeetingNum: 'Short ID',
  feedback: 'Feedback',
  about: 'About Us',
  logout: 'Log Out',
  logoutConfirm: 'Are you sure you want to log out?',
  today: 'Today',
  tomorrow: 'Tomorrow',
  join: 'Join',
  notStarted: 'Upcoming',
  inProgress: 'Ongoing',
  ended: 'Ended',
  restoreMeetingTips:
    'Detected your last abnormal exit. Do you want to resume the meeting?',
  restore: 'Resume',
  uploadLoadingText: 'Your feedback is being uploaded, please wait...',
  privacyAgreement: 'Privacy Policy',
  userAgreement: 'Service Agreement',
  copyRight: 'Copyright ©1997-{{year}} NetEase Inc.\nAll Rights Reserved.',
  chatHistory: 'Chat History',
  allMeeting: 'All Meetings',
  app: 'Apps',
  collectMeeting: 'Favorites',
  operations: 'Operation',
  collect: 'Favorite',
  cancelCollect: 'Cancel',
  collectSuccess: 'Success',
  collectFail: 'Failed',
  cancelCollectSuccess: 'Success',
  cancelCollectFail: 'Failed',
  noHistory: 'No history meetings',
  noCollect: 'No Favorite meetings',
  scrollEnd: 'No more',
  openMeetingPassword: 'Meeting password',
  usePersonalMeetingID: 'Personal meeting ID：',
  meetingIDInputPlaceholder: 'Enter meeting ID',
  clearAll: 'Clear All',
  clearAllSuccess: 'History cleared',
  waitingRoomTip:
    'If enabled,new members cannot join the meeting until the host admits them.',
  subjectTitlePlaceholder: 'Enter meeting topic',
  meetingInviteUrl: 'Meeting Link',
  endTime: 'End',
  meetingSetting: 'Meeting Settings',
  autoMute: 'Mute participants upon entry',
  openMeetingLive: 'Live Meeting',
  cancelScheduleMeetingTips:
    'After cancellation, other participants will not be able to join the meeting.',
  noCancelScheduleMeeting: 'Not Now',
  cancelScheduleMeeting: 'Cancel Meeting',
  editScheduleMeeting: 'Edit Meeting',
  autoMuteAllowOpen:
    'Automatically mute and allow attendees to turn on the Mic.',
  autoMuteNotAllowOpen:
    'Automatically mute and disallow attendees to turn on the Mic.',
  reName: 'Rename',
  reNamePlaceholder: 'Enter a new name',
  reNameTips:
    'No more than 10 Chinese characters or 20 letters/numbers/symbols',
  // 美颜设置
  beautySettingTitle: 'Beauty & Virtual Background',
  beautyEffect: 'Beauty effect',
  virtualBackground: 'Virtual background',
  addLocalImage: 'Add local image',
  emptyVirtualBackground: 'Empty',
  virtualBackgroundError1: 'Custom background image does not exist',
  virtualBackgroundError2: 'Invalid image format for custom background image',
  virtualBackgroundError3: 'Invalid color format for custom background image',
  virtualBackgroundError4:
    'The device does not support the use of virtual backgrounds',
  virtualBackgroundError5: 'Failed to turn on virtual background',
  // 共享
  selectSharedContent: 'Select shared content',
  startShare: 'Start sharing',
  desktop: 'Desktop',
  applicationWindow: 'Application window',
  shareLocalComputerSound: 'Simultaneous sharing of local computer sound',
  getScreenCaptureSourceListError:
    'Failed to get share list, please grant permission and try again',
  // 意见反馈
  audioProblem: 'Audio problem',
  aLargeDelay: 'A large delay',
  mechanicalSound: 'Mechanical sound',
  stuck: 'Stuck',
  noise: 'Noise',
  echo: 'Echo',
  notHear: "Can't hear the other's voice",
  notHearMe: "The others can't hear me",
  lowVolume: 'Low volume',
  videoProblem: 'Video problem',
  longTimeStuck: 'Long time stuck',
  videoIsIntermittent: 'Video is intermittent',
  tearing: 'Tearing',
  tooBrightTooDark: 'Picture too bright/too dark',
  blurredImage: 'Blurred image',
  obviousNoise: 'Obvious noise',
  notSynchronized: 'Sound and picture are not synchronized',
  other: 'Other',
  unexpectedExit: 'Unexpected exit',
  otherProblems: 'There are other problems',
  otherProblemsTips:
    'Please describe your problem (when you select "There are other problems"), you need to fill in a specific description before submitting',
  thankYourFeedback: 'Thank you for your feedback',
  uploadFailed: 'Upload failed',
  submit: 'Submit',
  // NPS
  npsTitle:
    'How likely are you to recommend NetEase Meeting to colleagues or partners?',
  nps0: '0- Definitely not',
  nps10: '10- With pleasure',
  npsTips1:
    '0-6: What are the points that make you dissatisfied or disappointed? (Optional)',
  npsTips2: '7-8: What aspects do you think can be done better? (Optional)',
  npsTips3:
    '9-10: Welcome to share your experience of the best features or feelings (optional)',
  supportedMeetings: 'Supported Meetings:',
  meetingLimit:
    '{{maxCount}} participants, limited time {{maxMinutes}} minutes meeting',
  meetingNoLimit: '{{maxCount}}participants，unlimited time meeting',
  accountAndSecurity: 'Account and Security',
  newPwdNotMath: 'The new password format does not match, please re-enter',
  newPwdNotMathReEnter: 'The new password is inconsistent, please re-enter',
  // 设置音频
  advancedSettings: 'Advanced settings',
  audioNoiseReduction: 'Audio noise reduction',
  musicModeAndProfessionalMode: 'Music mode and professional mode',
  musicModeAndProfessionalModeTips:
    'When audio noise reduction is turned on, Music mode and Professional mode cannot be used',
  echoCancellation: 'Echo cancellation',
  activateStereo: 'Activate stereo',
  defaultDevice: 'Default',
  authPrivacyCheckedTips:
    'Please agree to the Privacy Policy and User Service Agreement first.',
  authNoCorpCode: 'No code?',
  authCreateNow: 'Create Now',
  authLoginToTrialEdition: 'Experience Version',
  authNextStep: 'Next',
  authHasCorpCode: 'Existing enterprise code?',
  authLoginToCorpEdition: 'Official Version',
  authLoginBySSO: 'SSO',
  authPrivacy: 'Privacy Policy',
  authUserProtocol: 'Service agreement',
  authEnterCorpCode: 'Please enter the enterprise code',
  authSSOTip: 'No affiliated enterprise.',
  authAnd: 'And',
  authRegisterAndLogin: 'Register/Login',
  authHasReadAndAgreeMeeting: 'I have read and agreed to NetEase Meeting',
  authLoggingIn: 'Logging in to Meeting',
  authLoginByMobile: 'Verification code login',
  authLogin: 'Log in',
  authEnterMobile: 'Please enter your phone number',
  authEnterAccount: 'Enter account',
  authEnterPassword: 'Enter password',
  authLoginByCorpCode: 'Enterprise code login',
  authLoginByCorpMail: 'Enterprise email login',
  authEnterCorpMail: 'Please enter the enterprise email address',
  authResetInitialPasswordDialogTitle: 'Set a new password',
  authResetInitialPasswordDialogMessage:
    'For security reasons, it is recommended to set a new password',
  authResetInitialPasswordDialogCancelLabel: 'Not Now',
  authResetInitialPasswordDialogOKLabel: 'Go to Settings',
  authResetInitialPasswordTitle: 'Set a new password',
  authModifyPasswordSuccess: 'Success',
  authUnavailable: 'None',
  authMobileNum: 'Mobile phone number',
  authEnterCheckCode: 'Please enter the verification code',
  authGetCheckCode: 'Get code',
  authResendCode: '',
  authSuggestChrome: 'Chrome browser is recommended',
  settingEnterNewPasswordTips: 'Enter new password',
  settingEnterPasswordConfirm: 'Enter the new password again',
  settingValidatorPwdTip:
    'Please enter 6-18 characters, including uppercase and lowercase letters and numbers',
  settingPasswordDifferent:
    'The two new passwords are different. Please re-enter them',
  settingPasswordSameToOld:
    'The new password is the same as the old one. Please enter it again',
  settingPasswordFormatError: 'Password format is incorrect, please re-enter',
  settingAccountInfo: 'Account Information',
  settingConnectAdmin: 'If you need to modify, contact the administrator',
  settingUserName: 'Name',
  settingEmail: 'Email',
  settingAccountSecurity: 'Account Security',
  settingChangePassword: 'Change Password',
  settingChangePasswordTip: 'After modification, you need to log in again',
  settingEnterOldPassword: 'Enter old password',
  settingEnterNewPassword: 'Enter new password',
  settingEnterNewPasswordConfirm: 'Enter the new password again',

  settingFindNewVersion: 'New Version',
  settingUpdateFailed: 'Update Failed',
  settingTryAgainLater: 'Next Time',
  settingRetryNow: 'Retry Now',
  settingUpdating: 'Updating',
  settingCancelUpdate: 'Cancel Update',
  settingExitApp: 'Exit App',
  settingNotUpdate: 'Not Update',
  settingUPdateNow: 'Update Now',
  settingConfirmExitApp: 'Confirm to exit the app',
}
