import styled from "styled-components";

export const Background = styled.div`
    
    height : 100%;
    background : url("https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/c658200b-dcc5-4183-936a-9c2fd946d2b4/MA-fr-20210607-popsignuptwoweeks-perspective_alpha_website_medium.jpg") center no-repeat;
    background-size : cover;
`;

export const Gradient = styled.div`
    width : 100%;
    z-index : 1;
    height : 100vh;
    background : rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
   

`;

export const Card = styled.div`
    position: absolute;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    top : 20%;
    
    color : white;
    
`;

export const CardTitle = styled.h1`
    font-size: 3.125rem;
    margin-bottom : 10px;
    
`;

export const CardSubtitle = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;

`;
export const CardInput = styled.div`


   
    
`;

export const CardForm = styled.form``;
export const FormInput = styled.input`
    outline-width: 0;
    padding: 10px;
    height: 45px;
    width: 30%;
    border: none;
    max-width: 600px;

`;
export const FormButton = styled.button`
    padding : 16px 20px;
    color : white;
    background-color: #e50914;
    border : none;
    font-weight: 600;
    cursor: pointer;
    border-top-left-radius: 0;
    border-left: 1px solid #333;
    font-size: 1.625rem;
    min-height: 47px;
`;
