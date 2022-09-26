import GarbgeIcon from "../../assets/images/bin.png";
import EditIcon from "../../assets/images/draw.png";
import Check from "../../assets/images/check.png";
import { useState } from "react";

import { TaskBoxComponent } from "../../components/TaskBox/style";

export interface ITask {
  textType: string;
}

interface Props {
  text: ITask["textType"];
  handleRemoveTask: Function;
  handleUpdateValue: Function;
  handleMarkTask: Function;
  index: number;
}

function TaskBox({
  text,
  handleRemoveTask,
  index,
  handleUpdateValue,
  handleMarkTask,
}: Props) {
  const [isEditing, setEditing] = useState(false);
  const [newTextUpdate, setNewTextUpdate] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewTextUpdate(event.target.value);
  };

  return (
    <TaskBoxComponent>
      <div className="container-task-box">
        <li>
          <div className="taskBox-items">
            <div className="input-check-container">
              <input
                className="checkBox-style"
                id="toggle"
                type={"checkbox"}
                onChange={() => handleMarkTask(index)}
              />
              {isEditing ? (
                <input
                  className="inputText"
                  type="text"
                  defaultValue={text}
                  onChange={handleChange}
                />
              ) : (
                <div className="divOfLabel">
                  <label className="inputLabel">{text}</label>
                </div>
              )}
            </div>

            <div className="icons-container">
              {isEditing ? (
                <button
                  onClick={() => {
                    setEditing(false);
                    handleUpdateValue(newTextUpdate, index);
                  }}
                >
                  <img className="editIcon" src={Check} alt={"EditIcon"} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditing(true);
                  }}
                >
                  <img className="editIcon" src={EditIcon} alt={"EditIcon"} />
                </button>
              )}

              <button onClick={() => handleRemoveTask(index)}>
                <img
                  className="garbgeIcon"
                  src={GarbgeIcon}
                  alt={"GarbgeIcon"}
                />
              </button>
            </div>
          </div>
        </li>
      </div>
    </TaskBoxComponent>
  );
}

export default TaskBox;
