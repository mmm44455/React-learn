import React from 'react';
import {Space,Table,Tag} from 'antd'
import { Link } from 'react-router-dom';
const render = ({Objin,ondelete,onEdit}) => {
  console.log(Objin);
    let stt = 0;
    const deleteItem = (Objitem,index) => {
      ondelete(Objitem,index);
    }
  const EditItem = (index) =>{
      onEdit(index);
  }
    const columns = [
        { title: 'STT', dataIndex: 'stt', key: 'stt' },
        { title: 'Họ và tên', dataIndex: 'name', key: 'name' },
        { title: 'Mã số sinh viên', dataIndex: 'mssv', key: 'mssv' },
        { title: 'Ngày sinh', dataIndex: 'date', key: 'date' },
        { title: 'Lớp', dataIndex: 'class', key: 'class' },
        { title: 'Khoa', dataIndex: 'khoa', key: 'Khoa' },
        {
            title: 'Xóa/sửa',
            dataIndex: 'operation',
            key: 'operation',
            // sử dụng render để xác định mỗi phần tử sẽ hiển thị trên danh sách
            render: (_, item, index) => {
              return(
                <>
                 <button 
                   type='button'
                   className='btn btn-danger'
                   onClick={()=> deleteItem(item,index)}
                 >
                  Delete
                 </button>

                <Link to={`edit/${item.key}`}>
                 <button 
                   type='button'
                   className='btn btn-warning'
                 >
                 Edit
                 </button>
                </Link>
                
                </>
             
            );
            }, 
        },
    ];
    const data =  Objin &&
    Objin.length > 0 &&
    Objin.map((el, index) => ({
      key: el.id,
      stt: ++stt,
      name: el.name,
      mssv: el.mssv,
      date: el.Date,
      class: el.nameclass,
      khoa: el.Khoa,
    }));
    const pageSize = 5; 
    const totalItems = data ? data.length : 0;

      return (
       <>   
        <Table dataSource={data} 
      columns={columns} 
      pagination={{ pageSize, total: totalItems, showSizeChanger: true }}
      size={'middle'}
      />
      
       </> 
     
      );
}
export default render;