import CONSTANTS from '../../CONSTANTS'



const { PrimaryColors, Gradients } = CONSTANTS.COLOR_PALETTES

const {
  LightBlue,
  LightGreen,
  DarkGreen,
  CoolGrey
} = PrimaryColors

const {
  GreenOne,
  GreenTwo,
  GreenThree,
  GreenFour,
  GreenFive,
  BlueOne,
  BlueTwo,
  GreyOne,
  GreyTwo,
  GreyThree
} = Gradients


const MainContainer = ({ children }) => {
  return (
    <div className="box">
    { children }
    <style jsx>{
      `
      .box {
        box-shadow: 1em -1em 1em -1em ${BlueTwo.rgba(0.75)},
                    -0.25em 0.25em 2em -1em ${BlueOne.rgba(0.35)},
                    -0.25em 0.25em 2em -1em ${DarkGreen.rgba(0.75)},
                    inset -0.25em 0.25em 2em -1em ${BlueOne.rgba(0.75)},
                    inset -0.25em 0.25em 2em -1em ${GreenFive.rgba(0.3)},
                    inset 0.5em -0.5em 1.5em 0.5em ${BlueTwo.rgba(0.3)};
        height: -webkit-fill-available;
        width: -webkit-fill-available;
        max-width: 75vw;
        max-height: 65vh;
        margin: auto auto;
        background: rgba(235,255,245,0.8);
        border-radius: 0.35em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      `
    }</style>
    </div>
  )
}


export default MainContainer
