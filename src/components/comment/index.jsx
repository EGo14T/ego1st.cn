import React from "react";

export default function Comment() {
    return (
        <div className="comment-container">
            <div className="comment-form">
                <div className="avatar-box">
                    <img
                        className="avatar"
                        src="https://p26-passport.byteacctimg.com/img/user-avatar/ea69b45ebd149688f233dd1331b5f886~300x300.image"
                    ></img>
                </div>
                <div className="form-box">
                    <div className="input-box">
                        <div
                            contentEditable="true"
                            suppressContentEditableWarning
                            placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
                            className="comment-rich"
                        />
                        <div className="action-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
