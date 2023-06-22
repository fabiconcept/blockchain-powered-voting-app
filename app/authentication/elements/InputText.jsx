export default function InputText({icon, label, value, type}) {
    return (
        <div className="group relative w-full min-w-[200px] flex items-center bg-slate-50 border-slate-400 border rounded-lg focus-within:border-main-green">
            <input type={type} className="flex-1 px-3 py-4 text-md outline-none bg-transparent peer appearance-none" placeholder=" " />
            <div className="px-3 peer-placeholder-shown:text-slate-500 text-main-green peer-invalid:text-red-600">
                {icon}
            </div>
            <label className="absolute px-3 pointer-events-none top-[-0.7rem] left-[1rem] text-sm bg-white text-main-green peer-placeholder-shown:top-2/4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-slate-500 peer-placeholder-shown:left-0 transition duration-[250] ease-linear">
                {label}
            </label>
        </div>
    );
}