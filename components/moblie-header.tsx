import { MoblieSidebar } from "./moblie-sidebar"

export const MoblieHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-700 border-b fixed top-0 w-full z-50">
            <MoblieSidebar />
        </nav>
    )
}