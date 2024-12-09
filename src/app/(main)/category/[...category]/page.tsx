import { getCategoryByHandle } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import DefaultLayout from "@modules/layout/templates"

type Props = {
  params: { category: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err) => {
    notFound()
  })

  const category = product_categories[0]

  return {
    title: `${category?.name} | eNOOL Store`,
    description: `${category?.name} category`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).catch((err) => {
    notFound()
  })

  return (
    <DefaultLayout>
      <CategoryTemplate categories={product_categories} />
    </DefaultLayout>
  )
}
