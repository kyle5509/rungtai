'use client'
import { Provider } from "react-redux";
import { store } from "../Store/store";

type Props = {
    children: React.ReactNode
}

export default function AppProvider({ children }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
