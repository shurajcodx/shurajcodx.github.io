import { FC } from "react";
import CodeContent from "../../components/CodeContent";
import IDCard from "../../components/IDCard";

const HelloPage: FC = () => {
  return (
    <div className="main-content">
      <section className="intro">
        <p>Hi all. I am</p>
        <h1>Shuraj Shampang</h1>
        <h2>&gt; Software engineer</h2>
      </section>
      <CodeContent />
      <IDCard />
    </div>
  );
};

export default HelloPage;
