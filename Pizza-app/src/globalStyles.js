import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    
  }
  body {
    font-family: 'Kanit', sans-serif;
  }
  h1,
  h2,
  h3 {
    margin: 0.5rem 0;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .row.center {
    align-items: center;
  }
  .col-1 {
    flex: 1;
  }
  .col-2 {
    flex: 2;
  }
  .block {
    background-color: #e0e0e0;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    width: 60%;
  }
  .text-right {
    text-align: right;
  }
  img.small {
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
  }
  .btn button {
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f0c040;
    cursor: pointer;
  }
  button.add {
    background-color: #40c0f0;
    width: 1.5rem;
  }
  button.remove {
    background-color: #f04040;
    width: 1.5rem;
  }
  button.badge {
    background-color: #f04040;
    border: none;
    color: #ffffff;
    width: 1.5rem;
  }
`;
