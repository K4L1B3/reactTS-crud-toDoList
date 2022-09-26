import styled from "styled-components";

export const TaskBoxComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .taskBox-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
  }

  .container-task-box {
    background-color: #000000;
    width: 200%;
    padding: 4%;
    margin-bottom: 5%;
    border-radius: 10px;
  }

  /* CHECK BOX STYLE */

  .input-check-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

  .checkBox-style {
      cursor: pointer;
      appearance: none;
      outline: none;
      background-color: #FFFFFF;
      height: 20px;
      width: 20px;
      border: 2px solid #FFFFFF;
      border-radius: 20%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .checkBox-style:before {
        content: '';
        position: absolute;
        border-radius: 0;
        background: none;
        height: 12px;
        width: 7px;
        position: absolute;
        opacity: 0;
        border-right: 3px solid turquoise;
        border-bottom: 3px solid turquoise;
        border-color: black;
        transform: rotate(45deg);
        top: -1px;
        
  }
  
  .checkBox-style:checked:before {
      opacity: 1;
    }
    
    /* END OF CHECK BOX STYLE */

    .icons-container {
        border: none;
        display: flex;
        gap: 15px;

        Button {
            
            background: none;
            border: none;

            img {
                width: 65%;
            }

        }
  }

  .divOfLabel {
    border-radius: 2px;
    width: 100px;
    padding: 0.2%;

    /* FONT */
    color: #ffffff;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
