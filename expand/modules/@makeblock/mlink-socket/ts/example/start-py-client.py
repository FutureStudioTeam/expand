import asyncio
import websockets

async def echo(websocket, path):
    async for message in websocket:
        text = str(message, encoding = "utf-8")
        print(text)
        await websocket.send(message)

asyncio.get_event_loop().run_until_complete(
    websockets.serve(echo, 'localhost', 10087))
asyncio.get_event_loop().run_forever()