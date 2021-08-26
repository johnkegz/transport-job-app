import React from 'react'
import { DetailsSectionType, DetailsType } from '../types/dataTypes'

function DetailTableSection(props: DetailsSectionType) {
    return (
        <div className='detailSectionContainer'>
            <div className='detailSectionContainerTitle'>
                {props.title}
            </div>
            <div>
                {props.data.map((item: DetailsType, index: number) => (<div className='row' style={index % 2 === 0 ? { backgroundColor: 'white' } : {}} key={index}>
                    <div className='tableLeft'>
                        {item.key}
                    </div>
                    <div className='tableRight'>
                        {item.parameter}
                    </div>
                </div>))
                }
            </div>
        </div>
    )
}

export default DetailTableSection
