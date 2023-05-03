import React from "react";
import { DialogName, DialogMsg } from "./dialog/Dialog";
import "./dialogs.css"


let msgText = React.createRef()

function Dialogs(props) {
    let addMsg = () => {
        props.addMsg(msgText.current.value)
    }

    let onChangeMsg = () => {
        props.onChangeMsg(msgText.current.value)
    }
    console.log(props);

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog-names">
                    {props.dialogsPage.dialogNames.map((e) => <DialogName name={e.name} key={e.id} id={e.id} />)}
                </div>
                <div className="dialog-messages">
                    {props.dialogsPage.dialogMsgs.map((e) => <DialogMsg message={e.message} key={e.id} />)}
                </div>
            </div>
            <div className="send-msg">
                <input type="text" ref={msgText} value={props.newMsg} onChange={onChangeMsg} />
                <button onClick={addMsg}>SEND</button>
            </div>

        </div>
    )
}

export default Dialogs;
