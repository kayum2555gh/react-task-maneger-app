import React ,{useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import PopModal from '../../components/PopModal'
import TodoServices from '../../Services/TodoServices';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner';

const HomePage = () => {
  const[showModal,setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const[loading,setLoading] = useState(true);
  const[title,setTitle] = useState("");
  const [description, setDescription]= useState("");
  const [allTask, setAllTask] = useState([]);
  
  // handle model

  const openModalHandler = () =>{
    setShowModal(true)
  }

  // search
  const handleSearch = (e) =>{
    const query = e.target.value;
    let filterList = allTask.filter(item => item.title.toLowerCase().match(query.toLowerCase()));
    console.log("fltere list ", filterList);
    setSearchQuery(query);
    if(query && filterList.length >0){
      setAllTask(filterList && filterList);
    }else{
      getUserTask();
    }
  }

   const userData = JSON.parse(localStorage.getItem("mern3Todo"))
    const id = userData && userData.user.id
    const getUserTask =useCallback( async() =>{
      setLoading(true)
      try {
        const {data} = await TodoServices.getAllTodo(id);
        setLoading(false)
        setAllTask(data?.todos);
        
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    },[]);

  useEffect(()=>{
    getUserTask();
  },[getUserTask]);


  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="add-task">
          <h2>Your task</h2>
          <input type="search" placeholder='search your task' value={searchQuery} onChange={handleSearch}/>
          <button className='btn btn-primary' onClick={openModalHandler}>Create Task <i className="fa-solid fa-plus"></i></button>
          
        </div>

        {loading ? (<Spinner/>) :(allTask && <Card allTask ={allTask} getUserTask={getUserTask}/>)}
  
       
        <PopModal 
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        getUserTask={getUserTask}



        />
      </div>
      
    </>
    
    
  )
}

export default HomePage