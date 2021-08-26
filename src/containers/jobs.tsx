import React from 'react';
import { getData } from '../api'
import Card from '../components/Card'
import Header from '../components/Header';
import JobDetails from '../containers/jobDetails';
import {JobsDataType} from '../types/dataTypes';

const initialData = {
  id: 0,
  max_volume_m3: 0,
  pickup: {
    start: '',
    end: '',
  },
  pickup_address: {
    administrative_area: '',
    country_code: '',
    locality: '',
    line_1: '',
    postal_code: '',
  },
  delivery: {
    start: '',
    end: '',
  },
  delivery_address: {
    administrative_area: '',
    country_code: '',
    locality: '',
    line_1: '',
    postal_code: '',
  },
  reward: {
    amount: 0,
    currency: '',
  },
}

function Jobs() {
  const [data, setData] = React.useState<JobsDataType[]>([])
  const [details, setDetails] = React.useState(initialData)

  React.useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {
    const data: JobsDataType[] = await getData();
    return setData(data)
  }

  const handleDetails = async (value: JobsDataType) => {
    return setDetails(value)
  }

  const handleBack = () => {
    return setDetails(initialData)
  }

  return (
    <div className="container">
      <Header />
      <div style={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '20px',
      }}
        className='cardsContainer'
      >
        {details.id === 0 && data.length !== 0 && data.map((item: JobsDataType) => (
          <Card item={item} handleDetails={handleDetails} key={item.id} />
        ))}
      </div>
      {details.id !== 0 ? <JobDetails item={details} handleBack={handleBack} /> : ""}

    </div>
  );
}

export default Jobs;
