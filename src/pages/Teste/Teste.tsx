import { useState } from "react";
import TaskBox from "../../components/TaskBox";

import {TestWrapper} from "./style";

export function Test() {
  const [message, setMessage] = useState<string>("lol");

  const [inputMessage, setInputMessage] = useState<string[]>(["lol"]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value);
  };

  const makeTask = (markTesk: number) => {
    setTimeout(() => {
      const newMakeTask = [...inputMessage];
      newMakeTask.splice(markTesk, 1);
      setInputMessage(newMakeTask);
    }, 300);
  };

  const updateValue = (text: string, index: number) => {
    const newEditTask = [...inputMessage];
    newEditTask[index] = text;
    setInputMessage(newEditTask);
  };

  const addInputValue = () => {
    setInputMessage([...inputMessage, message]);
  };

  function onDeleteTask(taskToDelete: number): void {
    const newTaskList = [...inputMessage];
    newTaskList.splice(taskToDelete, 1);
    setInputMessage(newTaskList);
  }

  return (
    <TestWrapper>
      <div className="ContainerTask">

        <h1>TaskList</h1>

        <div className="addTaskBar">
          {/* <h1 className="h1Teste">{message}</h1> */}
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />

          <button onClick={() => addInputValue()}> Add </button>
        </div>

        <div className="task">
          <ul>
            {inputMessage.map((tweet, indice) => (
              <TaskBox
                text={tweet}
                key={indice}
                handleRemoveTask={onDeleteTask}
                handleUpdateValue={updateValue}
                handleMarkTask={makeTask}
                index={indice}
              />
            ))}
          </ul>
        </div>
      </div>
    </TestWrapper>
  );
}

export default Test;
