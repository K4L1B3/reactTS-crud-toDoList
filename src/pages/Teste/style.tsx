import styled from "styled-components";
// import TaskBox from "../components/TaskBox";
// export const StyledTaskBox = styled(TaskBox)`

//     color: pink;

// `; 
export const TestWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .ContainerTask {
    margin-top: 10%;
    background-color: #1b1b1b;
    padding: 7%;
    padding-top: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      color: #FFFFFF;
    }

  }

  .addTaskBar {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  
    input {
      border: none;
      border-radius: 20px;
      width: 500px;
      padding: 2%;
    }
    
    Button {
      
      padding: 2%;
      width: 100px;
      border: none;
      border-radius: 5px;
      
      /* FONT */
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      font-weight: 700;
      background-color: #0c0c0c;
      color: #FFFFFF;


    }
  }

`;