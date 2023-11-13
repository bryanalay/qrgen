import { useState } from 'react'
import './App.css'
import QRComponent from './components/QRComponent'
import qr from 'qrcode'

function App() {
  const [data, setData] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [qrCode, setQRCode] = useState(null)

  const generateQR = () => {
    data && qr.toDataURL(data, { errorCorrectionLevel: 'L' }, (err, url) => {
      if (err) {
        console.error(err)
      } else {
        setQRCode(url)
        setMostrar(true)
      }
    })
  }

  return (
    <div className="h-screen grid grid-rows-2 sm:grid-cols-2 font-bold font-serif min-w-[400px]">
      <div className="h-full w-full sm:h-screen bg-slate-100 grid place-content-center gap-6">
        <h1 className='font-bold text-3xl'>Get QR Code:</h1>
        <input
          className="border-solid border-black border rounded-md w-60 h-9 font-normal p-2"
          type="text"
          placeholder="Insertar enlace o texto para QR"
          value={data}
          onChange={(evt) => setData(evt.target.value)}
        />
        <button
          className={`border-solid border-black border rounded-md w-28 h-9 bg-black text-white 
          ${data == '' && ' pointer-events-none opacity-60'}`}
          onClick={generateQR}
        >
          Gen
        </button>
      </div>
      <QRComponent qrCode={qrCode} mostar={mostrar}/>
    </div>
  )
}

export default App
