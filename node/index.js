const Recorder = require('rtsp-video-recorder');
const fs = require('fs');
const RecorderEvents = Recorder.RecorderEvents
const main = () => {
  console.log(process.env);
  const recorder = new Recorder.Recorder(process.env.URL, './media', {
    title: 'Test Camera',
    segmentTime: process.env.SEGMENTTIME,
    filePattern: '%Y年%m月%d日%H時%M分%S秒',
    dirSizeThreshold: "50G"
  }).on(RecorderEvents.STARTED, (ev) => {
    console.log("STARTED", ev)
  })
    .on(RecorderEvents.STOPPED, (...ev) => {
      console.log("STOPPED", ev)

      if (ev[1] === "space_full") {
        //don dep o cung
        const files = fs.readdirSync("./media")
          .sort((x, y) => (new Date(x.replace(".mp4", "")).getTime() - (new Date(y.replace(".mp4", ""))).getTime()));

        try {
          for (let i = 0; i < 100; i++) {
            fs.rmSync("./media/" + files[i], { recursive: true, force: true });
          }
        } catch (error) {
          console.log(error)
        }

        console.log(files);
        main();
      };
    })
    .on(RecorderEvents.FILE_CREATED, (ev) => {
      console.log("FILE_CREATED", ev)
    })
    .on(RecorderEvents.SPACE_FULL, (ev) => {
      console.log("SPACE_FULL", ev)
    });
  recorder.start();
}

main();
