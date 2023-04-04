import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../providers/cartContext';

interface IcartModal {
  isOpen: boolean
}

function CartModal ({isOpen}: IcartModal) {

  const {setOpenModal} = useContext(CartContext)

  if(isOpen){
    return(
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {setOpenModal(false)}}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          <CartProductList />
  
          <div className='emptyBox'>
            
            <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
    )
  }
  return null
} 

export default CartModal;
