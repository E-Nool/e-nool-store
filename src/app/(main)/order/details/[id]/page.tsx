import medusaRequest from "@lib/medusa-fetch";
import AccountLayout from "@modules/account/templates/account-layout";
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template";
import { Metadata } from "next";
import DefaultLayout from "@modules/layout/templates";

type Props = {
  params: { id: string };
};

async function getOrder(id: string) {
  const res = await medusaRequest("GET", `/orders/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch order: ${id}`);
  }

  return res.body;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { order } = await getOrder(params.id);

  return {
    title: `Order #${order.display_id}`,
    description: `View your order`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { order } = await getOrder(params.id);

  return (
    <DefaultLayout>
      {" "}
      <OrderCompletedTemplate order={order} />{" "}
    </DefaultLayout>
  );
}
