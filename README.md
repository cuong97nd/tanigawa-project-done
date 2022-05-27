# tanigawa-project

#tapo onvif link

http://＜カメラの IP アドレス＞:2020/onvif/device_service

#config webrtc cam

type: custom:webrtc-camera
url: rtsp://tanigawa:tanigawa@10.0.1.131:554/stream2
mse: true
webrtc: true
ui: false
background: true
ice_servers:
  - urls: stun:stun.l.google.com:19302
  - urls: turn:118.27.118.210:3478
    username: a
    credential: a
ptz:
  service: tapo_control.ptz
  data_left:
    entity_id: camera.tapo_camera_cb2d_hd
    pan: LEFT
  data_right:
    entity_id: camera.tapo_camera_cb2d_hd
    pan: RIGHT
  data_up:
    entity_id: camera.tapo_camera_cb2d_hd
    tilt: UP
  data_down:
    entity_id: camera.tapo_camera_cb2d_hd
    tilt: DOWN


# viec can lam

sửa fontend phần webrtc 0
sửa fontend phần chọn video 0
sửa fontend phần play video 0
fix time 0
const all resoure in app (dont download from internet every build )
const hassio image 0
const node image 0
const node-rtsp-recoder 0
const ffmpge 0
config auto ssh on boot 0
add ptz ip camera 0

kiem tra lai dung luong 


# viec lam khi setup

date # check time
sudo dpkg-reconfigure tzdata # setup timezone
setup docker images (hass , node recorder)
