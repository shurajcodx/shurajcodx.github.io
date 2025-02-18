import { FC } from "react";
import { getUserInfo } from "../apis";

const CodeContent: FC = () => {
  const userDetails = getUserInfo();

  return (
    <div className="code-content">
      {userDetails.map((item, index) => (
        <div key={index}>
          <div className="code-line">
            <span className="comment">{item.comment.text}</span>
          </div>
          <div className="code-line">
            <span className="const">const</span> {item.const.name} =
            <a className="string" href={item.const.href} target="_blank">
              {item.const.value}
            </a>
            ;
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeContent;
