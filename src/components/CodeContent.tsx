import { FC } from "react";

const CodeContent: FC = () => {
  return (
    <div className="code-content  hide-on-tab-mobile">
      <div className="code-line">
        <span className="comment">// my number</span>
      </div>
      <div className="code-line">
        <span className="const">const</span> telephoneNum =
        <a className="string" href="tel:+9779845320407">
          +977 9845320407
        </a>
        ;
      </div>
      <div className="code-line">
        <span className="comment">// my e-mail</span>
      </div>
      <div className="code-line">
        <span className="const">const</span> email =
        <a className="string" href="mailto:shuraj.shampang@gmail.com">
          "shuraj.shampang@gmail.com"
        </a>
        ;
      </div>
      <div className="code-line">
        <span className="comment">
          // you can also see it on my Github page
        </span>
      </div>
      <div className="code-line">
        <span className="const">const</span> githubLink =
        <a
          className="string"
          href="https://github.com/shurajcodx"
          target="_blank"
        >
          "https://github.com/shurajcodx"
        </a>
        ;
      </div>
      <div className="code-line">
        <span className="comment">// you can check my LinkedIn page</span>
      </div>
      <div className="code-line">
        <span className="const">const</span> linkedinPage =
        <a
          className="string"
          href="https://www.linkedin.com/in/shuraj-shampang-9ab602b"
          target="_blank"
        >
          "https://www.linkedin.com/in/shuraj-shampang-9ab602b5"
        </a>
        ;
      </div>
    </div>
  );
};

export default CodeContent;
