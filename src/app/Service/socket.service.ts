import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  public socket = io('http://localhost:8081',{ transports : ['websocket'] });
  constructor() { }
}
