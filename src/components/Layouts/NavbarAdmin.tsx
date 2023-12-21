"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { signOut } from "next-auth/react";



export function NavigationMenuDemo({ session }: any) {
    const componentOptions: {
        title: string;
        href: string;
    }[] = [
            {
                title: "News",
                href: `/auth/news`,
            },
            {
                title: "Announcements",
                href: `/auth/announcements`,
            },
            {
                title: "Events",
                href: `/auth/events`,
            }
        ]

    const componentBanner: {
        title: string;
        href: string;
    }[] = [
            {
                title: "Home Banner",
                href: `/auth/banner-home`,
            },

        ]

    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='/' className="text-[17px] font-medium">HomePage</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/auth' className="text-[17px] font-medium">Admin</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md font-medium bg-transparent">Options</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {componentOptions.map((component) => (
                                <Link
                                    key={component.href}
                                    href={component.href}
                                    className="py-1 px-2 shadow-sm hover:text-[#348cfa]"
                                >
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md font-medium bg-transparent">Banners</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {componentBanner.map((component) => (
                                <Link
                                    key={component.href}
                                    href={component.href}
                                    className="py-1 px-2 shadow-sm hover:text-[#348cfa]"
                                >
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="pl-2">
                    <button onClick={() => signOut()}>Logout</button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block text-black select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-[#348cfa] focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm text-black font-semibold leading-none hover:text-[#348cfa] duration-75">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
