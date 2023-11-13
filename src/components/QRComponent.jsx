/* eslint-disable react/prop-types */

const QRComponent = ({qrCode,mostar}) => {
  return (
    <div className="w-full h-full sm:h-screen flex items-center justify-center bg-amber-50 ">
      {mostar && <img className='w-48 h-48' src={qrCode} alt="" />}
      <span className="absolute bottom-0 text-gray-400">@Copyright <a className="text-black font-bold" target="_blank" rel="noreferrer" href="https://github.com/bryanalay/qrgen" > Almidev - Github</a></span>
    </div>
  )
}

export default QRComponent