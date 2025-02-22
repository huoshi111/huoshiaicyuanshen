
    let isSpeechEnabled = false; // 是否开启自动朗读
    let observer; // 监听 AI 回复
    let lastText = ""; // 记录上一次朗读的文本

    // 切换语音朗读功能
    function toggleSpeech() {
        isSpeechEnabled = !isSpeechEnabled;
        document.getElementById("speechButton").innerText = isSpeechEnabled ? "关闭阅读" : "开启阅读";

        if (isSpeechEnabled) {
            startObserving(); // 重新监听 AI 回复
        } else {
            speechSynthesis.cancel(); // 停止当前朗读
            if (observer) observer.disconnect(); // 停止监听
        }
    }

    // 监听 AI 回复区域的变化
    function startObserving() {
        if (observer) observer.disconnect(); // 先断开旧的监听，避免重复

        observer = new MutationObserver(() => {
            if (!isSpeechEnabled) return; // 朗读未开启则不执行

            let messageElement = document.getElementById("message");
            if (messageElement) {
                let messageContent = messageElement.textContent.trim();

                // **避免重复朗读相同内容**
                if (messageContent.length > 0 && messageContent !== lastText) {
                    lastText = messageContent; // 记录本次朗读的文本

                    // **等待文本稳定后朗读**
                    setTimeout(() => {
                        if (messageElement.textContent.trim() === lastText) {
                            speechSynthesis.cancel(); // 取消之前的朗读
                            startReading(lastText); // 朗读完整文本
                        }
                    }, 700); // 等待 0.7 秒确保文本已完全生成
                }
            }
        });

        observer.observe(document.getElementById("message"), { childList: true, subtree: true });
    }

    // 朗读文本
    function startReading(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "zh-CN"; // 语言设置为中文
        speech.rate = 1.7; // 语速
        speech.pitch = 1.0; // 音调
        speechSynthesis.speak(speech);
    }

    // 语音识别功能（可选）
    function startSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        // 不再使用alert，而是直接在页面上显示错误信息
        displayErrorMessage("您的浏览器不支持语音识别，请使用 Chrome 或 Edge。");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "zh-CN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // 通过id获取按钮元素
    let speechButton = document.getElementById("speechRecognitionButton");

    // 开始识别时，显示“识别中...”
    speechButton.innerText = "识别中...";

    recognition.start();

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        document.getElementById("userInput").value = transcript; // 将语音识别结果填入输入框
        processInput(); // 调用提交函数

        // 识别结束后，恢复按钮为麦克风emoji
        speechButton.innerText = "🎤";
    };

    recognition.onerror = function(event) {
        console.error("语音识别错误(⊙_⊙)：", event.error);

        // 不再使用alert，而是将错误信息显示在页面上
        displayErrorMessage("语音识别出错(⊙_⊙)：" + event.error);

        // 出错时，恢复按钮为麦克风emoji
        speechButton.innerText = "🎤";
    };
}
    // **初始化监听**
    startObserving();
