"use client";  // Tells the compiler "hey man, only include this component in client-side bundles"

import Link from "next/link"; // Provides a way to create navigation links that work seamlessly with Next.js routing
import Image from "next/image"; // Provides optimized image loading and management features
import { cn } from "@/lib/utils";  
import { sidebarLinks } from "@/constants"; // Likely contains information about the sidebar navigation links
import { usePathname } from "next/navigation"; // Provides access to the current pathname of the application


const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2 ">
        <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="ThebePay logo"
            className="size-[24px] max-xl:size-14"
            />
        <h1 className="sidebar-logo">ThebePay</h1>
        </Link>

        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

            return (
                <Link href={item.route} key={item.label} className={cn("sidebar-link", {
                    "bg-bank-gradient" : isActive
                })}>
                    <div className="relative size-6">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn({
                          "brightnexx-[3] invert-0": isActive
                        })}
                        />
                    </div>
                    <p className={cn("sidebar-label", {
                      "!text-white": isActive
                    })}>
                      {item.label}
                    </p>
                </Link>
            )
        })}

        USER 
      </nav>

      FOOTER
    </section>
  )
}

export default Sidebar

// Inside the map function, an isActive variable is created. It uses a comparison between the pathname and the item.route to determine if the link is currently active
