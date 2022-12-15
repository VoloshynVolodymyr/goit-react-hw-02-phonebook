import styled from "@emotion/styled";

export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.mainButtonColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(25)};
  font-weight: bold;
`

export const Span = styled.span`
  font-weight: bold;
`

export const List = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`