"use client";
import Category from "@app/_components/_category";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Tag from "@app/_components/_tag";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { IFold } from "./types";
import { getCareer } from "./consts";
import { useTranslation } from "react-i18next";
import { NAMESPACE } from "@app/consts";
import "./styles.scss";

const Career = () => {
    const { t } = useTranslation(NAMESPACE.CAREER);
    const [isFold, setIsFold] = useState<IFold[]>([]);
    const careers = getCareer(t);

    /** Initial set up */
    useEffect(() => {
        setIsFold(careers.map(career => ({ id: career.id, state: true })));
    }, []);

    /** Click plus or minus button */
    const onClickFold = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const { id } = e.currentTarget;
        setIsFold(prev => prev.map(fold => (fold.id === id ? { ...fold, state: !fold.state } : fold)));
    };

    return (
        <section id="career">
            <Category category="Career" title={t("title")} />
            <div className="career-wrapper">
                {careers.map((career, idx) => (
                    <div
                        id={career.id}
                        key={career.id}
                        className={cx("career-detail", {
                            fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                        })}
                        onClick={onClickFold}>
                        <div
                            className={cx("career-title-area", {
                                fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                            })}>
                            <p>{career.job}</p>
                            <p
                                className={cx({
                                    fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                                })}>
                                {career.period}
                            </p>
                        </div>
                        <div className="career-info-area">
                            <div
                                className={cx("company-area", {
                                    fold: isFold[idx]?.id === career.id ? isFold[idx]?.state : true,
                                })}>
                                <div className="company-detail">
                                    <FaLocationDot />
                                    <p>{career.location}</p>
                                </div>
                                <div className="company-detail">
                                    <FaLink />
                                    <a href={career.link}>{career.link}</a>
                                </div>
                            </div>
                            <div className="company-area">
                                <div className="job-description">{career.jobDesc}</div>
                            </div>
                            <div className="company-area">
                                <Tag tags={career.tags} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
