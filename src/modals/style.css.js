import styled from 'styled-components';

const ModalCart = styled.div`
    position: fixed;
    min-height: 760px;
    padding-top: 50px;
    top : 0%;
    left: 0%;
    z-index: 300;
    background-color: rgba(228, 224, 238, 0.5);
    overflow: auto;
    width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .modal-cart-main__sub{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 300;
    background-color: rgb(255, 255, 255);
    width: 30%;
    min-height: 760px;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.modal-cart-main__sub__top{
    display: flex;
    flex-direction: row;
    border-bottom : 1px solid rgb(236, 226, 226);
    height: 50px;
}

.modal-cart-main__sub__top__h5 h5{
    line-height: 30px;
    font-size: 17px;
    font-weight: 600;
    margin-left: 20px;
}

.modal-cart-main__sub__top__close{
    position: fixed;
    top : 2%;
    right: 0;
}

.modal-cart-main__sub__top__close img{
    width: 70%;
    margin-right: 5px;
    cursor : pointer;
    transition: 0.5s all ease-in-out;
}

.modal-cart-main__sub__top__close img:hover{
    transform: rotate(180deg);
}

.modal-cart-main__sub__product{
    /* padding-top : 40px;
    padding-bottom: 40px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid rgb(236, 226, 226);
    padding : 20px;
}

.modal-cart-main__sub__product__img{
    width: 20%;
}

.modal-cart-main__sub__product__img img{
    width: 100%;
    padding-left: 10px;
}

.modal-cart-main__sub__product__detail{
    width: 60%;
    padding-left: 10px;
}

.modal-cart-main__sub__product__quantity{
    width: 20%;
    padding-left: 10px;
    padding-right: 20px;
}

.btn-add-odd{
    width: 49%;
    height: 25px;
    border : 1px solid black;
    border-radius: 2px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all ease-in-out;
    position: relative;
}

.btn-add-odd:hover{
    background: rgb(226, 211, 211);
}

.btn-add-odd p{
    color: rgb(14, 0, 0);
    text-decoration: none;
    font-size: 15px;
    transition: .3s all ease-in-out;
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.btn-add-odd p:active{
    transform: translateY(4px) scale(1.3);
}

/* .modal-cart-main__sub__product__quantity input{
    width: 100%;
    display: inline-block;
    padding-left: 9px;
    padding-right: 9px;
    padding-top : 6px;
    padding-bottom: 6px;
    border: 1px solid red;
    border-radius: 3px;
    text-align: center;
} */

.modal-cart-main__sub__product__detail span{
    font-size: 16px;
}

.modal-cart-main__sub__total{
    border-top: 1px solid rgb(236, 226, 226);
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
}

.modal-cart-main__sub__total p{
    line-height: 50px;
    width: 60%;
    margin-left: 20px;
    color : rgb(184, 118, 118)
}

.modal-cart-main__sub__total h5{
    width: 40%;
    line-height: 30px;
    text-align: right;
    margin-right: 15px;
    font-weight: 600;
    font-size: 18px;
}

.modal-cart-main__sub__check-out{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
}

.modal-cart-main__sub__check-out button{
    width: 90%;
    padding : 10px;
    background-image: linear-gradient(to right,red,blue);
    color : white;
    text-transform: uppercase;
    font-size: 12px;
    border : none;
    transition: 0.3s all;
}

.modal-cart-main__sub__check-out:hover button{
    box-shadow: 2px 2px 2px 2px rgb(167, 35, 35);
}

.modal-cart-main__sub__check-out button:active{
    transform: translateY(4px);
}
`;

export default ModalCart;