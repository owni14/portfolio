"use client";
import Footer from "./Footer";
import Header from "./Header";
import "@app/_plugins/i18n";
import { LangProvider } from "@app/contexts/Language";
import { ILayout } from "./types";
import "./styles.scss";

const Layout = ({ children }: ILayout) => {
    return (
        <LangProvider>
            <Header />
            <main id="root">{children}</main>
            <Footer />
        </LangProvider>
    );
};

export default Layout;
