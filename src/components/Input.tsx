interface Props {
    value: string,
    onChange: (e: any) => void,
}

const Input = (props: Props) => {
    const inputClasses = "block w-full rounded-md border-0 px-1.5 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

    return (
        <div className="w-full lg:max-w-sm my-2">
            <input 
                id="text-input" name="input" type="text" placeholder="Book Title"
                value={props.value} 
                onChange={props.onChange}
                className={inputClasses}
            />
        </div>
    )
}

export default Input