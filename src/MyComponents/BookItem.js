import './BookItem.css';
import BookThumbnail from '../my_images/default-book-thumbnail-bookstack.jpg';
export function BookItem(props) {
    console.log("hello world title:"+props.bookJSON);
    return (
        <div className="Book-Item">
                       
            <img src={BookThumbnail} className="Book-Thumbnail" alt="BookThumbnail"></img>
            <div className="myText">{props.bookJSON.title},{props.bookJSON.author}</div>
            <button className="button" type="button">More Info...</button>
            <button className="button" type="button">Delete</button>
            
        </div>
    );
}