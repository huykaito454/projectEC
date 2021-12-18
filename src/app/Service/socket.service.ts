import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  public socket = io('https://daugiabanner-server.herokuapp.com',{ transports : ['websocket'] });
  constructor() { }
}
