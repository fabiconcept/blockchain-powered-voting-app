export default function AppButton({text, func}) {
    return (
        <div className="bg-main-green w-full text-white text-center p-4 rounded-md select-none cursor-pointer active:opacity-60 active:scale-[.97] active:-translate-y-2 transition ease-in-out duration-[250]">
            {text}
        </div>
    )
}
