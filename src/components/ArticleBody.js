import React, {Component} from "react";

class ArticleBody extends Component{
  render(){

 const {description,description_text} = this.props.lang;
            return (
              <div className="article__body">
              <h3 className="article__description">{description}</h3>
              <p className="article__description--text">{description_text}</p>
            </div>
            )
          }
  }


export default ArticleBody;