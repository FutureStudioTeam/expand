"use strict";
/**
 * @author sky.li
 * @module message
 * @desc 消息层定义
 * */
Object.defineProperty(exports, "__esModule", { value: true });
var MSG_TAG;
(function (MSG_TAG) {
    MSG_TAG[MSG_TAG["msg_reg"] = 0] = "msg_reg";
    MSG_TAG[MSG_TAG["msg_unreg"] = 1] = "msg_unreg";
    MSG_TAG[MSG_TAG["msg_send"] = 2] = "msg_send";
    MSG_TAG[MSG_TAG["msg_recv"] = 3] = "msg_recv"; // recv(ch, data) // (客户端收到)从数据通道收到数据
})(MSG_TAG = exports.MSG_TAG || (exports.MSG_TAG = {}));
// 消息生成器
exports.Messages = {
    reg: (ch) => {
        return [MSG_TAG.msg_reg, ch];
    },
    unreg: (ch) => {
        return [MSG_TAG.msg_unreg, ch];
    },
    send: (ch, data) => {
        return [MSG_TAG.msg_send, ch, ...data];
    },
    recv: (ch, data) => {
        return [MSG_TAG.msg_recv, ch, ...data];
    }
};
//# sourceMappingURL=message.js.map