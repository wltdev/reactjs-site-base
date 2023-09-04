import { ReactComponent as AboutIcon } from '@assets/img/icons/AboutIcon.svg';
import { ReactComponent as HomeIcon } from '@assets/img/icons/HomeIcon.svg';
import { ReactComponent as ProjectsIcon } from '@assets/img/icons/ProjectsIcon.svg';
import { ReactComponent as ServicesIcon } from '@assets/img/icons/ServicesIcon.svg';

type Data = {
    title: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const data: Data[] = [
    {
        title: 'Home',
        Icon: HomeIcon
    },
    {
        title: 'Projects',
        Icon: ProjectsIcon
    },
    {
        title: 'Services',
        Icon: ServicesIcon
    },
    {
        title: 'About us',
        Icon: AboutIcon
    }
];
