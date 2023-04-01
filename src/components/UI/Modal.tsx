import styled from "styled-components";
import React from "react";
import Button from "./Button";
import { Theme } from "../../styles/Theme";
import ReactDOM from "react-dom";

interface ModalInterface {
  title: string;
  message: string;
  show: boolean;
  closeModal(): void;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
  height: 200px;
  opacity: 1;
`;

const ModalTitle = styled.div`
  width: 100%;
  background-color: ${Theme.colors.primary};
  color: #fff;
  padding: 10px;
  font-weight: 900;
`;

const ModalMessage = styled.div`
  width: 100%;
  padding: 10px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px;
`;

const BackDrop = (props) => {
  return <ModalWrapper />;
};
const ModalOverlay = (props) => {
  return (
    <ModalContent>
      <ModalTitle>{props.title}</ModalTitle>
      <ModalMessage>{props.message}</ModalMessage>
      <ModalActions>
        <Button onClick={props.closeModal}>Chiudi</Button>
      </ModalActions>
    </ModalContent>
  );
};

const Modal: React.FC<ModalInterface> = (props) => {
  return (
    <>
      {props.show == true &&
        ReactDOM.createPortal(
          <ModalWrapper />,
          document.getElementById("backdrop-root")
        )}
      {props.show == true &&
        ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            closeModal={props.closeModal}
          />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

// const Modal: React.FC<ModalInterface> = (props) => {
//   return (

//     {props.userList.length > 0 && (
//         <Section content="content2">
//           {props.userList.map((user) => (
//             <SingleUser element={user} key={user.id} />
//           ))}
//         </Section>
//       )}

// {props.show}

// {props.show && (
//     <div></div>
//     <ModalWrapper>
//     <ModalContent>
//       <ModalTitle>{props.title}</ModalTitle>
//       <ModalMessage>{props.message}</ModalMessage>
//     </ModalContent>
//   </ModalWrapper>
//   )}

//   );
// };

export default Modal;
