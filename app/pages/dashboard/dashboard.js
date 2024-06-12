import Footer from "../../components/Dashboard/Footer";
import Header from "../../components/Dashboard/Header";
// import Sidebar from "../components/Dashboard/Sidebar";
import styles from "../components/Dashboard/styles/Dashboard.module.scss";
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.mainContent}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Dashboard;
