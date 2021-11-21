import React, {useState} from 'react'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css'; 
// import '../../node_modules/jquery/dist/jquery.js'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

export const NewKdramaForm = (props) => {
    const [image, setImage] = useState(''); 
    const [title, setTitle] = useState(''); 
    const [streaming, setStreaming] = useState(''); 
    const [synopsis, setSynopsis] = useState(''); 
    const [review, setReview] = useState(''); 

    const handleSubmit = (e) => {
        props.addNewKdrama({image, title, streaming, synopsis, review}); 
        e.preventDefault(); 
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Enter new KDrama
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="titleInput">Image URL</label>
                            <input name="image" value={image} type="text" className="form-contorl" id="imageInput"
                             onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="titleInput">Title</label>
                            <input name="title" value={title} type="text" className="form-contorl" id="titleInput"
                             onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="streamingInput">Streaming</label>
                            <input name="streaming" value={streaming} type="text" className="form-contorl" id="streamingInput"
                            onChange={(e) => setStreaming(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="synopsisInput">Synopsis</label>
                            <input name="synopsis" value={synopsis} type="text" className="form-contorl" id="synopsisInput"
                            onChange={(e) => setSynopsis(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviewInput">Review</label>
                            <input name="review" value={review} type="text" className="form-contorl" id="reviewInput"
                            onChange={(e) => setReview(e.target.value)}/>
                        </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
   
    )
}