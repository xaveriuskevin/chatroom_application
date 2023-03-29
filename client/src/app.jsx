import React from 'react'
import {useState} from 'react'
import {StreamChat} from 'stream-chat'
import {Channel, ChannelList, Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

//If there is not index.js file in Components
// import ChannelListContainer from './components/ChannelListContainer'
// import ChannelContainer from './components/ChannelContainer'

import { ChannelListContainer, ChannelContainer, Auth} from './components'

import 'stream-chat-react/dist/css/index.css';
import './App.css';


const cookies = new Cookies();

const apikey = "bapc28ptunhg";

const client = StreamChat.getInstance(apikey);

const authToken = cookies.get("token");

if(authToken){
  client.connectUser({
    id : cookies.get('userId'),
    name :cookies.get('username'),
    fullName : cookies.get('fullName'),
    image : cookies.get('avatarURL'),
    hashedPassword : cookies.get('hashedPassword'),
    phoneNumber : cookies.get('phoneNumber')
  }, authToken)
}

const App = () => {

  const [createType , SetCreateType] = useState('');
  const [isCreating , SetIsCreating] = useState(false);
  const [isEditing , SetIsEditing] = useState(false);


  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer
                isCreating = {isCreating}
                SetIsCreating = {SetIsCreating}
                SetCreateType = {SetCreateType}
                SetIsEditing = {SetIsEditing}
            />
            <ChannelContainer
                isCreating = {isCreating}
                SetIsCreating = {SetIsCreating}
                isEditing = {isEditing}
                SetIsEditing = {SetIsEditing}
                createType={createType}
            />
        </Chat>
    </div>
  )
}

export default App
