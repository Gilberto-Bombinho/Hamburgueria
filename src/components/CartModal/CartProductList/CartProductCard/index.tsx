import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, IProduct } from '../../../../providers/cartContext';

interface CartProductCardProps {
  filteredProduct: IProduct;
}

const CartProductCard = ({ filteredProduct }: CartProductCardProps) => {
  const { deleteProductCart } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={filteredProduct.img} alt={filteredProduct.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {filteredProduct.name}
        </StyledTitle>
        <button
          onClick={() => deleteProductCart(filteredProduct.id)}
          type='button'
          aria-label='Remover'
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
