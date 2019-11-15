import { Component, OnInit } from '@angular/core';
import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';
import { UserService } from '../../security/services/user.service';


@Component({
  selector: 'app-user-chat-page',
  templateUrl: './user-chat-page.component.html',
  styleUrls: ['./user-chat-page.component.scss']
})
export class UserChatPageComponent implements OnInit {

  constructor(public _userSrc:UserService) { }

  ngOnInit() {
    // this.userId = this._userSrc.getUser.name;
    this.userId = "Steven";
    this.addUser();
  }

  userId = '';
  currentUser = <any>{};
  messages = [];
  currentRoom = <any>{};
  roomUsers = [];
  userRooms = [];
  newMessage = '';
  newRoom = {
    name: '',
    isPrivate: false
  };
  joinableRooms = [];
  newUser = '';



  addUserToRoom() {
    const { newUser, currentUser, currentRoom } = this;
    currentUser.addUserToRoom({
      userId: newUser,
      roomId: currentRoom.id
    })
      .then((currentRoom) => {
        this.roomUsers = currentRoom.users;
      })
      .catch(err => {
        console.log(`Error adding user: ${err}`);
      });

    this.newUser = '';
  }

  createRoom() {
    const { newRoom: { name, isPrivate }, currentUser } = this;
    
    if (name.trim() === '') return;

    currentUser.createRoom({
      name,
      private: isPrivate,
    }).then(room => {
      this.connectToRoom(room.id);
      this.newRoom = {
        name: '',
        isPrivate: false,
      };
    })
    .catch(err => {
      console.log(`Error creating room ${err}`)
    })
  }

  getJoinableRooms() {
    const { currentUser } = this;
    currentUser.getJoinableRooms()
    .then(rooms => {
      this.joinableRooms = rooms;
    })
    .catch(err => {
      console.log(`Error getting joinable rooms: ${err}`)
    })
  }

  joinRoom(id) {
    const { currentUser } = this;
    currentUser.joinRoom({ roomId: id })
    .catch(err => {
      console.log(`Error joining room ${id}: ${err}`)
    })
  }

  connectToRoom(id) {
    this.messages = [];
    const { currentUser } = this;
    
    currentUser.subscribeToRoom({
      roomId: `${id}`,
      messageLimit: 100,
      hooks: {
        onMessage: message => {
          this.messages.push(message);
        },
        onPresenceChanged: () => {
          this.roomUsers = this.currentRoom.users.sort((a) => {
            if (a.presence.state === 'online') return -1;

            return 1;
          });
        },
      },
    })
    .then(currentRoom => {
      this.currentRoom = currentRoom;
      this.roomUsers = currentRoom.users;
      this.userRooms = currentUser.rooms;
    });
  }

  sendMessage() {
    const { newMessage, currentUser, currentRoom } = this;
    
    if (newMessage.trim() === '') return;

    currentUser.sendMessage({
      text: newMessage,
      roomId: `${currentRoom.id}`,
    });

    this.newMessage = '';
  }

  addUser() {
    const { userId } = this;
    axios.post('http://localhost:3000/chat/users', { userId })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: 'http://localhost:3000/chat/authenticate'
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:77a60606-3eb7-4776-aec0-734446afabd4',
          userId,
          tokenProvider
        });

        return chatManager
          .connect({
            onAddedToRoom: room => {
              console.log(`Added to room ${room.name}`)
              this.userRooms.push(room);
              this.getJoinableRooms();
            },
          })
          .then(currentUser => {
            this.currentUser = currentUser;
            this.connectToRoom('e22bec4f-6bbb-4c56-b3ec-95ae1774f349');
            this.getJoinableRooms();
          });
      })
        .catch(error => console.error(error))
  }

  test(){
    return this.userId = this._userSrc.getUser.name;
  }

  

  onClick() {
  }


}
