
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './router/form';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const api = 'https://657989c61acd268f9af94dbc.mockapi.io/api/v1/Student';
  const [obj, setObj] = useState([]);
  const callApi = ()=>{
    // const result = fetch(api).
    // then((response) =>response.json())
    // .then((json)=> {
    //  setObj(json);
    //   console.log(json);
    // })
    // .catch((err)=> console.log('err',err));
    const result = axios.get(api).then((response)=>
    {setObj(response.data)}
    ).catch((err)=>console.log(err))
  }
  useEffect(()=>{
      return ()=>callApi();
  },[]
  );

  // arrow function định nghĩa hàm trong js
  // trong trường hợp này thì nếu api đc gọi thành công nó sẽ trả về giá trị vào tham số đầu vào là item
  const onremove = (item)=>{
    console.log(item);
      axios.delete(`${api}/${item.key}`)
      .then((el) =>{
        alert('Bạn đã xóa thành công');
        callApi();
      })
}
  return (
    <>
       <div style={{width:'70%'}}>
        <h2>Danh sách thông tin nhân viên </h2>
   
        <Form Objin ={obj} ondelete={onremove} ></Form>
        </div>  
    </>
  )
}

export default App
