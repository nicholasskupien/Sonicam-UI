import openSocket from 'socket.io-client';
const socketPOIFeed = openSocket('http://localhost:5000');
const socketVideoFeedState = openSocket('http://localhost:5000');
const socketVideoFeed = openSocket('http://localhost:5000');

function getPOIFeed(cb) {
  socketPOIFeed.on('feeds', feeds => cb(null, feeds));
}
function getVideoFeedState(cb){
  socketVideoFeedState.on('state', state => cb(null, state));
}
function getVideoFeed(cb){
  socketVideoFeed.on('frame', frame => cb(null, frame));
}
export { getPOIFeed, getVideoFeedState, getVideoFeed };