import React, {useContext, useEffect, useState} from 'react'
import Header from '../../component/Header/Header'
import ExploreComponent from '../../component/ExploreComponent/ExploreComponent'
import MenuItem from '../../component/MenuItem/MenuItem'
import { StoreContext } from '../../context/StoreContext'

function Home() {

  const [category, setCategory] = useState("All")
  const {token} = useContext(StoreContext)

  useEffect(() => {
    {token?
      toast.success("User Login"):""}
  }, [])
  

  return (
    <div className='mx-4'>
      <Header />
      <ExploreComponent category={category} setCategory={setCategory} />
      <MenuItem category={category}/>
    </div>
  )
}

export default Home