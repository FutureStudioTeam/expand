const ExtHandler = {
    // 当扩展加载
    async onLoad(app, target) {
        const account = app.getService('account');
        if (account) {
            const isLogin = await account.isLogin();
            if (!isLogin) {
                app.workspace.disableBlocks(...mustLoginBlocks);
            }
            account.onLogin(() => {
                app.workspace.enableBlocks(...mustLoginBlocks);
            });
            account.onLogout(() => {
                app.workspace.disableBlocks(...mustLoginBlocks);
            });
        }
        if (target && typeof target.isUploadMode === 'function') {
            triggerBlocksStatus(target.isUploadMode() ? 'upload' : 'debug', app);
        }
    },

    // 当扩展卸载
    onUnload(app) {
        // TODO
    },

    // 当设备连接
    onConnect(app, device) {
        // TODO
    },

    // 当设备断连
    onDisconnect(app, device) {
        // TODO
    },

    // 当点击停止按钮
    onStopAll(app, device) {},

    // 当准备切换到上传模式
    async beforeChangeUploadMode(app, device) {
        return true;
    },

    // 当准备切换到调试模式
    async beforeChangeDebugMode(app, device) {
        return true;
    },

    // 当已切换到上传模式
    afterChangeUploadMode(app, device) {
        triggerBlocksStatus('upload', app, device);
        return true;
    },

    // 当已切换到调试模式
    afterChangeDebugMode(app, device) {
        triggerBlocksStatus('debug', app, device);
        return true;
    },

    // 当选中设备
    onSelect(app, device) {
        setTimeout(() => {
            triggerBlocksStatus(device.isUploadMode() ? 'upload' : 'debug', app, device);
        }, 0);
    },

    // 当离开设备
    onUnselect(app, device) {
        triggerBlocksStatus('', app, device);
    },

    // 当上传代码
    beforeCodeUpload(app, device) {
        // TODO
    },

    // 当上传代码结束
    afterCodeUpload(app, device) {
        // TODO
    },

    // 当收到字节流
    onRead(app, device) {}
}

export default ExtHandler;