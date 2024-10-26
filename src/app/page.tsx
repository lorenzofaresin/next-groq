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
                className="flex gap-2"
            >
                <input
                    type="text"
                    id="q"
                    name="q"
                    required
                    placeholder="Flight plan..."
                    className="border rounded p-1 bg-black"
                />
                <button
                    disabled={isPending}
                    className="border rounded py-1 px-5 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-500 disabled:animate-pulse"
                >
                    Land 🚀
                </button>
            </form>
            <div className="flex gap-4">
                {isPending ? <Skeleton /> : <code className="whitespace-pre-wrap">{state}</code>}
            </div>
        </>);
}
