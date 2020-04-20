import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import method1 from '../../img/icons/method1.png'
import method2 from '../../img/icons/method2.png'
import method3 from '../../img/icons/method3.png'
import method4 from '../../img/icons/method4.png'
import { deliveryMethods } from '../../store/store'
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
div {
    height: 2.2rem;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    input {
        margin: 5px 10px 0 0;
    }
}
`
const PayWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const PayMethod = styled.div`
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
`
const SubmitWrapper = styled.div`
margin-top: 3rem;
`

const Coupon = styled.div`
input {
    margin-left: 10px;
}
`

function CartSummary({favouritesProducts, submitPursue}) {


    return (
        <Wrapper className="row">
            <div className="col-lg-8 col-12">
                <Text>Sposob dostawy:</Text>
                    <DeliveryWrapper>
                        {deliveryMethods.map(method => (
                            <div key={uuidv4()}>
                                <input type="radio" name="delivery" id={method.id}/> 
                                <label>{method.text} - {method.price}zl</label>
                            </div>
                        ))}
                    </DeliveryWrapper>
            </div>
            <div className="col-lg-4 col-12">
                <Text>Platnosc:</Text>
                    <PayWrapper>
                       <PayMethod img={method1}>
                            <input type="radio" name="delivery"/>
                            <span /> 
                       </PayMethod>
                       <PayMethod img={method2}>
                            <input type="radio" name="delivery"/>
                            <span /> 
                       </PayMethod>
                       <PayMethod img={method3}>
                            <input type="radio" name="delivery"/>
                            <span /> 
                       </PayMethod>
                       <PayMethod img={method4}>
                            <input type="radio" name="delivery"/>
                            <span /> 
                       </PayMethod>
                    </PayWrapper>
                    
                <SubmitWrapper>
                    <Coupon>
                        Uzyj kuponu
                        <input type="text"></input>
                    </Coupon>
                    
                    <Text>Do zaplaty: 327 zl</Text>
                    <ButtonLarge text={"Zrealizuj zamowienie"} submitPursue={submitPursue}/>
                </SubmitWrapper>

            </div>


        </Wrapper>
    )
}

export default CartSummary
