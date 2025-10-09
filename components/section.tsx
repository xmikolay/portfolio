import { ReactNode } from "react";

export function Section({
    id,
    title,
    children,
    }: {
        id: string;
        title: string;
        children: ReactNode;
    }) {
        return (
            <section id={id} className="py-14">
                <div className="container space-y-6">
                    <h2 className="text-2x1 font-semibold tracking-tight">{title}</h2>
                    {children}
                </div>               
            </section>
        );
    }
