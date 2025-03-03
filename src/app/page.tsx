import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import HomeSection from "@/app/components/home/homeSection";
import CourseInformationSection from "@/app/components/courseInformationSection";
import TreeSection from "@/app/components/treeSection/treeSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
          <HomeSection />
          <CourseInformationSection />
          <TreeSection />
      </main>
    </div>
  );
}
