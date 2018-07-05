const db = require('../utils/database.js'); // 初始化数据库表

let users = db.model("users",{ // 用户
    name: String,
    pass: String,
    photo: String
});

const initUser = (callback) => {
    let user = new users({
        name: 'admin',
        pass: '123456',
        photo: ''
    });
    user.save().then((res) => {
        callback(res)
    })
};

let rooms = db.model("rooms",{ // 房间
    title: String
});

const initRoom = (callback) => {
    let room = new rooms({
        title: '第一聊天室'
    });
    room.save().then((res) => {
        callback(res)
    })
};

let message = db.model("rooms",{ // 消息
    roomid: String,
    roomtitle: String,
    userid: String,
    username: String,
    content: String,
});

const initMessage = (callback) => {
    let message = new message({
        roomid: '',
        roomtitle: '第一聊天室',
        userid: '',
        username: 'admin',
        content: '我是admin ^_^'
    });
    message.save().then((res) => {
        callback(res)
    })
};

module.exports = {
    initUser,
    initRoom,
    initMessage
};
