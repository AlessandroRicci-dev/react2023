import React, { useState } from "react";
import Main from "../components/layouts/Main";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Section from "../components/UI/Section";
import SingleUser from "../components/UI/SingleUser";
import { v4 as uuid } from "uuid";
import { User } from "../App";

interface Home {
  userList: User[];
  onSave(element: User): void;
}

const Homepage: React.FC<Home> = (props) => {
  const [userName, setUsername] = useState(null);
  const [age, setAge] = useState(null);
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onClickHandler = () => {
    if (userName && age) {
      props.onSave({
        id: uuid(),
        user: userName,
        age: age,
      });
    }
  };

  return (
    <Main>
      <Section marginTop="50px" content="content">
        <Input
          type="text"
          label="Username"
          onChangeHandler={onChangeUsername}
        />
        <Input
          type="number"
          label="Age (Years)"
          onChangeHandler={onChangeAge}
        />
        <Button onClick={onClickHandler}>Add User</Button>
      </Section>
      {props.userList.length > 0 && (
        <Section content="content2">
          {props.userList.map((user) => (
            <SingleUser element={user} key={user.id} />
          ))}
        </Section>
      )}
    </Main>
  );
};

export default Homepage;
