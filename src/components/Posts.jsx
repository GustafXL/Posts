import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import style from "./Posts.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Posts({ author, content, publishedAt }) {

    const [comments, setComments] = useState([
        'Post muito legal mano!'
    ])

    const [newCommentText, setNewComment] = useState('');

    const dateFromated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const dateDistanceNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function createNewComment(e) {
        e.preventDefault();

        const newComment = e.target.comment.value;

        setComments([...comments, newComment]);

        setNewComment('');
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    function handleNewCommentInvalid() {
        return event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time dateTime={publishedAt.toISOString()} title={dateFromated}>{ dateDistanceNow }</time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}> <a href="#">{line.content}</a> </p>
                    }
                })}

                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form onSubmit={createNewComment} className={style.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe seu comentário"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comments => {
                    return <Comment 
                    key={comments}
                    content={comments}
                    deleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}