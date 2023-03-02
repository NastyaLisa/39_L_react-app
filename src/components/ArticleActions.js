import React, {Component} from "react";

class ArticleActions extends Component{

  render(){
    return (
      <div className="article__actions">
        <button className="article__btn">{this.props.lang.btn}</button>
      </div>
    );
  }
}

export default ArticleActions;

