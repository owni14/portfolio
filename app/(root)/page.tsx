"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Scroll from "@/components/ui/scroll/Scroll";
import Me from "@/public/images/me.png";
import "./styles.scss";

import { NAMESPACE } from "../_plugins";

import { SKILLS } from "./consts";

const Home = () => {
  const { t } = useTranslation(NAMESPACE.ABOUT);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.opacity = "1";
          } else {
            element.style.opacity = "0";
          }
        });
      },
      { threshold: 0.55 }
    );

    sectionRefs.current.forEach(ref => {
      observer.observe(ref as HTMLElement);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="home">
      <section
        className="introduce-wapper"
        ref={el => {
          sectionRefs.current[0] = el;
        }}
      >
        <Image src={Me} alt="me" />
        <div className="introduce-sentence">
          <p className="introduce-sentence">{t("topIntro")}</p>
          <p className="introduce-sentence">{t("midIntro")}</p>
        </div>
        <Scroll />
      </section>
      <section
        className="skill-wrapper"
        ref={el => {
          sectionRefs.current[1] = el;
        }}
      >
        <p>{t("skill")}</p>
        <div className="icon-wrapper">
          {SKILLS.map(skill => {
            const SkillIcon = skill.icon;
            return (
              <div key={skill.id} className="icon-area">
                <SkillIcon className={skill.id} />
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Home;
