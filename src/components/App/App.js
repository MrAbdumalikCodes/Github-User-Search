import styles from '../App/App.module.css';
import Header from '../Header/Header';

import React,{useState,useEffect} from 'react'
import InputSearch from '../InputSearch/InputSearch';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

export default function App() {
  const [items,setItems] = useState({item:0})
  const [users,setUsers]= useState("")
  const [click,setClick]= useState(false)
  const [loading,setLoading] = useState(false)
  const handleChange = event => {
    setUsers(event.target.value)
  }

  const submitHandler = () => {
    setClick(!click)
  }
  useEffect((event) => {
    if(users.length >= 1){
      fetch(`https://api.github.com/users/${users}`)
      .then(res => res.json())
      .then(js => {
        setItems(js)
        setLoading(false)
      })
    }
  },[click])
   return (
    <>
    <body className={styles['dark']}>
      <div className={styles.box}>
        <Header/>
        <InputSearch users = {users} handleChange = {handleChange} submitHandler = {submitHandler}/>
        {!loading ? <ProfileInfo items={items}/> : <h1>loading</h1>}
      </div>
    </body>
    </>
  )
}
