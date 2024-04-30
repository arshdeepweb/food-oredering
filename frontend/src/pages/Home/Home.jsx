import React, {useState} from 'react'
import Header from '../../component/Header/Header'
import ExploreComponent from '../../component/ExploreComponent/ExploreComponent'
import MenuItem from '../../component/MenuItem/MenuItem'

function Home() {

  const [category, setCategory] = useState("All")


  return (
    <div className='mx-4'>
      <Header />
      <ExploreComponent category={category} setCategory={setCategory} />
      <MenuItem category={category}/>
    </div>
  )
}

export default Home