import { useEffect, useState } from 'react';
import brands from '../list';
import lunr from 'lunr';

const lunarPage = () =>{
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        //Building the search index
        var idx = lunr(function () {
        
            this.ref('id')
            this.field('brand_name')
            this.field('search_keyword')

            brands.forEach(function (doc) {
                this.add(doc)
            }, this)
        });
        let results = idx.search("Tools");
        setFiltered(results)
    },[])

    return(
    <>
    <h1>LUNAR</h1>
    <ul>
    {filtered.map((item, index) => {
        return (
            <li key={index}>
                <h4>{brands.filter((value, index, arr) => { return value.id == item.ref })[0].brand_name}</h4>
            {brands.filter((value, index, arr) => { return value.id == item.ref })[0].search_keyword}
            </li>
        )
    })}
    </ul>
    
    
    </>)
}

export default lunarPage