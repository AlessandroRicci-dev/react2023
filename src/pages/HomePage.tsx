import React, { useRef, useState } from "react";
import Main from "../components/layouts/Main";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Section from "../components/UI/Section";
import SingleUser from "../components/UI/SingleUser";
import { v4 as uuid } from "uuid";
import { User } from "../App";
import Modal from "../components/UI/Modal";
// import Modal from "./../components/UI/Modal";

interface Home {
  userList: User[];
  onSave(element: User): void;
}

const Homepage: React.FC<Home> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>();
  const ageInputRef = useRef<HTMLInputElement>();

  const [userName, setUsername] = useState(null);
  const [showModalError, setShowModalError] = useState<boolean>(false);
  const [age, setAge] = useState<number>(null);

  // const onChangeUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const onChangeAge = (e) => {
  //   setAge(e.target.value);
  // };

  const onClickHandler = () => {
    if (nameInputRef.current?.value && ageInputRef.current?.value) {
      let age = parseInt(ageInputRef.current?.value, 10);
      props.onSave({
        id: uuid(),
        user: nameInputRef.current?.value,
        age: age,
      });
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else {
      setShowModalError(true);
    }
  };
  const closeModal = () => {
    setShowModalError(false);
  };
  return (
    <Main>
      <Section marginTop="50px" content="content">
        <Input
          reference={nameInputRef}
          type="text"
          label="Username"
          // onChangeHandler={onChangeUsername}
        />
        <Input
          reference={ageInputRef}
          type="number"
          label="Age (Years)"
          // onChangeHandler={onChangeAge}
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
      <Modal
        show={showModalError}
        title="Errore"
        message="empty values"
        closeModal={closeModal}
      />
    </Main>
  );
};

export default Homepage;
