import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          image={faker.image.image()}
          content="Nice!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 1:25 PM"
          image={faker.image.image()}
          content="Cool!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 3:00 PM"
          image={faker.image.image()}
          content="Great Post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Seli"
          timeAgo="Yesterday at 4:00 PM"
          image={faker.image.image()}
          content="Ewh"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
