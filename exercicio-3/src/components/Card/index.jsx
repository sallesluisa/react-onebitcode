import styles from './styles.module.css'

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <div className={styles.links}>
        <a href={props.githubUrl} target='_blank' rel="noreferrer">GitHub</a>
        <a href={props.linkedinUrl} target='_blank' rel="noreferrer">LinkedIn</a>
        <a href={props.twitterUrl} target='_blank' rel="noreferrer">Twitter</a>
      </div>
    </div>
  )
}