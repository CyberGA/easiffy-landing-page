import SubCategories from "@/components/categories/sub-categories";

export default function Page({
  params: { category },
}: {
  params: { category: string };
}): React.ReactNode {
  return <SubCategories id={category} />;
}
