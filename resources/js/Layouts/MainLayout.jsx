import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="App-container">
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">{children}</div>
            </section>
            <Footer />
        </div>
    );
}
