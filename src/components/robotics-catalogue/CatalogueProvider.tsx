"use client";
import {createContext,useContext,useState,useEffect,ReactNode} from 'react';
import {usePathname} from 'next/navigation';
type Selection=Record<string,number>;
type State={items:Selection;setQuantity:(id:string,n:number)=>void;add:(id:string)=>void;clear:()=>void};
const CatalogueContext=createContext<State|null>(null);
export function CatalogueProvider({children}:{children:ReactNode}){
 const pathname=usePathname();
 useEffect(()=>{const frame=requestAnimationFrame(()=>{if(!window.location.hash)window.scrollTo({top:0,left:0,behavior:'instant'})});return()=>cancelAnimationFrame(frame)},[pathname]);
 const [items,setItems]=useState<Selection>({});
 useEffect(()=>{const root=document.documentElement;const pointer=()=>{root.dataset.roboticsInput='pointer'};const keyboard=()=>{root.dataset.roboticsInput='keyboard'};document.addEventListener('pointerdown',pointer,true);document.addEventListener('keydown',keyboard,true);return()=>{document.removeEventListener('pointerdown',pointer,true);document.removeEventListener('keydown',keyboard,true);delete root.dataset.roboticsInput}},[]);
 const setQuantity=(id:string,n:number)=>setItems(previous=>{const next={...previous};const quantity=Math.min(99,Math.max(0,Math.floor(Number.isFinite(n)?n:0)));if(quantity)next[id]=quantity;else delete next[id];return next;});
 return <CatalogueContext.Provider value={{items,setQuantity,add:id=>setItems(p=>({...p,[id]:Math.min(99,(p[id]||0)+1)})),clear:()=>setItems({})}}>{children}</CatalogueContext.Provider>;
}
export function useCatalogue(){const value=useContext(CatalogueContext);if(!value)throw new Error('CatalogueProvider missing');return value;}
