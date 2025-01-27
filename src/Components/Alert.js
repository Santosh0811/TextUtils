import React from 'react'

function Alert(props) {
  const capatilize = (word) => {
    let lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show mb-auto`} role="alert">
        <strong>{capatilize(props.alert.typ)}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
