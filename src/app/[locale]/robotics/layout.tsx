import {CatalogueProvider} from '@/components/robotics-catalogue/CatalogueProvider';
export default function RoboticsLayout({children}:{children:React.ReactNode}){return <CatalogueProvider>{children}</CatalogueProvider>;}
