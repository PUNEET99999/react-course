import React,{Component} from "react";

export class NewsItem extends Component{
  render(){
    let { title, description, ImageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifycontent: "flex-start",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !ImageUrl
                ? "https://images.wsj.net/im-732739/?width=1278&size=1"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank " className="btn btm-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}


export default NewsItem;
