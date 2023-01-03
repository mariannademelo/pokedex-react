import { useContext } from "react";
import { SortContext } from "../../App";

const Sort = () => {

  const { hasSortChanged, toggleSortType } = useContext(SortContext);

  return (
    <div className="c-header__sort c-sort">
      <button onClick={ toggleSortType } className="c-sort__btn" data-type={ hasSortChanged ? 'name' : 'id' }>
        <div className="c-sort__type">
          { hasSortChanged ? 'A\nZ' : `#` }
        </div>
        <svg className="c-sort__arrow" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.01733 11.1082L8.76483 10.8557C8.59747 10.6883 8.32611 10.6883 8.15872 10.8557L5.17857 13.8531V0.428572C5.17857 0.191893 4.98668 0 4.75 0H4.39285C4.15617 0 3.96428 0.191893 3.96428 0.428572V13.8531L0.984128 10.8557C0.81677 10.6883 0.545412 10.6883 0.378019 10.8557L0.125518 11.1082C-0.0418394 11.2756 -0.0418394 11.5469 0.125518 11.7143L4.26839 15.8745C4.43575 16.0418 4.7071 16.0418 4.8745 15.8745L9.01737 11.7143C9.18472 11.5469 9.18472 11.2756 9.01733 11.1082Z" fill="#212121"/>
        </svg>
      </button>
    </div>
  );
}

export default Sort;