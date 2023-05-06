const ExtHandler = {

    // 当扩展加载
    onLoad(app, target) {
        this.workerSetup();
        this.worker.exports = {
            app: app
        };
        this.worker.remote.runExtension('onLoad', target.deviceID);
    },

    // 当扩展卸载
    onUnload(app) {
        this.worker.remote.runExtension('onUnload');
        this.worker.dispose();
    },

    // 当设备连接
    onConnect(app, device) {
        this.worker.remote.runExtension('onConnect', device.deviceID);
    },

    // 当设备断连
    onDisconnect(app, device) {
        this.worker.remote.runExtension('onDisconnect', device.deviceID);
    },

    // 当点击停止按钮
    onStopAll(app, device) {
        this.worker.remote.runExtension('onStopAll', device.deviceID);
    },

    // 当准备切换到上传模式
    async beforeChangeUploadMode(app, device) {
        return this.worker.remote.runExtension('beforeChangeUploadMode', device.deviceID);
    },

    // 当准备切换到调试模式
    async beforeChangeDebugMode(app, device) {
        return this.worker.remote.runExtension('beforeChangeDebugMode', device.deviceID);
    },

    // 当已切换到上传模式
    afterChangeUploadMode(app, device) {
        this.worker.remote.runExtension('afterChangeUploadMode', device.deviceID);
    },

    // 当已切换到调试模式
    afterChangeDebugMode(app, device) {
        this.worker.remote.runExtension('afterChangeDebugMode', device.deviceID);
    },

    // 当选中设备
    onSelect(app, device) {
        this.worker.remote.runExtension('onSelect', device.deviceID);
    },

    // 当离开设备
    onUnselect(app, device) {
        this.worker.remote.runExtension('onUnselect', device.deviceID);
    },

    // 当上传代码
    beforeCodeUpload(app, device) {
        this.worker.remote.runExtension('beforeCodeUpload', device.deviceID);
    },

    // 当上传代码结束
    afterCodeUpload(app, device) {
        this.worker.remote.runExtension('afterCodeUpload', device.deviceID);
    },

    // 当收到字节流
    onRead(app, device) {
        this.worker.remote.runExtension('onRead', device.deviceID);
    }
};
export default ExtHandler;