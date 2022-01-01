import React, { useState, useEffect, useRef } from "react";
import CommentList from "./CommentList";
import clsx from "clsx";
import { postComments } from "../../api/api";

export default function Comment(props) {
    const [focusInput, setFocusInput] = useState(false);
    const [content, setContent] = useState(null);

    const selectInput = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (focusInput) {
            document.addEventListener("click", clickCallback, false);
            document.addEventListener("keydown", keyDownCallback, false);
            return () => {
                document.removeEventListener("click", clickCallback, false);
                document.removeEventListener("keydown", keyDownCallback, false);
            };
        }
    }, [focusInput]);

    const onInputFocus = () => {
        setFocusInput(true);
    };

    const onInputBlur = () => {
        setFocusInput(false);
    };

    const clickCallback = (event) => {
        if (selectInput.current.contains(event.target)) {
            return;
        }
        setFocusInput(false);
    };

    const keyDownCallback = (event) => {
        var ctrlKey = event.ctrlKey || event.metaKey;
        var keyCode = event.keyCode || event.which || event.charCode;
        if (ctrlKey && keyCode == 13) {
            event.preventDefault();
            onsubmitComment();
        }
    };

    const onhandleChange = () => {
        setContent(inputRef.current.innerHTML);
    };

    const onsubmitComment = () => {
        postComments().then((res) => {});
    };

    const dealBtnClsx = () => {
        if (content) {
            return "button-enable";
        } else if (focusInput && !content) {
            return "button-disable";
        } else {
            return "button-blur";
        }
    };

    return (
        <div className="comment-container">
            <div className="comment-form">
                <div className="avatar-box">
                    <img
                        style={{ marginRight: "16px" }}
                        className="avatar"
                        src="https://p26-passport.byteacctimg.com/img/user-avatar/ea69b45ebd149688f233dd1331b5f886~300x300.image"
                    ></img>
                </div>
                <div className="form-box" ref={selectInput}>
                    <div className="input-box">
                        <div
                            ref={inputRef}
                            onInput={onhandleChange}
                            onFocus={onInputFocus}
                            contentEditable="true"
                            suppressContentEditableWarning
                            placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
                            className="comment-rich"
                            className={clsx("comment-rich", (focusInput || content) && "comment-rich-focus")}
                        />
                    </div>

                    <div className="action-box">
                        <div className="emoji" style={{ display: focusInput || content ? "inline" : "none" }}>
                            <i className="fa fa-smile-o" aria-hidden="true" />
                            <span style={{ marginLeft: "3px" }}>表情</span>
                        </div>
                        <div className="comment-submit">
                            <span>Ctrl + Enter</span>
                            <button className={clsx("submit-button", dealBtnClsx())} onClick={onsubmitComment} disabled={content ? false : true}>
                                发表评论
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CommentList /> */}
            评论功能开发中...
        </div>
    );
}
