import { ThumbsUp, Trash } from "@phosphor-icons/react";
import  style  from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment(props) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    function handleDeleteComment() {
        props.deleteComment(props.content);
    };

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/GustafXL.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Gustavo Linhares</strong>
                            <time title="08 de Setembro ás 11:40h" dateTime="2023-09-08 11:40:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
};