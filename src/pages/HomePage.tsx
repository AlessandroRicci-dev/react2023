import React from "react";
import Main from "../components/layouts/Main";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Section from "../components/UI/Section";
import Nav from "./../components/UI/Nav";

const Homepage: React.FC = () => {
  return (
    <Main>
      <Nav />
      <Section marginTop="50px">
        <Input type="text" label="Input" />

        <Button>Add User</Button>
      </Section>
    </Main>
  );
};

export default Homepage;
