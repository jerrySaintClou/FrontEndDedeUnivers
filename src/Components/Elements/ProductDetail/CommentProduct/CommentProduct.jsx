import { Link } from "react-router-dom";
import classes from "./CommentProduct.module.css";
import { useState } from "react";
import Comments from "./Comments/Comments";
import FormComment from "./FormComment/FormComment";

export default function CommentProduct() {
    const [addButtonComment,setAddButtonComment] = useState(false);

    function addComment()
    {
        setAddButtonComment(true);
    }

    function closeComment()
    {
        setAddButtonComment(false);
    }
    return(
        <div className={classes.commentProduct}>
            <div className={classes.menuComment}>
                <Link 
                    className={addButtonComment? classes.linkCommentStyle2 : classes.linkCommentStyle} 
                    onClick={closeComment}
                >
                    Les commentaires
                </Link>

                <Link 
                    className={addButtonComment? classes.linkCommentStyle: classes.linkCommentStyle2} 
                    onClick={addComment}
                >
                    Ecrire un commentaires
                </Link>

            </div>

            {addButtonComment === false ? <Comments/>:<FormComment/>}
            
        </div>
    )
}