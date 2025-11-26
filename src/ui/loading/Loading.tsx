
"use client";
import React from "react";
import s from "./loading.module.css";

type LoadingProps = { message?: string; className?: string };

export default function Loading({ message, className }: LoadingProps) {
  return (
    <div className={`${s.loadingContainer} ${className ?? ""}`} role="status" aria-live="polite">
      <div className={s.logo}>
        <div className={s.shenBox}>
          <div className={s.shenText}>SHEN</div>
        </div>
        <div className={s.pey}>PEY</div>
      </div>
      {message ? <p className={s.message}>{message}</p> : null}
    </div>
  );
}

