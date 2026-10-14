"use client";
import type {ReactNode} from 'react';
import s from './catalogue.module.css';
export default function SectionJump({target,children}:{target:string;children:ReactNode}){return <button type="button" className={s.jumpButton} onClick={()=>{const el=document.getElementById(target);el?.scrollIntoView({behavior:'auto',block:'start'});el?.focus({preventScroll:true});}}>{children} ↓</button>;}
