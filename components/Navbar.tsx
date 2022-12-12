import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center w-auto mx-2 my-4 rounded-lg h-auto py-4 px-8 bg-[#1e1e1e] text-white">
            <div className="font-semibold text-xl h-auto">Next.js + TypeScript + TailwindCSS + Eslint + Prettier template</div>

            <div className="flex flex-row items-center">
                <Link href={"/"} className="font-semibold text-lg hover:underline">Home</Link>
            </div>
        </div>
    )
}