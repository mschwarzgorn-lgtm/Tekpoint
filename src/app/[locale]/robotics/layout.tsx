import {CatalogueProvider} from '@/components/robotics-catalogue/CatalogueProvider';
import RoboticsNav from '@/components/robotics-navigation/RoboticsNav';
import {RoboticsTranslations} from '@/components/robotics-navigation/RoboticsTranslations';
import {getRoboticsUI} from '@/lib/robotics-ui';
import s from '@/components/robotics-navigation/navigation.module.css';
export default async function RoboticsLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;return <CatalogueProvider><RoboticsTranslations copy={getRoboticsUI(locale)}><div className={s.scope}><RoboticsNav locale={locale}/>{children}</div></RoboticsTranslations></CatalogueProvider>;}
