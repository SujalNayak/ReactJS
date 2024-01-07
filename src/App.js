// import Footer from "./components/Footer";
// import { Header } from "./components/Header";
// import { EmployeeList } from "./crud/EmployeeList";
// import { AddEmployee } from './crud/AddEmployee'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from "./users/Navbar";
import { AddBook } from "./Book/AddBook";
import { BookList } from "./Book/BookList";
// import { pdfjs } from 'react-pdf';
// import { AddBookPdf } from './Book/AddBookPdf';
// import { PdfViewer } from './Book/PdfViewer';
import { LoginUser } from './components/Login';
import ProtectedRoutes from './hooks/ProtectedRoutes';
import { Students } from './components/students/Students';
// import { Students } from './components/students/Students';
function App() {
  return(
    <div>
      {/* <Header/> */}
      <Navbar/>
        <Routes>
          {/* <Route path="/EmployeeList" element={<EmployeeList/>}></Route> */}
          {/* <Route path="/AddEmployee" element={<AddEmployee/>}></Route> */}
          <Route path ="/" element={<LoginUser/>}></Route>
          <Route element = {<ProtectedRoutes/>}>
          <Route path="/AddBook" element={<AddBook/>}></Route>
          <Route path="/BookList" element={<BookList/>}></Route>
          

          </Route>
          <Route path='/Students' element={<Students/>}></Route>
          {/* <Route path="/AddBookPdf" element={<AddBookPdf/>}></Route> */}
          {/* <Route path="/PdfViewer" element={<PdfViewer/>}></Route> */}
        </Routes>
      {/* <Footer/> */}
    </div>
  )
}



// import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import { About } from './api/About';
// import { Home1 } from './api/Home1';
// import Navbar3 from './api/Navbar3';
// import { ApiDemo1 } from './api/ApiDemo1';
// import { ApiDemo2 } from './api/ApiDemo2';
// import { ApiDemo3 } from './api/ApiDemo3';
// import { PostApiDemo1 } from './api/PostApiDemo1';
// import { PostApi2 } from './api/PostApi2';
// import { PostApi3 } from './api/PostApi3';
// import { EmployeeList } from './crud/EmployeeList';
// import Footer from './components/Footer';

// function App(){
//   return(
//         <Navbar3></Navbar3>
//       <Routes>
//     <Route path="/home1" element={<Home1/>}></Route>
//     <Route path="/about" element={<About/>}></Route>
//     {/* <Route path="/services" element={<Services/>}></Route> */}
//     {/* <Route path="/portfolio" element={<Portfolio/>}></Route> */}

//     <Route path="/ApiDemo1" element={<ApiDemo1/>}></Route>
//     <Route path="/ApiDemo2" element={<ApiDemo2/>}></Route>
//     <Route path="/ApiDemo3" element={<ApiDemo3/>}></Route>
//     {/* <Route path="/PostApiDemo" element={<PostApiDemo/>}></Route> */}
//     <Route path="/PostApiDemo1" element={<PostApiDemo1/>}></Route>
//     <Route path="/PostApi2" element={<PostApi2/>}></Route>
//     <Route path="/PostApi3" element={<PostApi3/>}></Route>
//     <Route path="/EmployeeList" element={<EmployeeList/>}></Route>


//   </Routes>

   
    
//  )
// }











































// import { Home } from './components/Netflix/Home';
// import { Shows } from './components/Netflix/Shows';
// import { Movies } from './components/Netflix/Movies';
// import { Series } from './components/Netflix/Series';
// import { MovieDetail } from './components/Netflix/MovieDetail';
// import { Navbar1 } from './components/Navbar1';
// import { Navbar2 } from './components/Navbar2';
// import { home } from './home';
// import { ApiDemo1 } from './components/api/ApiDemo1';
// import { ApiDemo2 } from './components/api/ApiDemo2';
// import { Navbar } from './components/Navbar';




// function App() {

//   var age =20
//   var name = 'John'
//   var per = 0.5
//   var isTrue = false
//   var user = {
//     id:1,
//     name:"raj",
//     age:24
//   }

//   var students = [
//     {
//       id:1,
//       name:"amit",
//       age:23
//     },
//     {
//       id:2,
//       name:"neet",
//       age:26
//     },
//     {
//       id:2,
//       name:"ajay",
//       age:30
//     },

//     {
//       id:3,
//       name:"jeni",
//       age:20
//     }
//   ]

//   var title="ROYAL TECHNOSOFT"

//   return (
//     <div className="App">
//       <h1>name={name}</h1>
//       <h1>age={age}</h1>
//       <h4>isTrue = {isTrue==true?"TRUE":"FALSE"}</h4>
//       <h5>user = {user.name}</h5>
//       <h6>user = {user.age}</h6>
//       <h7>user = {user.id}</h7>

//       {
//         students.map((stu)=>{
//           return(
//             <ul>
//               <li>{stu.id}</li>
//               <li>{stu.name}</li>
//             </ul>
//           )
//         })
//       }

// //       {
//         students.filter((stu)=>{
//           return stu>25
//         }).map((stu)=>{
//           return(
//             <ul>
//               <li>{stu.id}</li>
//               <li>{stu.name}</li>
//               <li>{stu.age}</li>
//             </ul>
//           )

//         })
//       }

// //     </div>
//   );
// }

// <div className='App' style={{background:"#BAF9C8",height:"700px"}}>
// <Header/>
// <h1>APP COMPONENT</h1>
// <Footer/>
// </div>





{/* <div class name='App'> */}
{/* <StudentReg/> */}
{/* <ExamForm/> */}
{/* <Users t = {title}/> */}

// { <Navbar1></Navbar1>
//       <Routes>
//           <Route path ="/home" element={<Home/>}></Route>
//           <Route path ="/shows" element ={<Shows/>}></Route>
//           <Route path ="/movies" element ={<Movies/>}></Route>
//           <Route path ="/shows/series" element ={<Series/>}></Route>
//           <Route path = "/movie/detail/:name" element ={<MovieDetail/>}></Route>
//       </Routes>
//       <Footer/> }

{/* <Navbar2></Navbar2>
  <Routes>
      <Route path ="/home" element={<Home/>}></Route>
  </Routes>
  <Footer/> } */}

  // <div className='App'>
  {/* <Users t = {title}/> */}
  {/* <EmployeeForm/> */}
  {/* <StudentReg/> */}
  {/* <UserReg/> */}
  {/* <ExamForm/> */}
  {/* <UseStateDemo/> */}
  {/* <Navbar/>
  <Routes>
      <Route path ="/home" element={<Home/>}></Route>
      <Route path ="/shows" element ={<Shows/>}></Route>
      <Route path ="/movies" element ={<Movies/>}></Route>
      <Route path ="/shows/series" element ={<Series/>}></Route>
      <Route path = "/movie/detail/:name" element ={<MovieDetail/>}></Route>
      <Route path= "/apidemo1" element= {<ApiDemo1/>}></Route>
      <Route path= "/apidemo2" element= {<ApiDemo2/>}></Route>
      
  </Routes> 
  <Footer/>
  
</div> */}




export default App;