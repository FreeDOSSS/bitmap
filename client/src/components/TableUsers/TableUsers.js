import React, { useState, useEffect, useCallback, memo } from "react";
import ReactPaginate from "react-paginate";
import * as styles from "./TableUsers.module.scss";
import axios from "axios";
import constants from "../../helper/constants";
import router from "../../helper/router";
import lodash from "lodash";
import { useHistory } from "react-router-dom";

const TableRow = memo(({ el }) => {
  const history = useHistory();
  const handleRedirect = useCallback(() => {
    history.push(`${router.users.path}/${el.id}`);
  }, [el, history]);
  return (
    <tr onClick={handleRedirect}>
      <td>{el.id}</td>
      <td>{el.first_name}</td>
      <td>{el.last_name}</td>
      <td>{el.email}</td>
      <td>{el.gender}</td>
      <td>{el.ip_address}</td>
      <td>{el.total_clicks}</td>
      <td>{el.page_views}</td>
    </tr>
  );
}, lodash.isEqual);

const TableUsers = () => {
  const [allPageCount, setAllPageCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [userList, setUserList] = useState(null);

  const hendlerPageSelected = data => setPageCount(data.selected + 1);

  useEffect(() => {
    const limit = 20;
    console.log(pageCount);
    axios
      .get(`${constants.getUrl}?page=${pageCount}&limit=${limit}`)
      .then(({ data }) => {
        setAllPageCount(data.allPage);
        setUserList(data.users);
      });
  }, [pageCount]);

  return (
    <>
      <div className={styles.tableWrp}>
        <table className={styles.table}>
          <thead className={styles.thead}>
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
          <tbody className={styles.tbody}>
            {userList && userList.map(el => <TableRow el={el} key={el.id} />)}
          </tbody>
        </table>
      </div>
      <div>
        <ReactPaginate
          previousLinkClassName={styles.prev}
          nextLinkClassName={styles.next}
          breakLabel={""}
          previousLabel={""}
          nextLabel={""}
          disabledClassName={styles.disabled}
          // nextClassName={styles.next}
          // previousClassName={styles.prev}
          pageCount={allPageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          pageLinkClassName={styles.page}
          onPageChange={hendlerPageSelected}
          containerClassName={styles.pagination}
          // subContainerClassName={"pages pagination"}
          activeClassName={styles.active}
        />
      </div>
    </>
  );
};

export default TableUsers;
