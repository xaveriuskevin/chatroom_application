import React from 'react'
import {StreamChat} from 'stream-chat'
import {Channel, ChannelList, Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

//If there is not index.js file in Components
// import ChannelListContainer from './components/ChannelListContainer'
// import ChannelContainer from './components/ChannelContainer'

import { ChannelListContainer, ChannelContainer, Auth} from './components'
import './app.css'


const apikey = "bapc28ptunhg"

const client = StreamChat.getInstance(apikey)

const authToken = false

const app = () => {

  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer

            />
            <ChannelContainer

            />
        </Chat>
    </div>
  )
}

export default app
