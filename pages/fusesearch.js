import { Fragment, useEffect, useState } from 'react';
import Fuse from 'fuse.js'
import brands from '../list'

export default function Home() {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([])
  const options = {
    isCaseSensitive: false,
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    findAllMatches: false,
    minMatchCharLength: 3,
    // location: 0,
    threshold: 0.4,
    // useExtendedSearch: true,
    distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    keys: [
      "brand_name",
      "search_keyword"
    ]
  };
  

  useEffect(() => {
    const fuse = new Fuse(brands, options);
    const pattern = "panta";
    const results = fuse.search(search);
    setFiltered(results)
  }, [search]);
  console.log(filtered)
  return (
    <div className="container">
         <h1>fuse</h1>
         <div>
          <input type='text' name='search' onChange={(e)=>setSearch(e.target.value)}></input>
         </div>
      <ul>
        {filtered.map((item, index) => {
          let el = item.brand_name;
          return (
            <Fragment key={index}>
            <li>
              {item.matches[0].key === "brand_name" ? (
                <div>
                  <span>{item.matches[0].value.substring(0, item.matches[0].indices[0][0])}</span>
                  <b>{item.matches[0].value.substring(item.matches[0].indices[0][0], item.matches[0].indices[0][1])}</b>
                  <span>{item.matches[0].value.substring(item.matches[0].indices[0][1], item.matches[0].value?.length)}</span>
                </div>
              ) : (
                <div>{item.item.brand_name}</div>
              )}
              {item.item.search_keyword}
            </li>
            <br></br>
            </Fragment>
          ); 
        })}
      </ul>
    </div>
  )
}
