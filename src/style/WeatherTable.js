import styled from 'styled-components';

export const TableWrapper = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '500px'};
margin-left: ${(props) => props.marginLeft || '100px'};
overflow-x: auto;
margin-bottom: 20px;
`

export const Table = styled.table`
border-collapse: collapse;
width: 80%;
border: 1px solid #E3E5E5;
font-family: sans-serif;
font-size: 16px;
`

export const TH = styled.th`
text-align: left;
padding: 10px;
font-family: sans-serif;
font-size: 13px;
width: 120px;
`
export const TD = styled.td`
text-align: left;
padding: 10px;
font-family: sans-serif;
font-size: 13px;
`

export const TR = styled.tr`
border-bottom: 1px solid #E3E5E5;
`

export const Input = styled.input`
    width: ${(props) => props.width || '78%'};
    height: ${(props) => props.height || '20px'};
    padding: 5px;
    padding-left: 10px;
    font-family: sans-serif;
    font-size: 12px;
    margin-top: ${(props) => props.marginTop || '10px'};
    margin-bottom: ${(props) => props.marginBottom || '10px'};
    margin-right: ${(props) => props.marginRight || '100px'};
    margin-left: ${(props) => props.marginLeft || '100px'};
    border: none;
    border-radius: 4px;
    background-color: #E3E5E5;
`

export const H1 = styled.div`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
`