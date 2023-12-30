

export function Price({item}){

    return(
        <>
        {item.isReduced===false ?<p className='price'>{"$"+parseFloat(item.price).toFixed(2)}</p>
        :<><p className='price'>{"$"+Math.round(item.price-item.price*(item.reducedPrice/100) ).toFixed(2)}
        <span className='non-reduced-price'>{"$"+parseFloat(item.price).toFixed(2)}</span></p>
        <span className='reduced-percent'>{item.reducedPrice+"%"} off!</span>
        </>
        }
        </>
    )
}