import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, IProduct } from '../../../providers/cartContext';

interface IProductCardProp {
  product: IProduct
}

function ProductCard({ product}: IProductCardProp) {

  const {addProductsCart} = useContext(CartContext)

  return (
    <StyledProductCard > 
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {product.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => addProductsCart(product)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
