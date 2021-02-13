/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import "./App.css";
import StrawberryButton from "./components/StrawberryButton";
import { animated } from "react-spring";
import useTranslateYHalfScreen from "./hooks/useTranslateYHalfScreen";
import useTranslateXHalfScreen from "./hooks/useTranslateXHalfScreen";
function App() {
  const [props, start, undo] = useTranslateXHalfScreen();

  return (
    <div tw="w-full h-screen overflow-hidden">
      <div
        onClick={() => {
          undo();
        }}
        className="App"
        style={{
          background: "rgb(255,180,162)",
          background:
            "radial-gradient(circle, rgba(255,180,162,1) 0%, rgba(255,226,219,1) 100%)",
        }}
        tw="flex w-full h-screen justify-around items-center flex-col "
      >
        <h1 tw="font-yellowtail text-white text-6xl lg:text-8xl bg-opacity-0">
          Strawberry
        </h1>
        <StrawberryButton />
        <div tw="w-full ">
          <div tw="flex justify-around lg:mx-24 p-8 ">
            <div
              onClick={() => {
                start();
              }}
              tw="text-white text-4xl hover:cursor-pointer bg-isbaelline text-melon lg:hover:bg-white lg:hover:text-black font-amaranth p-2 rounded px-8 transition-all "
            >
              About
            </div>
            <div tw="text-white text-4xl hover:cursor-pointer bg-isbaelline text-melon lg:hover:bg-white lg:hover:text-black font-amaranth p-2 rounded px-8 transition-all ">
              Saved
            </div>
          </div>
        </div>
      </div>
      <animated.div
        style={{
          ...props,
        }}
        tw="min-h-screen absolute inset-y-0 left-0 bg-isbaelline w-1/2 p-10 rounded "
      >
        <h1 tw="text-5xl mb-8 font-amaranth">About</h1>

        <p tw="text-black  text-lg">
          Ever not know the name of the song you’re listening to? Strawberry is
          here to help you out. Just press the Strawberry icon and in a few
          moments you will know the name of the song with lyrics to it too, if
          any.
        </p>
      </animated.div>
    </div>
  );
}

export default App;
