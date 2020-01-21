import React from "react";
import "./styles.css";
import CompoundPagination from "./pagination";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 500);
  }, [currentPage]);

  return (
    <CompoundPagination
      currentPage={currentPage}
      totalPages={10}
      visibleItems={20}
    >
      {({ pages }) => {
        return <div>{JSON.stringify(pages)}</div>;
      }}
    </CompoundPagination>
  );
}
