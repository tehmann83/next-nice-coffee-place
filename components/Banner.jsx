import styles from '../styles/banner.module.css';

const Banner = props => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Nice</span>{' '}
				<span className={styles.title2}>Coffee Place</span>
			</h1>
			<p className={styles.subTitle}>Discover your local coffee shops</p>
			<div className={styles.buttonWrapper}></div>
			<button className={styles.button} onClick={props.handleOnClick}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Banner;
