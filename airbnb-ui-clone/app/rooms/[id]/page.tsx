import RoomDetailView from "../../../components/RoomDetailView";

type RoomDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const RoomDetailPage = async ({ params }: RoomDetailPageProps) => {
  const { id } = await params;

  return <RoomDetailView key={id} roomId={id} />;
};

export default RoomDetailPage;
