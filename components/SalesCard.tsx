import React from 'react';

import {createAvatar} from '@dicebear/core';
import {lorelei} from '@dicebear/collection';


export type SalesProps = {
    name: string;
    email: string;
    saleAmount: string;

};

const SalesCard = (props: SalesProps) => {
    const avatar = createAvatar(lorelei, {
        "seed": props.name
    });
    return (
        <div className={"flex flex-wrap justify-between gap-3 py-3"}>
            <section className={"flex justify-between gap-3 "}>
                <div className={"h-12 w-12 rounded-full bg-gray-100 p-1"}>
                    <img src={avatar.toDataUriSync()} alt={"avatar"} width={200} height={200}/>
                </div>
                <div className={'text-sm'}>
                    <p>{props.name}</p>
                    <div
                        className={"text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400"}>
                        {props.email}
                    </div>
                </div>
            </section>
            <p>{props.saleAmount}</p>
        </div>
    );
};

export default SalesCard;