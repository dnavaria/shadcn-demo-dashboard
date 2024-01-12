"use client";
import React from 'react';
import PageTitle from "@/components/PageTitle";
import {DataTable} from "@/components/DataTable";
import {ColumnDef} from "@tanstack/react-table"
import {createAvatar} from '@dicebear/core';
import {lorelei} from '@dicebear/collection';

type Props = {};
type Payment = {
    name: string;
    email: string;
    lastOrder: string;
    method: string;
}

const payments: Payment[] = [
    {
        name: "John Doe",
        email: "john@example.com",
        lastOrder: "2023-01-01",
        method: "Credit Card"
    },
    {
        name: "Alice Smith",
        email: "alice@example.com",
        lastOrder: "2023-02-15",
        method: "PayPal"
    },
    {
        name: "Bob Johnson",
        email: "bob@example.com",
        lastOrder: "2023-03-20",
        method: "Stripe"
    },
    {
        name: "Emma Brown",
        email: "emma@example.com",
        lastOrder: "2023-04-10",
        method: "Venmo"
    },
    {
        name: "Michael Davis",
        email: "michael@example.com",
        lastOrder: "2023-05-05",
        method: "Cash"
    },
    {
        name: "Sophia Wilson",
        email: "sophia@example.com",
        lastOrder: "2023-06-18",
        method: "Bank Transfer"
    },
    {
        name: "Liam Garcia",
        email: "liam@example.com",
        lastOrder: "2023-07-22",
        method: "Payoneer"
    },
    {
        name: "Olivia Martinez",
        email: "olivia@example.com",
        lastOrder: "2023-08-30",
        method: "Apple Pay"
    },
    {
        name: "Noah Rodriguez",
        email: "noah@example.com",
        lastOrder: "2023-09-12",
        method: "Google Pay"
    },
    {
        name: "Ava Lopez",
        email: "ava@example.com",
        lastOrder: "2023-10-25",
        method: "Cryptocurrency"
    },
    {
        name: "Elijah Hernandez",
        email: "elijah@example.com",
        lastOrder: "2023-11-05",
        method: "Alipay"
    },
    {
        name: "Mia Gonzalez",
        email: "mia@example.com",
        lastOrder: "2023-12-08",
        method: "WeChat Pay"
    },
    {
        name: "James Perez",
        email: "james@example.com",
        lastOrder: "2024-01-18",
        method: "Square Cash"
    },
    {
        name: "Charlotte Carter",
        email: "charlotte@example.com",
        lastOrder: "2024-02-22",
        method: "Zelle"
    },
    {
        name: "Benjamin Taylor",
        email: "benjamin@example.com",
        lastOrder: "2024-03-30",
        method: "Stripe"
    }
];

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({row}) => {
            const avatar = createAvatar(lorelei, {
                "seed": row.getValue('name')
            });
            return <div className={"flex flex-row items-center"}><img className={"h-10 w-10"} alt={"user-image"} src={avatar.toDataUriSync()}/>{row.getValue('name')}</div>
        }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "lastOrder",
        header: "Last Order",
    },
    {
        accessorKey: "method",
        header: "Method",
    },

]

const UsersPage = ({}: Props) => {
    return (
        <div className={"flex flex-col gap-5 w-full"}>
            <PageTitle title="Users"/>
            <DataTable columns={columns} data={payments}/>
        </div>
    );
};

export default UsersPage;