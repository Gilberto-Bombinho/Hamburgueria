import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/cartContext';

const CartProductList = () => {

  const {filteredProducts, totalCart} = useContext(CartContext)

  return (
    <StyledCartProductList>
      <ul>
        {filteredProducts.map( filteredProduct => (
        <CartProductCard key={filteredProduct.id} filteredProduct={filteredProduct}/>
        )) }
      </ul>
  
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
          
        </StyledParagraph>
        <StyledParagraph className='total'> {totalCart().toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })} </StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
}

export default CartProductList;
