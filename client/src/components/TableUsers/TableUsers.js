import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import * as styles from "./TableUsers.module.scss";
import axios from "axios";
import constants from "../../helper/constants";
const TableUsers = () => {
  const [allPageCount, setAllPageCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [userList, setUserList] = useState(null);

  const rowsStatistic = () => {
    const rows = [];
    if (!userList) return;
    for (let i = (pageCount - 1) * 16; i <= (pageCount - 1) * 16 + 16; i += 1) {
      //   userList[i]
      console.log(userList[i]);
      if (!userList[i]) break;
      rows.push(userList[i]);
    }
    return rows;
  };

  const hendlerPageSelected = data => setPageCount(data.selected);

  useEffect(() => {
    axios.get(constants.getUrl).then(({ data }) => {
      console.log(data.length);
      setAllPageCount(Math.ceil(data.length / 16));
      setUserList(data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Fisrt name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP addres</th>
            <th>Total clicks</th>
            <th>Total pageviews</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            rowsStatistic().map(el => (
              <tr key={el.id}>
                <td>{el.users_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={allPageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={hendlerPageSelected}
          containerClassName={styles.pagination}
          // subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default TableUsers;
