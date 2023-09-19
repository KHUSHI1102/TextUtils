import React from 'react'

interface AlertProps {
  alert: {
    type: string;
    msg: string;
  } | null;
}

  export default function Alert(props: AlertProps){
    return(
      props.alert && <div className="alert alert-secondary" role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
</div>
    )
} 