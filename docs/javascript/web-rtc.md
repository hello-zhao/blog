# web-rtc
1. `A `创建了一个 `RTCPeerConnection` 对象

2. `A` 利用`RTCPeerConnection` 的 `createOffer()` 方法创建了一个 `offer` （一个` SDP` 的会话描述）

3. `A` 在 `offer` 的回调中使用 `setLocalDescription()` 方法存储他的 `offer`

4. `A` 把他的 `offer` 字符串化，然后通过某一种信令机制发给 `B`

5. `B` 收到 `A` 的 `offer` 后用`setRemoteDescription()` 存起来，如此一来他的 `RTCPeerConnection` 就知道了 `A` 的配置。

6. `B` 调用 `createAnswer()` 并用他的成功回调的传送他的本地会话描述：这就是 `B` 的`answer`

7. `B` 用 `setLocalDescription()` 设置了他的 `answer` 到本地的会话描述

8. 然后 `B` 用某一种信令机制把他的 `answer` 字符串化之后返回给 `A`

9. `A` 把 `B` 的 `answer` 利用`setRemoteDescription()`方法存取为远程会话描述
复

作者：展豪
链接：https://juejin.im/post/5cbc8b2cf265da03ab23267d
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
## getUserMedia
:::tip
navigator.mediaDevices.getUserMedia(constraints);
+ constraints 必选参数 要请求的媒体资源对象， 包含 video、audio
+ 返回Promise，resolve 可播放的 MediaStream， reject PermissionDeniedError 或者 NotFoundError
+ 移动设备 facingMode区分前置摄像头："user"， 后置摄像头 "environment"
:::
``` js
const constraints = { audio: true, video: { width: 1200, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then((mediaStream)=>{
  const video = document.createElement('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function() {
    video.play();
  };
  document.body.appendChild(video);
})
.catch((err) => {
  console.log(err.name + ": " + err.message);
});
```

## MediaStream.getVideoTracks（）
:::tip
接口的getVideoTracks()方法MediaStream返回MediaStreamTrack表示此流中视频轨道的一系列对象
videoTracks[0].label 设备名称
:::

## ImageCapture
:::tip
在ImageCapture所述的接口MediaStream图像捕捉API提供了一些方法，以使图像或照片的捕获从照相机或其它照相设备提供用于从通过一个有效引用的照相设备捕捉图像的接口MediaStreamTrack。
:::
```js
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  const track = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(track);
  const img = document.createElement('img');
  imageCapture.takePhoto().then((rest) => {
    img.src = URL.createObjectURL(rest);
    document.body.appendChild(img);
  });
});
```


## RTCPeerConnection
:::tip
new RTCPeerConnection([configuration]) 实例，代表了本地端机器与远端机器的一条连接。用来点对点建立音视频连接
+ configuration 可选参数
+ createOffer(); 创建一个` SDP` 的会话描述
+ 当 RTCIceCandidate 被添加到目标 RTCPeerConnection上时将会触发icecandidate 事件,当网络可用的情况下，用于存储和交换各种网络信息。
+ addIceCandidate 将新远程候选添加到RTCPeerConnection远程描述中，该描述描述了连接远程端的状态
:::
