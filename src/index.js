import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    date="Today at 6 PM"
                    img={faker.image.avatar()}
                    comment="helo hello hello"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 8 PM"
                    img={faker.image.avatar()}
                    comment="good bye good bye"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    date="Today at 9 PM"
                    img={faker.image.avatar()}
                    comment="tra la la la!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
