import React from 'react'
import { AdressContainer, AdressContainerData, AdressContainerText, AmmountCointainer, AmmountValue, Button, ButtonContainer, CartCointainer, CartItems, MainContainerCart, PaymentMethod, PaymentMethodContainer, PaymentMethodText, Row, ShippingValue } from './styles'
import uncheckedButton from '../../assets/radiobutton-unchecked.svg'
import CardProducts from '../components/CardProducts/CardProdut'
import { useState } from 'react'

const Cart = () => {

    const [buyFood, setBuyFood] = useState([])
    // requisição para enviar os itens do carrinho
//     api
//     .post(`/restaurants/${buyFood.restaurant.id}/order`, body)
//     .then((response) => {
//       localStorage.removeItem("buyFood");
//       setBuyFood(undefined)
//       alert("Pedido Realizado!");
//     })
//     .catch((error) => {
//       alert("Erro");
//       console.log(error)
//     })
// }
// }

    return (
        <MainContainerCart>
            <AdressContainer>
                <AdressContainerText>
                    Endereço de entrega
                </AdressContainerText>
                <AdressContainerData>
                    Rua 3, 45
                </AdressContainerData>
            </AdressContainer>
            <CartCointainer>
                <CartItems>
                    <p>Carrinho vazio</p>
                    <CardProducts />
                </CartItems>

            </CartCointainer>
            <ShippingValue>Frete R$0,00</ShippingValue>
            <AmmountCointainer>
                <span>Subtotal</span>
                <AmmountValue><span>R$0,00</span>
                </AmmountValue>
            </AmmountCointainer>
            <span>Forma de pagamento</span>
            <Row></Row>
            <PaymentMethodContainer>
                <PaymentMethod> <img src={uncheckedButton} alt={"checkButton"} /><PaymentMethodText>
                    Dinheiro
                </PaymentMethodText> </PaymentMethod>
                <PaymentMethod> <img src={uncheckedButton} alt={"checkButton"} /><PaymentMethodText>
                    Cartão de crédito
                </PaymentMethodText></PaymentMethod>
            </PaymentMethodContainer>
            <ButtonContainer>
                <Button>
                    Confirmar
                </Button>
            </ButtonContainer>
        </MainContainerCart>
    )
}

export default Cart