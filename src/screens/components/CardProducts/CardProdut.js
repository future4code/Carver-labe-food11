import React, { useEffect, useState } from "react";
import { ButtonRemove, CardContainer, MainContainer, PhotoProduct, Product, ProductCount, ProductDesciption, ProductName, ProductPrice } from "./styles";

const CardProducts = () => {
    return (
        <MainContainer>
            <CardContainer>
                <PhotoProduct src={"https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/95588246-1173-4513-89DA-A6107AFECF60.png"} alt={"Photo"} />
                <Product>
                    <ProductName>
                        Stencil
                    </ProductName>
                    <ProductDesciption>
                        Pão, carne, queijo, cebola roxa, tomate, alface e molho
                    </ProductDesciption>
                    <ProductPrice>
                        R$46,00
                    </ProductPrice>
                </Product>
            </CardContainer>
            <ProductCount>
                1
            </ProductCount>
            <ButtonRemove>
                remover
            </ButtonRemove>
        </MainContainer>
    )
}

export default CardProducts