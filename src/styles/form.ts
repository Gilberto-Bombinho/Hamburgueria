import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input{
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: solid 1px #333333;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.primary}!important;
      outline-color: ${({ theme }) => theme.colors.primary}!important;
    }
  }
`;
