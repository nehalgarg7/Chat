import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ChatPage() {

  const [chats, setChats] = useState([])

  let data;
  const fetchChats = async() => {
     axios.get('http://localhost:5000/api/chat').then(function (response) {
      // handle success
      setChats(response.data);
      
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
    });
  }

  console.log(chats);

  useEffect(()=>{
    fetchChats();
  },[])

  return (
    <div>

      {
        chats.map((user) => {
          return (
            <li key={user._id}>{user.chatName}</li>
          )
        })
      }
    </div>
  )
}

export default ChatPage