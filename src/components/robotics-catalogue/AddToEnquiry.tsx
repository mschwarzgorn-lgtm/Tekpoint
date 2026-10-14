"use client";
import {useState} from 'react';
import {useCatalogue} from './CatalogueProvider';
import s from './catalogue.module.css';
export default function AddToEnquiry({id,locale}:{id:string;locale:string}){const {add}=useCatalogue();const [added,setAdded]=useState(false);const de=locale==='de';return <div><button className={s.primary} onClick={()=>{add(id);setAdded(true)}}>{de?'Zur Anfrageliste hinzufügen':'Add to enquiry list'} <span aria-hidden="true">+</span></button><span className={s.liveStatus} role="status">{added?(de?'Zur Liste hinzugefügt.':'Added to your list.'):''}</span></div>;}
