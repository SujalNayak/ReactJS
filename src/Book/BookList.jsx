import axios from "axios";
import React, { useEffect, useState } from "react";

export const BookList = () => {
  const [books, setbooks] = useState([]);

  const getBookData = async () => {
    const res = await axios.get("http://localhost:3001/book/getall");
    console.log(res.data.data);
    setbooks(res.data.data);
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div>
      <h1>BOOK LIST</h1>
        <table className="table table-hover table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QTY</th>
                    <th scope="col">GENERE</th>
                    <th scope="col">RATINGS</th>
                    <th scope="col">IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    books?.map((book) => {
                        return (
                            <tr>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.qty}</td>
                                <td>{book.genere}</td>
                                <td>{book.ratings}</td>
                                {/* <td><img src={`https://drive.google.com/uc?export=view&id=${book.googleDriveId}`} alt="no image" width="100px"/></td> */}
                                <td><embed src="{`https://drive.google.com/uc?export=view&id=${book.googleDriveId}`}" width="800px" height="2100px" /></td>
                            </tr>
                        )
                    })
                }
                </tbody>
        </table>
    </div>
  );
};