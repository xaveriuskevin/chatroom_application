import React , {useState} from 'react'
import {Channel, useChatContext} from 'stream-chat-react'

import {ChannelInner, CreateChannel, EditChannel , TeamMessage} from './';


const ChannelContainer = ({
  isCreating,
  SetIsCreating,
  isEditing,
  SetIsEditing,
  createType
}) => {
  const {channel} = useChatContext();

  if(isCreating){
    return(
        <div className='channel__container'>
          <CreateChannel createType={createType} SetIsCreating={SetIsCreating} />
        </div>
    )
  }

  if(isEditing){
    return(
      <div className='channel__container'>
      <EditChannel SetIsEditing={SetIsEditing} />
    </div>
    )
  }

  const EmptyState = () => (
      <div className='channel-empty__container'>
        <p className='channel-empty__first'> This is the Begining of your chat</p>
        <p className='channel-empty__second'>Say Hi!</p>
      </div>
  )


  return (
      <div className='channel__container'>
        <Channel
            EmptyStateIndicator={EmptyState}
            Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
        >
          <ChannelInner SetIsEditing={SetIsEditing}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer;
