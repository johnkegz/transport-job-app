import React from 'react'
import DetailsTile from '../components/DetailsTile';
import DetailTableSection from '../components/DetailTableSection'
import { JobDetailsDataType, DetailsType } from '../types/dataTypes';

const JobDetails = (props: JobDetailsDataType) => {
    const formatDate: (value: string) => string = (value: string) => {
        return new Date(value).toLocaleString();
    }

    const createDetailsData: (key: string, parameter: string | number) => DetailsType = (key: string, parameter: string | number) => ({ key: key, parameter: parameter });

    const deliveryData: DetailsType[] = [
        createDetailsData('Administrative area', props.item.delivery_address.administrative_area),
        createDetailsData('Country code', props.item.delivery_address.country_code),
        createDetailsData('delivery address line 1', props.item.delivery_address.line_1),
        createDetailsData('locality', props.item.delivery_address.locality),
        createDetailsData('Postal code', props.item.delivery_address.postal_code),
        createDetailsData('Delivery start date', formatDate(props.item.delivery.start)),
        createDetailsData('Delivery end date', formatDate(props.item.delivery.end)),
    ]

    const pickupData: DetailsType[] = [
        createDetailsData('Administrative area', props.item.pickup_address.administrative_area),
        createDetailsData('Country code', props.item.pickup_address.country_code),
        createDetailsData('Delivery address line 1', props.item.pickup_address.line_1),
        createDetailsData('Locality', props.item.pickup_address.locality),
        createDetailsData('Postal code', props.item.pickup_address.postal_code),
        createDetailsData('Pick start date', formatDate(props.item.pickup.start)),
        createDetailsData('Pick end date', formatDate(props.item.pickup.end)),
    ]

    const amountData: DetailsType[] = [
        createDetailsData('Amount', `${props.item.reward.amount} ${props.item.reward.currency}`),
    ]

    const max_volumeData: DetailsType[] = [
        createDetailsData('max_volume_m3', props.item.max_volume_m3),
    ]
    return (
        <div className='detailContainer'>
            <div className='backButtonSection'>
                <div className='jobDetailsButton'><button className='backButton' onClick={() => props.handleBack()}>Back</button></div>
                <DetailsTile id={props.item.id}/>
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
                    <DetailTableSection data={max_volumeData} title={'max_volume_m3'} />
                    <DetailTableSection data={amountData} title={'Reward'} />
                </div>
            </div>
        </div>
    )
}

export default JobDetails
