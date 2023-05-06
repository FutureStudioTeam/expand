# 光环板通信例程

import asyncio
import mlink


async def main():
    # mlink 启动 # 完成到mlink的连接
    # 如无法连接，此处抛异常
    await mlink.start()
    print('mlink connected')

    # 取得id为0的数据通道
    # ch0 = mlink.getChannel(0)
    ch0 = mlink.getChannel(1)

    # 注册光环板按键事件
    ch0.send([243, 43, 56, 0, 40, 4, 15, 0, 50, 0, 115, 117, 98, 115, 99, 114, 105, 98, 101, 46, 97, 100, 100, 95, 105, 116, 101, 109, 40, 34, 49,
              49, 34, 44, 104, 97, 108, 111, 46, 98, 117, 116, 116, 111, 110, 46, 105, 115, 95, 112, 114, 101, 115, 115, 101, 100, 44, 91, 93, 41, 104, 244])
    await asyncio.sleep(1)

    # 测试5次后退出
    for _ in range(5):
        # 发送到光环板LED全亮
        ch0.send([243, 20, 33, 0, 40, 0, 0, 0, 27, 0, 104, 97, 108, 111, 46, 108, 101, 100, 46,
                  115, 104, 111, 119, 95, 97, 108, 108, 40, 50, 48, 56, 44, 50, 44, 50, 55, 41, 175, 244])
        await asyncio.sleep(1)
        print("请按键关闭LED")
        # 当按键事件发生
        data = await ch0.recv()
        print('按钮事件 from 光环板', data)

        # 发送到光环板LED全灭
        ch0.send([243, 6, 19, 0, 40, 3, 0, 0, 13, 0, 108, 101, 100, 46,
                  111, 102, 102, 95, 97, 108, 108, 40, 41, 191, 244])
        await asyncio.sleep(1)
        print("请按键打开LED")
        data = await ch0.recv()
        print('按钮事件 from 光环板', data)

    await mlink.stop()
    print('已退出连接')

asyncio.run(main())
