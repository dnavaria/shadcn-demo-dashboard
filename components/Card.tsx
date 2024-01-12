import React from 'react';
import {LucideIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import BaseCard from "@/components/BaseCard";


export type CardProps = {
    label: string,
    icon: LucideIcon,
    amount: string,
    description: string,
};

const Card = (props: CardProps) => {
    return (
        <div>
            <BaseCard className={""}>
                <section className={"flex justify-between gap-2"}>
                    <p className={"text-sm"}>{props.label}</p>
                    <props.icon className={"h-4 w-4 text-gray-400"}/>
                </section>
                <section className={"flex flex-col gap-1"}>
                    <h2 className={"text-2xl font-semibold"}>
                        {props.amount}
                    </h2>
                    <p className={"text-xs text-gray-500"}>
                        {props.description}
                    </p>
                </section>
            </ BaseCard>
        </div>
    );
};



export default Card;