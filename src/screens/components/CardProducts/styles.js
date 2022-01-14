import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    width: 328px;
    margin: auto;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    position: relative;
`

export const RestaurantAdress = styled.div`

`

export const CardContainer = styled.div`
    display: flex;
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`

export const PhotoProduct = styled.img`
    width: 96px;
    height: 112px;
`

export const ProductName = styled.div`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #5cb646;
`

export const ProductDesciption = styled.div`
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    display: flex;
    padding: 10px;
    justify-content:flex-start;
`

export const ProductPrice = styled.div`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    font-weight: bold;
`

export const ProductCount = styled.div`
    display:flex;
    position: absolute;
    top: -1px;
    right: -1px;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 33px;
    border: 1px solid #5cb646;
    border-radius: 0px 10px 0px 10px;
    color: #5cb646;
    font-size: 16px;
`

export const ButtonRemove = styled.button`
    display:flex;
    width: 90px;
    height: 31px;
    padding: 8px 23px 9px 24px;
    border-radius: 10px 0px 10px 0px;
    border: solid 1px #e02020;
    font-family: Roboto;
    font-size: 16px;
    background-color: white;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
    justify-content: center;
    position: absolute;
    top: 82px;
    right: -1px;
`


