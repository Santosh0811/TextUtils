import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Alert from './Components/Alert'

export default function App() {

  const [mode, setMode] = useState("light")

  const [myStyle, setmyStyle] = useState({
    color : "Black",
    backgroundColor : "White",
})

const [btnText, setbtnText] = useState("Enable Dark Mode")

const [textColor, settextColor] = useState({
    color : "Black",
})

const [btnColor, setbtnColor] = useState({
    backgroundColor : "#0d6efd",
    color : "White"
})

const [alert, setAlert] = useState(null)

const showAlert = (type, message) => {
    setAlert({
        msg : message,
        typ : type
    })

    setTimeout(() => {
        setAlert(null)
    }, 3000);
}

const handleMode = () => {
    if(myStyle.color === "Black" && btnColor.backgroundColor === "#0d6efd" && mode === "light"){
        setmyStyle({
            color : "Black",
            backgroundColor : "#969799"
        })
        setbtnColor({
            backgroundColor : "Grey",
            color : "Black"
        })
        setMode("dark")
        settextColor({
            color : "White"
        })
        setbtnText("Enable Light Mode")
        showAlert("success", "Dark Mode Enabled")
        document.body.style.backgroundColor = "Black"
        document.title = "TextUtils - Dark Mode"
    }
    else{
        setmyStyle({
            color : "Black",
            backgroundColor : "White"
        })
        setbtnColor({
            backgroundColor : "#0d6efd",
            color : "White"
        })
        settextColor({
            color : "Black"
        })
        setMode("light")
        setbtnText("Enable Dark Mode")
        document.body.style.backgroundColor="White"
        document.title = "TextUtils - Light Mode"
    }

}

  return (
    <div>
      <Navbar title="TextUtils" aboutus="About US" showAlert={showAlert} setMode={setMode} settextColor={settextColor} mode={mode} btnText={btnText} textColor={textColor} toggleMode={handleMode} />
      <Alert alert={alert} />
      <Form heading="Text Utils App" showAlert={showAlert} myStyle={myStyle} textColor={textColor} btnColor={btnColor} />
    </div>
  )
}
