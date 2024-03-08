import React, { useEffect } from 'react'
import './index.less'
// import '../../../assets/iconfont/iconfont.css'
import { ConfigProvider } from 'antd'

import antd_zh_CH from 'antd/locale/zh_CN'
import { useMeetingInfoContext } from '../../../store'
import { ActionType } from '../../../types'
import WaitingRoom from '../WaitingRoom'
import MeetingContent from './Meeting'

const antdPrefixCls = 'nemeeting'

ConfigProvider.config({ prefixCls: antdPrefixCls })

interface AppProps {
  width: number
  height: number
}

const Meeting: React.FC<AppProps> = ({ height, width }) => {
  const { meetingInfo, dispatch } = useMeetingInfoContext()

  useEffect(() => {
    let timer: any = null
    let count = 0
    document.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        count = 0
      }, 1000)
      count++
      if (count === 30) {
        dispatch?.({
          type: ActionType.UPDATE_MEETING_INFO,
          data: {
            isDebugMode: true,
          },
        })
      }
    })
  }, [])

  return (
    <ConfigProvider
      prefixCls={antdPrefixCls}
      locale={antd_zh_CH}
      theme={{ hashed: false }}
    >
      {meetingInfo?.inWaitingRoom ? (
        meetingInfo.meetingNum && <WaitingRoom />
      ) : (
        <MeetingContent width={width} height={height} />
      )}
    </ConfigProvider>
  )
}

export default Meeting
