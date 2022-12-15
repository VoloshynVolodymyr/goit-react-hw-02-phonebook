import styled from "@emotion/styled";

export const Form = styled.form`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.mainBgColor};
    width: 1040px;
    height: 250px;
    padding: 20px;
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    font-size: 24px;
    color: #673aee;
`
export const InputWrapper = styled.div`
  display: 'flex';
    flex-direction: row;
    justify-content:space-between;
    width: 400px;
    align-items: center;
    margin: 10px;
`

export const Label = styled.label`
  font-weight: bold;
`


export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.mainButtonColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(25)};
  font-weight: bold;
`

