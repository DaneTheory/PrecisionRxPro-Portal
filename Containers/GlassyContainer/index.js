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


const GlassyContainer = ({ children }) => {
  return (
    <div className="area">

      { children }

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <style jsx>
      {`


        .area {
          background-color: ${GreenFive.hex};
          background-image: linear-gradient(
            25deg,
            ${GreyTwo.hex} 0%,
            ${BlueOne.hex} 15%,
            ${BlueTwo.hex} 40%,
            ${GreenOne.hex} 65%,
            ${GreenFive.hex} 100%
          );
          width: 100%;
          height: 100vh;
          border: 1em solid rgb(243 243 243 / 80%);
          box-shadow: inset 0em 0em 2.2em #292929d4;
        }

        .circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0.7em 1em 0 rgba(31, 38, 135, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 40px;
          border: 1px solid ${CoolGrey.rgba(0.35)};
          animation: animate 25s linear infinite;
          bottom: -150px;
        }

        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .circles li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
        }

        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }

        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
        }

        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
        }

        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
        }

        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
        }

        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
        }

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }

          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}
      </style>
    </div>
  )
}


export default GlassyContainer
