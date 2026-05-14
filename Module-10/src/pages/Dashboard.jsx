import styles from "./Dashboard.module.css";

function Dashboard() {
    const stats = [
        { label: "Total Tasks", value: "12" },
        { label: "Completed", value: "8" },
        { label: "Remaining", value: "4" },
    ];

    return (
        <div className={styles.dashboard}>
            {stats.map((stat, index) => (
                <div key={index} className={styles["dashboard-card"]}>
                    <h3>{stat.label}</h3>
                    <div className={styles["dashboard-stat"]}>
                        <span className={styles["dashboard-stat-label"]}>Status</span>
                        <span className={styles["dashboard-stat-value"]}>{stat.value}</span>
                    </div>
                    <p>Your current statistics</p>
                </div>
            ))}
        </div>
    );
}
export default Dashboard;
