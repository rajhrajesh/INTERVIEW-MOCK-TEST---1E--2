
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 70vh;
`

export const FormImg = styled.img`
  width: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  margin-top: 20px;
`

export const FormHead = styled.h1`
  color: #334155;
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Input = styled.input`
  color: #7b8794;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  margin-bottom: 30px;
  padding-left: 15px;
`

export const Select = styled.select`
  color: #334155;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid #7b8794;
  margin-bottom: 30px;
  padding-left: 15px;
`

export const Options = styled.option`
  color: #334155;
  font-size: 16px;
`

export const FormBtn = styled.button`
  color: #ffffff;
  background-color: #2563eb;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const FormErr = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`
