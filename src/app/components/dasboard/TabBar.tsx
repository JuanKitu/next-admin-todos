'use client'
import {useState} from "react";
import {setCookie} from "cookies-next/client";

interface Props {
    currentTab?: number;
    tabOptions?: number[];
}
export const TabBar = ({currentTab = 1, tabOptions = [1,2,3,4, 5]}:Props) => {
    const [selected, setSelected] = useState(currentTab);
    const onTabChange = (tab: number) => {
        setSelected(tab);
        setCookie('selectedTab', tab.toString(), {})
    };
    return (
        <div className={`
        grid w-full space-x-2 rounded-xl bg-gray-200 p-2
        `} style={{ gridTemplateColumns: `repeat(${tabOptions.length}, minmax(0, 1fr))` }}
        >
            {
                tabOptions.map((option) => (
                    <div key={option}>
                        <input checked={selected === option}
                               onChange={() => {}}
                            type="radio" id={option.toString()} className="peer hidden" />
                        <label onClick={() => onTabChange(option)}
                            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            { option }
                        </label>
                    </div>
                ))
            }

        </div>
    )
}
