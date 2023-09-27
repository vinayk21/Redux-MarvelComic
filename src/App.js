import './App.css';
import Home from './Componets/Home';
import Cartcomic from './Componets/Cartcomic';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const selector = useSelector((ele)=>ele?.cartitemdatas)
  const select = useSelector((cc)=>cc.removedata)
  let ids = selector?.map((e)=>e.id);
let datas = selector?.filter(({id},index)=> !ids.includes(id,index+1));
let selectid = select?.map((dd)=>dd.id)
console.log("s",selectid);
let maincartdata = datas?.filter(({id})=>!selectid.includes(id))
console.log("main",maincartdata);
console.log("dats",datas);
  return (
    <>
    <Routes>
      <Route path='/' element={<Home maincartdata={maincartdata}/>}/>
      <Route path='/cartcomic' element={<Cartcomic  maincartdata={maincartdata}/>}/>
      <Route path='*' element={<Navigate to={"/cartcomic"}/>}/>
    </Routes>
    </>
  );
}

export default App;
