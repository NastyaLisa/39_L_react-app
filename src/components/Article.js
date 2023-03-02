import React, { Component } from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import LangContext from "./lang-context";

class Article extends Component {
  render() {
    return (
      <LangContext.Consumer>
        {(context) => {
          return (
            <div className="article">
              {/* {this.props.children} */}
              <ArticleBody lang={context.lang} />
              <ArticleActions lang={context.lang} />
            </div>
          );
        }}
      </LangContext.Consumer>
    );
  }
}
export default Article;
