"use client";
import React from 'react';
import {Nav} from "@/components/ui/nav";

import {
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound, ChevronRight, ChevronLeft
} from "lucide-react"

import {Button} from "@/components/ui/button";

type Props = {}

const sidebarStyleCollapsing = {
    transition: 'width 0.4s ease-in-out',
};

const sidebarStyleExpanded = {
    transition: 'width 0.1s ease-out',
};

const SideNavbar = ({}: Props) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    //  get current window width
    const [mobileWidth, setMobileWidth] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setMobileWidth(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    return (
        <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24" style={
            isCollapsed ? {...sidebarStyleCollapsing, width: "80px"} : {...sidebarStyleExpanded, width: mobileWidth ? "80px" : "240px"}
        }>
            {!mobileWidth && (
                <div className={"absolute right-[-20px] top-7"}>
                    <Button variant={"secondary"} className={"rounded-full p-2"} onClick={toggleSidebar}>
                        {
                            isCollapsed ? <ChevronRight/> : <ChevronLeft/>
                        }
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost",
                    }
                ]}
            />
        </div>
    );
};

export default SideNavbar;