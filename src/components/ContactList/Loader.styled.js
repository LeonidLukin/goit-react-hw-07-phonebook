import styled from '@emotion/styled';

export const Loader = styled.span`
display: inline-flex;
margin-left: 10px;
border: 7px solid rgba(255, 255, 255, 0.3);
border-top: 7px solid rgba(222, 184, 135, 0.5);
border-radius: 50%;
width: 10px;
height: 10px;
animation: spin 2s linear infinite;
box-shadow: 0px 0px 15px rgba(222, 184, 135, 0.5);
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    50% {
        background-color: rgba(255, 255, 255, 0.3);
    }
    100% {
        transform: rotate(360deg);
    }
}
`