
import React, { useState } from "react";
import toast from "react-hot-toast";
import TodoServices from "../Services/TodoServices";

const EditTodo = ({task, setShowModal,getUserTask}) => {
  const [title, setTitle] = useState(task?.title);
  // console.log(task.task.title)
  const [description, setDescription] = useState(task?.description);
  const [isCompleted, setIsCompleted] = useState(task?.isCompleted);


  const handleClose = () => {
    setShowModal(false);
  };

  const handleSelectChange = (e)=>{
    setIsCompleted(e.target.value);

  };
  // console.log(isCompleted);
  


// console.log(task);
  const id = task?._id;
  
  
// update
  const handleSubmit = async() => {
    
    try {
      const userData = JSON.parse(localStorage.getItem("mern3Todo"));
    
      const createdBy = userData && userData.user.id;
      console.log(userData.user.id);
      const data = {title,description,createdBy,isCompleted};
      
      if(! title || !description){
        return toast.error("please provide the data");
      }
      // console.log(id);
      // console.log(data);
      await TodoServices.updateTodo(id,data);
      setShowModal(false)
      toast.success("task updated successfully");
      // console.log(todo);
      setTitle("");
      setDescription("");
      getUserTask();
      
    } catch (error) {
      console.log(error.message)
      toast.error(error)
    }
  };
  return (
    <>
      {task && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">update task</h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true"> &times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label> <br />
                  <input
                    type="text"
                    className="form-contorl"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatigTextarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatigTextarea">Description</label>
                </div>
                <div className="my-3">
                  <select className="form-select" onChange={handleSelectChange}>
                    <option selected >select status</option>
                    <option value={true}>completed</option>
                    <option value={false}>incompleted</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
