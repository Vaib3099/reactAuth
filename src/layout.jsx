import { AllRoutes } from "./components/AllRoutes";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

export function Layout(){
    return <>
        <header className="">
            <NavBar />
            <AllRoutes />
            <Footer />
        </header>
    </>;
}