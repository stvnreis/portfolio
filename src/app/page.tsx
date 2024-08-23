'use client'

import { Navbar } from "@/components/navbar/Navbar";
import { PresentationSection } from "./components/presentation/PresentationSection";
import { ThemeSwitcher } from "@/components/theme-switcher/ThemeSwitcher";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function Home() {
  
  const { text, changeLanguage } = useLanguage()

  return (
    <section className="h-full w-full px-5 md:px-24">    
      <Navbar changeLanguage={changeLanguage} />  
      <PresentationSection text={text} />
    </section>
  );
}
