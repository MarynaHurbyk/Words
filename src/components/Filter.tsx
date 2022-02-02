import React, { useState } from "react";

import "../css/filter.css";

interface SelectorProps {
  updateData:Function;
}

const Selector:React.FC<SelectorProps> = ({updateData}) => {
  const [state, setState] = useState("Select section");
  
  function handleSelectChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setState(event.target.value);
    updateData(state);
  }

  console.log({state});

  return (
    <>
    <select
      value={state}
      onChange={handleSelectChange}  onClick={() => { updateData((state))}}
      style={{ height: "37px", fontSize: "16px" }}
    >
      <option disabled>Select section</option>
      <option value="all">Tutti</option>
      <option value="house">La casa</option>
      <option value="people">Le persone</option>
      <option value="health">La salute</option>
      <option value="work">Il lavoro</option>
      <option value="educatoion">Lo studio</option>
    </select>
 </>
  );
};

interface SortProps{
  updateSortedData:Function;
}
const Sort:React.FC<SortProps> = ({updateSortedData}) => {
  const [sort, setSort] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "7px" }}>Sort for</div>
      <div className="form_radio_btn">
        <label>
        <input
          type="radio"
          name="sort"
          checked={sort}
          onChange={()=>{
            setSort(!sort); 
            updateSortedData("NameUp");
          }}
        />
        NameUp
        </label>
      </div>
      <div className="form_radio_btn">
        <label>
        <input
          type="radio"
          name="sort"
          checked={sort}
          onClick={()=>{setSort(!sort)
          updateSortedData("NameDown");
          console.log()
        }}
        />
        NameDown
        </label>
      </div>
    </div>
  );
};

interface Props {
  updateName:Function;
  updateSort:Function;
}
export const Filter: React.FC<Props> = ({ updateName , updateSort}) => {
  const [name, setName]=useState('Select section');
  const updateData=(value)=>{setName(value)};
  updateName(name);
  
  const [sortValue,setSortValue]=useState('NameUp');
  const updateSortedData=(value)=>{setSortValue(value)};
  updateSort(sortValue);

  return (
    <>
       <p> State: {name}</p>
       <p> Sort: {sortValue}</p>
      <form
        className="sort-form"
        style={{
          background: "#e7f1f7",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Selector updateData={updateData} />
        </div>
        <div>
           <Sort updateSortedData={updateSortedData}/>
        </div>
      </form>
    </>
  );
};


