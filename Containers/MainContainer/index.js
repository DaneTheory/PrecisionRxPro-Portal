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
        height: -webkit-fill-available;
      width: -webkit-fill-available;
      max-width: 80vw;
      max-height: 65vh;
      margin: auto auto;
      background: rgb(201 222 202 / 82%);
      border-radius: 0em 22em;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      mix-blend-mode: color-dodge;
      -webkit-filter: drop-shadow(0em 1em 2em #3B3B3B) blur(0px);
      -webkit-filter: drop-shadow(0em 1em 2em #3B3B3B) blur(0px);
      filter: drop-shadow(1em 1em 0.2em #3B3B3B) brightness(1) saturate(1) contrast(1) brightness(0.8);
      border: 4px solid white;
      box-shadow: inset 4px 5px 1px 1.5em;
      }
      `
    }</style>
    </div>
  )
}


export default MainContainer
