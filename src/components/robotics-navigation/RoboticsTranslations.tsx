"use client";
import {createContext,useContext,type ReactNode} from 'react';
const CopyContext=createContext<Record<string,string>>({});
export function RoboticsTranslations({copy,children}:{copy:Record<string,string>;children:ReactNode}){
 return <CopyContext.Provider value={copy}>{children}</CopyContext.Provider>;
}
export function useRoboticsTranslator(){
 const copy=useContext(CopyContext);
 return (locale:string,en:string,de?:string):string=>{
  if(locale==='en')return en;
  if(locale==='de')return de??en;
  const value=copy[en];
  if(value===undefined)throw new Error('Missing Robotics translation: '+locale+' / '+en);
  return value;
 };
}
