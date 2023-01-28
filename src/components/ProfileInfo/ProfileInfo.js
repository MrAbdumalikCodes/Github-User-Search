import React from 'react'
import loc from '../images/003-pin.svg'
import office from '../images/office.svg'
import logoUrl from '../images/url.svg'
import twitt from '../images/twit.svg'
import styles from '../App/App.module.css';
import notfound from '../images/notfound.gif'
export default function ProfileInfo(props) {
  const { name,login,created_at,bio,public_repos,followers,following,location,twitter_username,blog,company,avatar_url, } = props.items
  return (
    <>
    {props.items.item === 0 ? <h1></h1> : 
    props.items.message === 'Not Found' ? <div className={styles.boxis}><img className={styles.imgnot} src={notfound} alt="not" /></div> 
    :
    <div className={styles.profileInfo}>
    <div className={styles.profileImg}><img src={avatar_url} className={styles.images} alt="ottocat" /></div>
    <div className={styles.info}>
      <div className={styles.names}>
        <div className={styles.nameBox}>
          <div className={styles.full}>{name === null ? <div className={styles.infor}>Not Available</div> : name}</div>
          <div className={styles.nic}>{login}</div>
        </div>
        <div className={styles.age}>{created_at}</div>
      </div>
      <div className={styles.bioghraphy}>{bio === null ? <div className={styles.infor}>Not Available</div> : bio}</div>
      <div className={styles.follows}>
        <div className={styles.followers}>
          <div className={styles.txt}>Repos</div>
          <div className={styles.num}>{public_repos}</div>
        </div>
        <div className={styles.followers}>
          <div className={styles.txt}>Followers</div>
          <div className={styles.num}>{followers}</div>
        </div>
        <div className={styles.followers}>
          <div className={styles.txt}>Following</div>
          <div className={styles.num}>{following}</div>
        </div>
      </div>
        <div className={styles.urls}>
          <div className={styles.item}>
            <img src={loc} alt="locatiion" />
            {location === null ? <div className={styles.infor}>Not Available</div> : location}
          </div>
          <div className={styles.item}>
            <img src={twitt} alt="locatiion" />
            {twitter_username === null ? <div className={styles.infor}>Not Aviable</div> : twitter_username}
          </div>
          <div className={styles.item}>
            <img src={logoUrl} alt="locatiion" />
            {blog === "" ? <div className={styles.infor}>Not Available</div> : blog}
          </div>
          <div className={styles.item}>
            <img src={office} alt="locatiion" />
            {company === null ? <div className={styles.infor}>Not Available</div> : company}
          </div>
        </div>
    </div>
    </div>
    }
    </>
  )
}
