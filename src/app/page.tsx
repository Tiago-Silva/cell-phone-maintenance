import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import HomeSection from "@/app/components/home/homeSection";
import CourseInformationSection from "@/app/components/courseInformationSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
          <HomeSection />
          <CourseInformationSection />
      </main>
    </div>
  );
}
