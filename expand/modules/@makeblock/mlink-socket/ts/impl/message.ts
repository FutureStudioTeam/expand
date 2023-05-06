/**
 * @author sky.li
 * @module message
 * @desc 消息层定义
 * */

export enum MSG_TAG {
    msg_reg = 0, // reg(ch) // 注册一个通道
    msg_unreg = 1, // unreg(ch) // 取消注册一个通道
    msg_send = 2, // send(ch, data) // (客户端)发送数据到通道
    msg_recv = 3 // recv(ch, data) // (客户端收到)从数据通道收到数据
}

// 消息生成器
export const Messages = {    
    reg: (ch: number) => {
        return [MSG_TAG.msg_reg, ch]
    },

    unreg: (ch: number) => {
        return [MSG_TAG.msg_unreg, ch]
    },

    send: (ch: number, data: number[]) => {
        return [MSG_TAG.msg_send, ch, ...data]
    },

    recv: (ch: number, data: number[]) => {
        return [MSG_TAG.msg_recv, ch, ...data]
    }
}

