import React, { useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import { deliveryMethods, payMethods } from '../../store/store'
import ButtonLarge from '../Buttons/ButtonLarge'

const Wrapper = styled.div`
width: 100%;
padding: 1rem;
`
const Text = styled.p`
font-size: 1.4rem;
font-weight: 500;
letter-spacing: 1.3px;
margin-top: 1rem;
`

const DeliveryWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
label {
    height: 2.2rem;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    input {
         margin: 7px 20px 0 0
    }
}
`
const PayWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const PayMethod = styled.label`
width: 50%;
margin-top: .6rem;
display: flex;
flex-direction: row;
align-items: center;
span {
    width: 80%;
    height: 4rem;
    background-image: url(${({img}) => img});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 10px;
}
input {
    width: 30px;
}
`
const SubmitWrapper = styled.div`
margin-top: 3rem;
`

const Coupon = styled.div`
input {
font-size: 1.4rem;
height: 3rem;
outline: none;
}
`




function CartSummary({favouritesProducts, submitPursue, totalPrice}) {

    useEffect(() => {
    
    }, [totalPrice])

    return (
        <Wrapper className="row">

            <div className="col-lg-8 col-12">
                <Text>Sposob dostawy:</Text>
                    <DeliveryWrapper>
                        {deliveryMethods.map(method => (
                            <label key={uuidv4()}>
                                <input type="radio" name="deliveryMethod" htmlFor="#deliveryMethod" id={method.id}/> 
                                <p id="deliveryMethod">{method.text} - {method.price}zl</p>
                            </label>
                        ))}
                    </DeliveryWrapper>

                <Coupon>
                     <Text>Uzyj kuponu:</Text>
                    <input type="text"></input>
                </Coupon>
                    
            </div>

            <div className="col-lg-4 col-12">
                <Text>Platnosc:</Text>
                    <PayWrapper>
                        {payMethods.map(method => (
                        <PayMethod key={method.id} img={method.img} id="payMethod">
                              <input type="radio" name="payMethod" htmlFor="#payMethod"/>
                              <span/> 
                         </PayMethod>
                        ))}
                    </PayWrapper>
                    
                    
                <SubmitWrapper>
                    <Text>Do zaplaty: {totalPrice} zl</Text>
                    <ButtonLarge text={"Zrealizuj zamowienie"} submitPursue={submitPursue}/>
                </SubmitWrapper>

            </div>


        </Wrapper>
    )
}

export default CartSummary
