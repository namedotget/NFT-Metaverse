import classes from "./reward_collection.module.scss";
import { REWARDS } from "../../web3/thirdweb";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
const items = REWARDS;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div className={classes.reward} key={`reward${i}`}>
            <Image src={item.image} width={"200"} height={"200"} />
            <div className={classes.info}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        className={classes.paginate}
      />
    </>
  );
}

export default function RewardCollection(props) {
  return (
    <div className={classes.rewards}>
      <h2>Rewards</h2>
      <PaginatedItems itemsPerPage={1} />
    </div>
  );
}
