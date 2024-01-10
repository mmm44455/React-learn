import axios from "axios";
import { useRef,useState,useEffect } from "react";
import { Link ,useParams, useNavigate} from "react-router-dom";
const Addexit = () =>{
    let {id} = useParams();
    // lấy id từ trong URL được gán bằng api mà ta đã cho
    const api = 'https://657989c61acd268f9af94dbc.mockapi.io/api/v1/Student';
    const nameRef = useRef('');
    const mssvRef = useRef('');
    const classRef = useRef('');
    const khoaRef = useRef('');
    const dateRef = useRef('');
    const [err, setErr] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        if(id){
            const detailItem = axios
            .get(api+`/${id}`)
            .then((res) =>{
                nameRef.current.value = res.data.name;
                mssvRef.current.value= res.data.mssv;
                classRef.current.value = res.data.nameclass;
                khoaRef.current.value = res.data.Khoa;
                dateRef.current.value = res.data.Date;
            })
            .catch((err) => console.log(err,'err'));
        }
    },[])

    const vali = () =>{
        // tạo ra 1 mảng lưu trữ từ dữ liệu input đầu vào 
        const newObj = {
            name : nameRef.current.value,
            mssv: mssvRef.current.value,
            nameclass: classRef.current.value,
            Khoa: khoaRef.current.value,
            Date: dateRef.current.value,
        };
        const {name,mssv,nameclass,Khoa,Date} = newObj;
        if(name.trim()=== '' || !mssv || !nameclass||!Khoa||!Date){
            setErr({
                des: 'Dữ liệu không được để trống, vui lòng kiểm tra lại',
              });
            return false;
            }
 console.log(newObj);
            return newObj;
               
    }
        const addNewItem = () =>{
            const newObj = vali();
            axios.post(api,newObj)
            .then((res) =>{
                navigate('/student');
            })
            .catch((err)=>{
                console.log(err);
                alert('Đã xảy ra lỗi !');
            });
        };

        const editItem = () =>{
            const newObj = vali();
            axios.put(api +`/${id}`,newObj)
            .then((res) =>{
                navigate('/student');
            })
            .catch((err)=>{
                console.log(err);
                alert('Đã xảy ra lỗi !');
            });
        };

        const resetForm = () =>{
            nameRef.current.value = '';
            mssvRef.current.value='';
            classRef.current.value = '';
            khoaRef.current.value ='';
            dateRef.current.value = '';
            setErr(null);
        }

    return (
        <>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                mssv
              </label>
              <input
                ref={mssvRef}
                type="text"
                className="form-control"
                id="mssv"
                placeholder="0978899xxx"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                class
              </label>
              <input
                ref={classRef}
                className="form-control"
                id="class"
                
              ></input>
            </div>
           
            <div className="mb-3">
              <label htmlFor="khoa" typeof="text" className="form-label">
                khoa
              </label>
              <input
                ref={khoaRef}
                className="form-control"
                id="khoa"
                rows="3"
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="khoa" className="form-label">
                Date
              </label>
              <input
              type="text"
                ref={dateRef}
                className="form-control"
                id="date"
                rows="3"
              ></input>
            </div>

           {!id &&(
            <button
            type="button"
            onClick={addNewItem}
           
          >
            add new item
          </button>
           )}

            {id && (
          <button
            type="button"
            onClick={editItem}
          >
            Edit
          </button>
        )}
         <button
          type="button"
          onClick={resetForm}
         
        >
          Reset
        </button>
          
    <Link to="/student"><button >
              Canel
            </button>
    </Link>
    {err?.des && (
          <div className="alert alert-danger mt-2" role="alert">
            {err.des}
          </div>
        )}
           
          </div>
        </>
      );
}
export default Addexit