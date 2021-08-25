import React from 'react'
import DetailTableSection from './components/DetailTableSection'

const JobDetails = (props: any) => {
    const formatDate = (value: any) => {
        return new Date(value).toLocaleString()
    }

    const createDetailsData = (keyData: any, value: any) => ({ key: keyData, parameter: value });

    const deliveryData = [
        createDetailsData('Administrative area', props.item.delivery_address.administrative_area),
        createDetailsData('Country code', props.item.delivery_address.country_code),
        createDetailsData('delivery address line 1', props.item.delivery_address.line_1),
        createDetailsData('locality', props.item.delivery_address.locality),
        createDetailsData('Postal code', props.item.delivery_address.postal_code),
        createDetailsData('Delivery start date', formatDate(props.item.delivery.start)),
        createDetailsData('Delivery end date', formatDate(props.item.delivery.end)),
    ]

    const pickupData = [
        createDetailsData('Administrative area', props.item.pickup_address.administrative_area),
        createDetailsData('Country code', props.item.pickup_address.country_code),
        createDetailsData('Delivery address line 1', props.item.pickup_address.line_1),
        createDetailsData('Locality', props.item.pickup_address.locality),
        createDetailsData('Postal code', props.item.pickup_address.postal_code),
        createDetailsData('Pick start date', formatDate(props.item.pickup.start)),
        createDetailsData('Pick end date', formatDate(props.item.pickup.end)),
    ]

    const amountData = [
        createDetailsData('Amount', `${props.item.reward.amount} ${props.item.reward.currency}`),
    ]

    const hh = [
        createDetailsData('max_volume_m3', props.item.max_volume_m3),
    ]
    return (
        <div className='detailContainer'>
            <div className='backButtonSection'>
            <div className='jobDetailsButton'><button className='backButton' onClick={() => props.setDetails({})}>Back</button></div>
            <div className='jobDetailsTitle'>
                    Job #{props.item.id} details
                </div>
                
            </div>
            <div className='detailContainerSection'>
                <div className='deliveryAndPickupInfo'>
                    <div className='deliveryAndPickupInfoSection'>
                        <DetailTableSection data={pickupData} title={'Pickup address'} />
                    </div>
                    <div className="deliveryAndPickupMiddleSection">

                    </div>
                    <div className='deliveryAndPickupInfoSection'>
                        <DetailTableSection data={deliveryData} title={'Delivery address'} />
                    </div>
                </div>
                <div className='otherInfo'>
                    <DetailTableSection data={hh} title={'max_volume_m3'} />
                    <DetailTableSection data={amountData} title={'Reward'} />
                </div>
            </div>
        </div>
    )
}

export default JobDetails
