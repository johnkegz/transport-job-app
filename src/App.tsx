import React from 'react';
import { getData } from './api'
import Card from './components/Card'
import Header from './components/Header';
import JobDetails from './jobDetails';

function App() {
  const [data, setData] = React.useState([])
  const [details, setDetails] = React.useState({})

  React.useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {
    const data: any = await getData();
    return setData(data)
  }

  const handleDetails = async (value: any) => {
    return setDetails(value)
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
        {Object.keys(details).length === 0 && data.length !== 0 && data.map((item: any) => (
          <Card item={item} handleDetails={handleDetails} key={item.id} />
        ))}
      </div>
      {Object.keys(details).length !== 0 ? <JobDetails item={details} setDetails={setDetails}/> : ""}

    </div>
  );
}

export default App;
