import React from "react";
import { DialogName, DialogMsg } from "./dialog/Dialog";
import "./dialogs.css"



function Dialogs(props) {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog-names">
                    {props.dialogsPage.dialogNames.map((e) => <DialogName name={e.name} key={e.id} id={e.id}/>)}
                </div>
                <div className="dialog-messages">
                    {props.dialogsPage.dialogMsgs.map((e) => <DialogMsg message={e.message} key={e.id} />)}
                </div>
            </div>
            <div className="send-msg">
                <input type="text" />
                <button>SEND</button>
            </div>

        </div>
    )
}

export default Dialogs;
