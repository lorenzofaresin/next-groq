"use client";

import { ask } from "@/app/actions";
import Skeleton from "@/app/components/skeleton";
import { useActionState } from "react";


export default function Home() {
    const [state, formAction, isPending] = useActionState(ask, "");
    return (
        <>
            <form
                action={formAction}
                className="flex gap-2 sticky top-4 z-10 w-full justify-center backdrop-blur-sm"
            >
                <input
                    type="text"
                    id="q"
                    name="q"
                    required
                    placeholder="Flight plan..."
                    className="border rounded p-2 bg-black w-full"
                />
                <button
                    disabled={isPending}
                    className="border rounded p-2 px-5 bg-black disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-500 disabled:animate-pulse"
                >
                    Land&nbsp;🚀
                </button>
            </form>
            <div className="flex gap-4 h-full overflow-auto">
                {isPending ? <Skeleton /> : <code className="whitespace-pre-wrap block">{state}</code>}
            </div>
        </>);
}
