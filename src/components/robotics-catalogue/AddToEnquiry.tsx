"use client";
import {useRoboticsTranslator} from '@/components/robotics-navigation/RoboticsTranslations';
import {useState} from 'react';
import {useCatalogue} from './CatalogueProvider';
import s from './catalogue.module.css';
export default function AddToEnquiry({id,locale}:{id:string;locale:string}){const tr=useRoboticsTranslator();const {add}=useCatalogue();const [added,setAdded]=useState(false);const de=locale==='de';return <div><button className={s.primary} onClick={()=>{add(id);setAdded(true)}}>{tr(locale,"Add to enquiry list","Zur Anfrageliste hinzufügen")} <span aria-hidden="true">+</span></button><span className={s.liveStatus} role="status">{added?(tr(locale,"Added to your list.","Zur Liste hinzugefügt.")):''}</span></div>;}
