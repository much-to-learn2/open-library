interface Props {
    value: string,
    onChange: (e: any) => void,
}

const SortBy = (props: Props) => {
    return (
    <select id="sortBy" value={props.value} onChange={props.onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="relevance">Sort by relevance</option>
        <option value="year_published">Sort by year published</option>
    </select>
    )
}

export default SortBy