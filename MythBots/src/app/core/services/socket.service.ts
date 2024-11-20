import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from "socket.io-client"
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | any;
  private url = 'http://localhost:3000'
  constructor() {
    this.socket = io(this.url,{transports: ['websocket', 'polling', 'flashsocket']})
   }

  sendMessage(message: any){
    this.socket.emit('sendNewMessage', message);
  }

  getMessages(){
    return new Observable(observer => {
      this.socket.on('new message' ,(message: any) =>{
        observer.next(message);
      })

      return () => {
        this.socket.disconnect();
      }
    })
  }
}
