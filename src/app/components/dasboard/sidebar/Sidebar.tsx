import Image from "next/image";
import Link from "next/link";
import {SidebarItem} from "./SidebarItem";
import {
    IoBasketOutline,
    IoCalendarOutline,
    IoCheckboxOutline,
    IoCodeWorkingOutline,
    IoListOutline,
    IoPersonOutline
} from "react-icons/io5";
import {getServerSession} from "next-auth";
import {LogoutButton} from "@/app/components";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
export async function Sidebar() {
    const menuItem = [
        {title: 'Dashboard', icon: <IoCalendarOutline size={30} />, path: '/dashboard'},
        {title: 'Rest TODO', icon: <IoCheckboxOutline size={30} />, path: '/dashboard/rest-todos'},
        {title: 'Server Actions', icon: <IoListOutline size={30} />, path: '/dashboard/server-todos'},
        {title: 'Cookies', icon: <IoCodeWorkingOutline size={30} />, path: '/dashboard/cookies'},
        {title: 'Productos', icon: <IoBasketOutline size={30} />, path: '/dashboard/products'},
        {title: 'Perfil', icon: <IoPersonOutline size={30} />, path: '/dashboard/profile'},
    ];
    const session = await getServerSession(authOptions);
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard/" title="dashboard">
                        <Image src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" width={100} height={100} alt="tailus logo"/>
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image src={session?.user?.image ?? ''} width={100} height={100} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                        {
                            session?.user?.name ?? 'User'
                        }
                    </h5>
                    <span className="hidden text-gray-400 lg:block capitalize">{session?.user?.roles?.join(', ')}</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        menuItem.map((item) => (
                            <SidebarItem key={item.path} title={item.title} icon={item.icon} path={item.path}/>
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogoutButton />
            </div>
        </aside>
    )
}
