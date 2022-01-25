import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import List from './List';

function App() {
  const [task, setTask] = useState(''); // name, setName
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      // display alert
      showAlert(true, 'danger', 'Please enter a task');
    } else if (task && isEditing) {
      // deal with edit
    } else {
      // show alert
      showAlert(true, 'success', 'Task added to the list.');
      // adding new tasks
      const newItem = { id: new Date().getTime().toString(), title: task };
      setList([...list, newItem]);
      setTask('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show: show, type: type, msg: msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'Empty List');
    setList([]);
  };

  const removeItem = (id) => {
    setAlert(true, 'danger', 'Task is accomplished!');
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section className="section__center">
      <form className="todolist__form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>To Do List</h3>
        <div className="form__control">
          <input
            type="text"
            className="todo__list"
            placeholder="e.g. study react"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn__submit">
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="todo_list_container">
          <List items={list} removeItem={removeItem} />
          <button className="btn__clear" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;