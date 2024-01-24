import { useState, useEffect } from "react";

const Aside = ({ students, handleOnClick }) => {
  const [orderStatus, setOrderStatus] = useState(true);
  const [sortOrder, setSortOrder] = useState("Descending");
  const [orderedList, setOrderedList] = useState([]);
  const [cohortList, setCohortList] = useState([]);

  const sort = (cohortList) => {
    const yearInFront = cohortList.map((cohort) => {
      const cohortSeason = cohort.slice(0, cohort.length - 4);
      const cohortYear = cohort.slice(-4);
      return cohortYear + cohortSeason;
    });
    if (orderStatus === true) {
      const ascendingCohortList = yearInFront.sort().map((cohort) => {
        const cohortSeason = cohort.slice(4);
        const cohortYear = cohort.slice(0, 4);
        return cohortSeason + cohortYear;
      });
      setSortOrder("Descending");
      setOrderedList(ascendingCohortList);
    } else {
      const descendingCohortList = yearInFront
        .sort()
        .reverse()
        .map((cohort) => {
          const cohortSeason = cohort.slice(4);
          const cohortYear = cohort.slice(0, 4);
          return cohortSeason + cohortYear;
        });
      setSortOrder("Ascending");
      setOrderedList(descendingCohortList);
    }
    setOrderStatus(!orderStatus);
    return sortOrder;
  };

  useEffect(() => {
    if (students.length > 0) {
      const fullCohortList = students.map((student) => {
        return student.cohort.cohortCode;
      });
      const uniqueCohorts = [...new Set(fullCohortList)];
      sort(uniqueCohorts);
      setCohortList(uniqueCohorts);
    }
  }, [students]);

  return (

    <div className=" float-end mt-5 mb-5" style={{ width: "350px" }}>
      <h3>Choose a Class By Start Date</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => sort(cohortList)}
      >
        Sort {sortOrder} By Year
      </button>
      <ul className="list-group">
        {orderedList.map((cohort) => {
          const cohortSeason = cohort.slice(0, cohort.length - 4);
          const cohortYear = cohort.slice(-4);
          const formattedCohort = `${cohortSeason} ${cohortYear}`;
          
          return (
            <li
              onClick={() => handleOnClick(cohort)}
              key={cohort}
              className=" expand-lg list-group-item list-group-item list-group-item-primary"
            >
              {formattedCohort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;
