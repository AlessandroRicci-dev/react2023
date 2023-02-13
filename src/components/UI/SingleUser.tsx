import React from "react";
import styled from "styled-components";
import { User } from "../../App";

interface UserElementModel {
  element: User;
}

const UserElement = styled.div`
  display: flex;
  justify-content: left;
`;

const SingleUser: React.FC<UserElementModel> = (props) => {
  return (
    <UserElement>
      {props.element.user} {props.element.age} (years old)
    </UserElement>
  );
};

export default SingleUser;
