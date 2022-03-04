import styled from "styled-components";

export const FormGroup = styled.form`
  margin-top: -20px;

  .data {
    height: 48px;
    width: 100%;
    margin: 40px 0;
  }

  .btn {
    margin: 30px 0;
    height: 45px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }

  .btn button {
    height: 100%;
    width: 100%;
    background: #000;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  text-align: left;
  color: #000;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  color: #000;
  margin: 8px 0 16px;
`;

export const ButtonContent = styled.div`
  margin: 30px 0;
  height: 45px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;  

export const Inner = styled.div`
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  z-index: -1;
  background-image: linear-gradient(
    to right,
    #292929 0%,
    #414345 51%,
    #292929 100%
  );
  transition: all 0.5s;
`;