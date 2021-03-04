import React from 'react'
import styles from './ProjectCard.module.css';
import logo from '../images/logo-mastercraft.svg';
import bookmark from '../images/icon-bookmark.svg';

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <img src={logo} alt="mastercraft logo" className={styles.logo}/>
      <h3 className={styles.projectname}>Mastercraft Bamboo Monitor Riser</h3>
      <p className={styles.projectinfo}>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className={styles.controlwrapper}>
        <button className={styles.btn}>Back this project</button>
        <img className={styles.bookmarkicon} src={bookmark} alt="bookmark icon"/>
      </div>
    </div>
  )
}

export default ProjectCard
