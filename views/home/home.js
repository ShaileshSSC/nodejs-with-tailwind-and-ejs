import { io } from "socket.io-client";
const socket = io();

document.querySelector('#createBtn').addEventListener('click', ()=> {
  gotoPage('lobby')
})

function gotoPage(page) {
  window.location.href = `/${page}`;
}