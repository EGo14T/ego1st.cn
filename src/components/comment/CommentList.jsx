import React, { useEffect, useState } from "react";
import commentData from "../../api/test/comment.json";

export default function CommentList() {
    const data = commentData.data;

    const commentItem = (content) => {
        return (
            <div className="comment" key={content.comment_id}>
                <div className="user-popover">
                    <img className="avatar" src={content.avatar}></img>
                </div>
                <div className="content-box">
                    <div className="comment-main">
                        <div className="user-box">
                            <div className="username">{content.nickName}</div>
                            <span className="divide"></span>
                            <div className="comment-time">{content.create_time}</div>
                        </div>
                        <div className="content">{content.comment_content}</div>
                        <div className="limit-btn">展开</div>
                        <div className="action-box">
                            <div className="item">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                                <span>&nbsp;点赞</span>
                            </div>
                            <div className="item">
                                <i className="fa fa-comment-o" aria-hidden="true" />
                                <span style={{ marginLeft: "3px" }}>{content.comment_replies ? content.comment_replies.length : "回复"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="subcomment-wrapper">
                        <div className="sub-comment-list">{content.comment_replies?.map((reply) => subCommentItem(reply))}</div>
                    </div>
                </div>
            </div>
        );
    };

    const subCommentItem = (reply) => {
        return (
            <div className="subcomment" key={reply.reply_id}>
                <div className="user-popover">
                    <img className="avatar" src={reply.avatar}></img>
                </div>
                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="user-box">
                            <div className="username">{reply.nickName}</div>
                            <span className="divide"></span>
                            <div className="comment-time">{reply.create_time}</div>
                        </div>
                        <div className="content">{reply.reply_content}</div>
                        {reply.reply_to_content && <div className="parent-wrapper">{`“${reply.reply_to_content}”`}</div>}
                        <div className="action-box">
                            <div className="item">
                                <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                                <span>&nbsp;点赞</span>
                            </div>
                            <div className="item">
                                <i className="fa fa-comment-o" aria-hidden="true" />
                                <span style={{ marginLeft: "3px" }}>&nbsp;回复</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="comment-list-wrapper">
            <div className="title">全部回复</div>
            <div className="comment-list">{data.map((content) => commentItem(content))}</div>
        </div>
    );
}
