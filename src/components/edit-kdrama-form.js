import React from 'react'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class EditKdramaForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title : props.title,
            streaming : props.streaming,
            synopsis: props.synopsis, 
            review: props.review,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        const target = event.target; 
        const value = target.value; 
        const name = target.name; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateKdrama(this.state); 
        event.preventDefault(); 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titleInput">Title</label>
                    <input name="title" value={this.state.title} type="text" className="form-contorl" id="titleInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="streamingInput">Streaming</label>
                    <input name="streaming" value={this.state.streaming} type="text" className="form-contorl" id="streamingInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="synopsisInput">Synopsis</label>
                    <input name="synopsis" value={this.state.synopsis} type="text" className="form-contorl" id="synopsisInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="reviewInput">Review</label>
                    <input name="review" value={this.state.review} type="text" className="form-contorl" id="reviewInput"
                    onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        )
    }
}