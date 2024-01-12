"use client";
import PageTitle from "@/components/PageTitle";
import Card, {CardProps} from "@/components/Card";
import {Activity, CreditCard, DollarSign, Users} from "lucide-react";
import BaseCard from "@/components/BaseCard";
import BarGraph from "@/components/BarGraph";
import SalesCard, {SalesProps} from "@/components/SalesCard";

const cardData: CardProps[] = [
    {
        label: "Total Revenue",
        amount: "$ 1,250.00",
        description: "+20.1% from last month",
        icon: DollarSign
    },
    {
        label: "Subscriptions",
        amount: "+1250.00",
        description: "+180.1% from last month",
        icon: Users
    },
    {
        label: "Sales",
        amount: "+12,234",
        description: "+19% from last month",
        icon: CreditCard
    },
    {
        label: "Activity",
        amount: "+573",
        description: "+201 since last hour",
        icon: Activity
    }
];

const userSalesData: SalesProps[] = [
    {
        name: "John Doe",
        email: "john@gmail.com",
        saleAmount: "$ 1,250.00"
    },
    {
        name: "Jane Doe",
        email: "jane@gmail.com",
        saleAmount: "$ 5,250.00",
    },
    {
        name: "Ramona",
        email: "ramona@gmail.com",
        saleAmount: "$ 2,250.00",
    },

]

export default function Home() {
    return (
        <main className="flex flex-col gap-5 w-full">
            <PageTitle title="Dashboard"/>
            <section className={"grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"}>
                {
                    cardData.map((card, index) => (
                        <Card
                            key={index}
                            label={card.label}
                            amount={card.amount}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))
                }
            </section>
            <section className={"grid grid-cols-1 gap-4 transition-all lg:grid-cols-2"}>
                <BaseCard>
                    <p className={"p-4 font-semibold"}>Overview</p>
                    <BarGraph/>
                </BaseCard>
                <BaseCard className={"flex justify-between gap-4"}>
                    <section>
                        <p>Recent Sales</p>
                        <p className={"text-sm text-gray-400"}>
                            You made 265 sales this month.
                        </p>

                        <div className={"mt-4"}>
                            {
                                userSalesData.map((user, index) => (
                                    <SalesCard
                                        key={index}
                                        name={user.name}
                                        email={user.email}
                                        saleAmount={user.saleAmount}
                                    />
                                ))
                            }
                        </div>

                    </section>
                </BaseCard>
            </section>
        </main>
    )
}

