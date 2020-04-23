import React, { } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'
import { toggleLogModal } from '../../redux/actions/actions'
import { useSelector } from 'react-redux'
import { isLogged } from '../../redux/actions/actions'
import UserProfile from '../../components/UserProfile/UserProfile'



const Wrapper = styled.div`
width: 54rem;
height: 30rem;
display: flex;
transition: 1s;
flex-direction: row;
z-index: 0;
`

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      padding               : '0',
      transform             : 'translate(-50%, -50%)'
    }
  };

   

function UserModal() {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal)
    const isUserLogged = useSelector(state => state.isLogged)
    const userData = useSelector(state => state.login)


    const closeModal = () => {
        dispatch(toggleLogModal())
    }

    const shouldBeOpen = () => {
            return modal && isUserLogged.isLogged ? true : false
    }

    const logOut = () => {
        dispatch(isLogged())
    }

    return (
        <Modal
            // isOpen={true}
            isOpen={shouldBeOpen()}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"> 
            <Wrapper>
                <UserProfile isLogged={isLogged} userData={userData} logOut={logOut}/>
            </Wrapper>     
        </Modal>
    )
}

export default UserModal
