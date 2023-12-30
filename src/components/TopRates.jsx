import { Price } from "./price";
import starIcon from "../icons/star-icon.svg"
import { Link } from "react-router-dom";
export function TopRates({topRates}){
  
    return(
        <>
         <p className='all-products'>TOP-RATED:-</p>
        <div className='underline'></div>
        <ul className='list-items'>
        <Link to={`/item/${topRates[0].id}`} state={{data:topRates[0]}} className='list-items'>
           <li className='list-item'>
           <img src={topRates[0].image} />
           <p className='item-name'>{topRates[0].name}</p>
          
           <p className='rating'>{topRates[0].ratingRate}
           <img src={starIcon}/></p>
          
           <Price item={topRates[0]}/>
           <p className='description'>{(topRates[0].description).slice(0,150)+"....."}</p>
         
           </li>
           </Link>

           <Link to={`/item/${topRates[1].id}`} state={{data:topRates[1]}} className='list-items'>
           <li className='list-item'>
           <img src={topRates[1].image} />
            <p className='item-name'>{topRates[1].name}</p>
            <p className='rating'>
               {topRates[1].ratingRate}<img src={starIcon}/>
               </p>
           <Price item={topRates[1]}/>
           <p className='description'>{(topRates[1].description).slice(0,150)+"....."}</p>
           </li>
           </Link>
            
        </ul>
        </>
        
    )
}
