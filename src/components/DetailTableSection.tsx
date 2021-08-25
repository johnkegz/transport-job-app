import React from 'react'

function DetailTableSection(props: any) {
    return (
        <div className='detailSectionContainer'>
            <div className='detailSectionContainerTitle'>
                {props.title}
            </div>
            <div>
                {props.data.map((item: any, index: any) => (<div className='row' style={index % 2 === 0 ? { backgroundColor: 'white' } : {}} key={index}>
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
