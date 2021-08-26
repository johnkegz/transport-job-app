import React from 'react'

const DetailsTile = (props: { id: number; }) => {
    return (<div className='jobDetailsTitle'>
        Job #{props.id} details
    </div>
    )
}

export default DetailsTile
