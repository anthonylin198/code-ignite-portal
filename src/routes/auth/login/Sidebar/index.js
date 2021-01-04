import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.svg";
import setAuthToken from "../../../../utils/setAuthToken";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { SpinLoader } from "../../../../components/loaders";

// redux
import { useDispatch } from "react-redux";
import { loadUserAction } from "../../../../redux/actions/user";

const Sidebar = ({ signingIn, setSigningIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit the form -> use login
  const onSubmit = async (e) => {
    e.preventDefault();
    setSigningIn(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });
    try {
      const res = await axios.post("/api/auth/signin", body, config);
      localStorage.setItem("token", res.data.token);
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      dispatch(loadUserAction());
      history.push("/dashboard");
      setSigningIn(false);
    } catch (err) {
      setSigningIn(false);
      console.log("this is an error", err);
    }
  };

  let loading;
  if (signingIn) {
    loading = <SpinLoader />;
  }
  return (
    <Container>
      <LogoWrapper>
        {/* <img src={logo} alt="" /> */}
        <h3>CodeIgnite</h3>
      </LogoWrapper>
      <Form>
        <h3>Sign In</h3>
        <InputContainer>
          <StyledInput
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <Status />
        </InputContainer>
        <InputContainer>
          <StyledInput
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <Status />
        </InputContainer>
        <button onClick={(e) => onSubmit(e)}>Sign In</button>
        {loading}
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <Link to="signup">Sign Up</Link>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 500px;
  width: 70vw;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  /* max-width: 350px; */
  min-width: 400px;
  height: 60px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

export default Sidebar;
