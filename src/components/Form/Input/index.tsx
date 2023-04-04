import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

const Input = () => (
  <fieldset>
    <StyledTextField label='Teste' type='text' />
    <StyledParagraph fontColor='red'>Testando</StyledParagraph>
  </fieldset>
);

export default Input;
