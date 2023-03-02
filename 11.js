import React, { Component } from "react";
import Article from "./components/Article";

const EN = {
  title: "NVIDIA news",
  subtitle: "NVIDIA Accelerated AI on Azure",
  btn: "Read",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  current_lang: "EN",
};
const UA = {
  title: "НОВИНИ NVIDIA ",
  subtitle: "Прискорений штучний інтелект NVIDIA в Azure",
  btn: "Читати",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  current_lang: "UA",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: EN,
    };
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }

  render() {
    const { lang } = this.state;
    const currentLang = lang.current_lang;

    return (
      <div className="wrapper">
        <h1 className="title">{lang.title}</h1>
        <Article lang={lang}>
          <div className="article__title">
            <h2>{lang.subtitle}</h2>
          </div>
        </Article>
        <div className="lang">
          <button
            onClick={this.SetLangUA.bind(this)}
            className={`${currentLang === 'UA' ? 'active' : ''} lang-btn`}
          >
            UA
          </button>
          <button
            onClick={this.SetLangEN.bind(this)}
            className={`${currentLang === 'EN' ? 'active' : ''} lang-btn`}
          >
            EN
          </button>
        </div>
      </div>
    );
  }
}

export default App;
