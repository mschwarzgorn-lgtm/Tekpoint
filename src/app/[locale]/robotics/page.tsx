import LegacyRobotics,{generateMetadata as legacyMetadata,generateStaticParams} from './LegacyRobotics';
import RoboticsLanding from './RoboticsLanding';
import {roboticsMetadata} from '@/lib/robotics-seo';
export {generateStaticParams};
export async function generateMetadata(props:{params:Promise<{locale:string}>}){const {locale}=await props.params;const existing=await legacyMetadata(props);if(!['en','de'].includes(locale))return existing;const updated=roboticsMetadata(locale,'landing');return {...updated,alternates:{...updated.alternates,languages:existing.alternates?.languages}};}
export default async function RoboticsPage(props:{params:Promise<{locale:string}>}){const {locale}=await props.params;return ['en','de'].includes(locale)?<RoboticsLanding {...props}/>:<LegacyRobotics {...props}/>;}
