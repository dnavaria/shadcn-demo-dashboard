import React from 'react';
import {cn} from "@/lib/utils";


type Props = {
    title: string,
    className?: string,
}
const PageTitle = ({title, className}: Props) => {
    return (
        <div className={cn("text-2xl font-semibold", className)}>
            {title}
        </div>
    );
};

export default PageTitle;