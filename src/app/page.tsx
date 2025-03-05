import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import HomeSection from "@/app/components/home/homeSection";
import CourseInformationSection from "@/app/components/courseInformationSection";
import TreeSection from "@/app/components/treeSection/treeSection";
import Bonus from "@/app/components/bonus/bonus";
import Price from "@/app/components/price/price";
import Guarantee from "@/app/components/guarantee/guarantee";
import Questions from "@/app/components/questions/questions";
import About from "@/app/components/about/about";
import Footer from "@/app/components/footer/footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.main}>
                <HomeSection/>
                <CourseInformationSection/>
                <TreeSection/>
                <Bonus/>
                <Price/>
                <Guarantee/>
                <Questions/>
                <About/>
            </main>
            <Footer/>
        </div>
    );
}
