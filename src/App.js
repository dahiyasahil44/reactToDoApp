import { useState } from "react";
import "./App.css";
import GroupInput from "./components/GroupInput";
import GroupList from "./components/GroupList";
import StatusList from "./components/StatusList";

function App() {
  const [groupList, setGroupList] = useState([]);
  const [apiData, setApiData] = useState([]);

  // Add Group
  const addGroup = (inputFrom, inputTo) => {
    // we are going to make first group
    if (groupList.length === 0) {
      if (
        Number(inputFrom) < 1 ||
        Number(inputTo) > 10 ||
        Number(inputFrom) > Number(inputTo)
      ) {
        alert("group values can be only 1 to 10");
        return;
      } else {
        let groupData = {
          inputFrom: inputFrom,
          inputTo: inputTo,
        };
        setGroupList([...groupList, groupData]);
      }
    } else {
      if (groupList.at(-1).inputTo === 10) {
        alert("Groups is already full. We can't add anymore");
        return;
      }

      if (inputFrom !== "") {
        if (inputTo !== "") {
          if (inputFrom !== groupList.at(-1).inputTo + 1) {
            alert(
              "Group from value should start from the next of previous group"
            );
            return;
          }

          if (inputTo > 10) {
            alert("Group end value can't be more than 10");
            return;
          }

          let groupData = {
            inputFrom: Number(inputFrom),
            inputTo: Number(inputTo),
          };
          setGroupList([...groupList, groupData]);
        } else {
          alert("Group End Value Empty");
        }
      } else {
        alert("Group start Value Empty");
      }
    }
  };

  const deleteGroup = (key) => {
    let newGroup = [...groupList];
    newGroup.splice(key, 1);
    setGroupList([...newGroup]);
  };

  let showStatus = async (groupList) => {
    setApiData([]);
    for (let j = 0; j < groupList.length; j++) {
      const urls = [];
      for (let i = groupList[j].inputFrom; i <= groupList[j].inputTo; i++) {
        urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
      }
      const promises = urls.map((url) => fetch(url));

      const data = await Promise.all(promises).then((responses) => {
        const dataPromises = responses.map((response) => response.json());
        return Promise.all(dataPromises);
      });
      console.log(data);
      setApiData((prev) => [...prev, data]);
    }
  };

  return (
    <>
      <div className="task-group">
        <GroupInput addGroup={addGroup} />

        <div className="groups-div">
          <p>My Groups</p>
          <hr />
          <div className="all-groups">
            {groupList.map((listItem, i) => {
              return (
                <GroupList
                  key={i}
                  inputFrom={listItem.inputFrom}
                  inputTo={listItem.inputTo}
                  deleteGroup={deleteGroup}
                />
              );
            })}
          </div>
          <button
            className="show-status-btn"
            onClick={() => {
              showStatus(groupList);
            }}
          >
            Show Status
          </button>
        </div>
      </div>

      <div className="task-status">
        {apiData.map((grp, i) => (
          <div key={i}>
            <>
              <p>Group {i + 1}</p>
              {grp.map((item) => (
                <StatusList
                  key={i}
                  group={item.group}
                  status={item.completed}
                  id={item.id}
                />
              ))}
            </>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
