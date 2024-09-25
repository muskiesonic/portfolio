export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-5">
            <h2 className="text-24-40 text-center font-extrabold mt-12">{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export { SectionHeader };
