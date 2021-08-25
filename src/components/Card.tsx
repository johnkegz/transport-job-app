import React from 'react'

const Card = (props: any) => {
    return (
        <div className='card' onClick={() => props.handleDetails(props.item)}>
            <div className="cardSectionHeader">Job #{props.item.id}</div>
            <div className="cardSectionTime">Pick up</div>
            <div className="cardSection">{props.item.pickup_address.locality}</div>
            <div className="cardSectionTime">Delivery</div>
            <div className="cardSection">{props.item.delivery_address.locality}</div>
            <div className="cardSectionTime">
                Amount
            </div>
            <div style={{ display: 'flex' }} className="cardSection">
                <div>{props.item.reward.amount}</div>
                <div>{props.item.reward.currency}</div>
            </div>
            <div className="cardSectionTime">max_volume</div>
            <div className="cardSection">{props.item.max_volume_m3}</div>
        </div>
    )
}

export default Card
