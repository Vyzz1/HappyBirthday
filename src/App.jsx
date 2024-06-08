import { Card, CardContent, Container, Stack } from "@mui/material";
import "./App.css";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import * as React from "react";
import { Typewriter } from "react-simple-typewriter";
import TimeSinceBirthday from "./components/TimeSinceBirthday";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Lightbox from "yet-another-react-lightbox";
import { Download } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import ImageListInfinite from "./components/ImageListInfinite";
import myLove from "./assets/images/mylove.png";
// Lottie
import happyBirthdayText from "./assets/lottie/happyBirthdayText.json";
import cake from "./assets/lottie/birthdayCake.json";
import arrowDown from "./assets/lottie/arrowDown.json";
import mouseDown from "./assets/lottie/mouseDown.json";
import rose from "./assets/lottie/rose.json";
// Icons
import {
  BsDownload,
  BsFullscreen,
  BsFullscreenExit,
  BsZoomIn,
  BsZoomOut,
} from "react-icons/bs";

function App() {
  const [open, setOpen] = React.useState(false);

  const slides = [
    {
      src: myLove,
      downloadFilename: "mylove",
      width: 1500,
      height: 1200,
    },
  ];
  const mouseDownStyle = {
    width: "100%",
    height: "100px",
  };
  return (
    <>
      <Container sx={{ padding: "58px 15px" }}>
        <Stack direction="row" spacing={2}>
          <Lottie
            animationData={happyBirthdayText}
            style={{ width: "150%", height: "250px" }}
            loop
          />
          <Lottie
            animationData={cake}
            style={{ width: "100%", height: "250px" }}
            loop
          />
        </Stack>

        <span
          className="typewriter"
          style={{ fontSize: "28px", color: "#ff7c58", fontWeight: "550" }}
        >
          <Typewriter
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000}
            cursor
            loop={true}
            words={["Nguyễn Thị Huyền Trang", "26/06/2004"]}
          />
        </span>

        <Card sx={{ marginBlock: "35px" }} variant="elevation">
          <CardContent>
            <Typography variant="h4"> It have been</Typography>
          </CardContent>
          <CardContent>
            <TimeSinceBirthday birthday={"2004-06-26"} />
          </CardContent>
          <CardContent>
            <Typography
              sx={{ fontStyle: "italic", color: "#ff5bf4", fontWeight: "550" }}
            >
              Since the day this pretty cuttie were born
            </Typography>
          </CardContent>
        </Card>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Lottie
            animationData={arrowDown}
            loop
            style={{ width: "auto", height: "100px" }}
          />
        </Stack>
        <button type="button" className="my-btn" onClick={() => setOpen(true)}>
          Nhấn đây nè
        </button>

        <ImageListInfinite />
        <Typography variant="h6" color={"blue"}>
          This is for u nah ...
        </Typography>
        <Lottie
          animationData={rose}
          loop
          style={{ width: "100%", height: "250px" }}
        />
      </Container>
      <div
        style={{
          position: "sticky",
          bottom: 20,
          display: "inline-block",
          right: 0,
          marginLeft: "80%",
        }}
      >
        <Lottie animationData={mouseDown} loop style={mouseDownStyle} />
      </div>
      <Lightbox
        plugins={[Zoom, Fullscreen, Download]}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
        render={{
          iconDownload: () => <BsDownload fontSize={"23px"} color="blue" />,
          iconEnterFullscreen: () => <BsFullscreen fontSize={"23px"} />,
          iconExitFullscreen: () => <BsFullscreenExit fontSize={"23px"} />,
          iconZoomIn: () => <BsZoomIn fontSize={"23px"} />,
          iconZoomOut: () => <BsZoomOut fontSize={"23px"} />,
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}

export default App;
