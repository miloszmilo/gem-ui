type Props = {
  crumbs: string[];
  separator?: string;
};

export default function Breadcrumbs({ crumbs, separator = ">" }: Props) {
  return (
    <div className="flex flex-row gap-2">
      {crumbs.map((c: string, i: number) => {
        return (
          <div className="flex flex-row gap-2">
            <span>{c}</span>
            {i < crumbs.length - 1 && <span>{separator}</span>}
          </div>
        );
      })}
    </div>
  );
}
